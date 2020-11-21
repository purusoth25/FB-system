let Textarea = Radium(TextareaAutosize);

export const FeedbackType = ({hoverBorderColor, onMessageChange, feedbackMsg, subProject, projectName}) => <div className="frf-modal-input-group">
  <div className="frf-modal-label" htmlFor="feedbackMsg">
    Feedback Message *
  </div>
  <Style
    key="5"
    scopeSelector="textarea"
    rules={{
      ":hover": {
        border: `1px solid ${hoverBorderColor}`,
        boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
      },
    }}
  />
  <Textarea
    key="6"
    className="frf-modal-input"
    onChange={onMessageChange}
    value={feedbackMsg}
    required
    id="feedbackMsg"
    name="feedbackMsg"
    type="text"
    style={{
      ":hover": {
        border: `1px solid ${hoverBorderColor}`,
        boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
      },
      ":focus": {
        border: `1px solid ${hoverBorderColor}`,
        boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
      },
    }}
    placeholder={`Enter your feedback${
      subProject
        ? ` for ${subProject}`
        : projectName
        ? ` for ${projectName}`
        : ""
    }`}
  />
</div>
