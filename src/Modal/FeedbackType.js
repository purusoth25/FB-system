export const FeedbackType = ({ feedbackType, feedbackTypes, primaryColor, hoverBorderColor, textColor}) =>
  <div className="frf-modal-input-group">
    <div className="frf-modal-label">Feedback Type *</div>
    <div className="frf-modal-feedback-types">
      {feedbackTypes.map((f, i) => (
        <span
          className={
            feedbackType === feedbackTypes[i]
              ? "frf-modal-feedback-type frf-modal-feedback-selected"
              : "frf-modal-feedback-type"
          }
          key={i + 2}
          style={
            feedbackType === feedbackTypes[i]
              ? {
                  background: primaryColor,
                  color: textColor,
                  border: `1px solid ${hoverBorderColor}`,
                  boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
                  ":hover": {
                    border: `1px solid ${hoverBorderColor}`,
                    boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
                  },
                }
              : {
                  color: "#000",
                  ":hover": {
                    border: `1px solid ${hoverBorderColor}`,
                    boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
                  },
                }
          }
          onClick={() =>
            this.setState({ feedbackType: feedbackTypes[i] })
          }
        >
          {this.capitalize(feedbackTypes[i])}
        </span>
      ))}
    </div>
  </div>

