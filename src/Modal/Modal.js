import React, { Component } from "react";
import axios from "axios";
import TextareaAutosize from "react-textarea-autosize";
import Radium, { StyleRoot, Style } from "radium";
import "./Modal-Styles";

const defaults = {
  postUrl: "https://feeder-node-1337.herokuapp.com/feedback/create"
}

class Modal extends Component {
  state = {
    feedbackEmail: this.props.emailDefaultValue,
    feedbackType: this.props.feedbackTypes[0],
    feedbackMsg: "",
    subProject: this.props.subProject,
    loading: false,
    submitted: false,
    feedbackTypes: ["general", "bug", "idea"],
  };

  componentDidMount() {
    this.mounted = true;

    let tempArr = [];

    this.props.feedbackTypes.forEach((f, i) => {
      if (i < 3) {
        tempArr[i] = f.trim();
      }
    });

    this.setState({ feedbackTypes: tempArr });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Only relevant to demo/playground
  componentDidUpdate(prevProps) {
    if (prevProps.emailDefaultValue !== this.props.emailDefaultValue) {
      this.setState({ feedbackEmail: this.props.emailDefaultValue });
    }

    if (prevProps.subProject !== this.props.subProject) {
      this.setState({ subProject: this.props.subProject });
    }

    if (prevProps.feedbackTypes !== this.props.feedbackTypes) {
      this.setState({ feedbackType: this.props.feedbackTypes[0] });
      let tempArr = [];
      let { feedbackTypes } = this.props;

      feedbackTypes.forEach((f, i) => {
        if (i < 3) {
          tempArr[i] = f.trim();
        }
      });

      this.setState({ feedbackTypes: tempArr });
    }
  }

  capitalize = (str) => {
    return str.replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
  };

  handleTxtChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Prevent double+ submit
    if (this.state.loading) {
      return;
    }

    this.setState({ loading: true });
    let { postUrl } = this.props
    postUrl = postUrl || defaults.postUrl    
    this.postPayload({postUrl, payload})

    setTimeout(() => {
      if (this.mounted) {
        this.setState({ loading: false });
        this.setState({ submitted: true });
        setTimeout(() => {
          if (this.mounted) {
            this.props.triggerModal();
          }
        }, 1000);
      }
    }, 1000);
  };

  postPayload({postUrl, payload}) {
    axios
      .post(postUrl, payload)
      .then(() => {
        return;
      })
      .catch((e) => console.log(e.toString()));
  }

  get payload() {
    let { feedbackEmail, feedbackType, feedbackMsg, subProject } = this.state;
    let { projectId } = this.props;

    return {
        projectId,
        feedbackEmail,
        feedbackType,
        feedbackMsg,
        subProject,
        feedbackSrc:
          typeof window !== "undefined" ? window.location.pathname : null,      
    }
  }

  render() {
    let { feedbackEmail, feedbackType, feedbackMsg, loading, submitted, feedbackTypes } = this.state;
    let { props, handleTxtChange, handleSubmit } = this;

    return (
      <StyleRoot>
        <FeedbackForm handleSubmit={handleSubmit} {...props}>
            <FeedbackEmail feedbackEmail={feedbackEmail} onTxtChange={handleTxtChange} {...props}/>
            <FeedbackType feedbackType={feedbackType} feedbackTypes={feedbackTypes} {...props} />
            <FeedbackMesage feedbackMsg={feedbackMsg} onMessageChange={handleTxtChange} {...props}/>
            <SubmitButton loading={loading} submitted={submitted} {...props}/>
            <WaterMark />
          </FeedbackForm>
      </StyleRoot>
    );
  }
}

export default Radium(Modal);
