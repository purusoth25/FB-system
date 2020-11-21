export const FeedbackEmail = ({email, emailRequired, feedbackEmail, onTxtChange, hoverBorderColor}) => {email && (
  <div className="frf-modal-input-group">
    <div className="frf-modal-label" htmlFor="feedbackEmail">
      Email{emailRequired ? " *" : null}
    </div>
    <input
      className="frf-modal-input"
      onChange={onTxtChange}
      value={feedbackEmail}
      required={emailRequired}
      id="feedbackEmail"
      name="feedbackEmail"
      type="email"
      key="1"
      style={{
        ":hover": {
          border: `1px solid ${hoverBorderColor}`,
          boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
        },
        ":focus": {
          border: `1px solid ${hoverBorderColor}`,
          boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
        },
        ":active": {
          border: `1px solid ${hoverBorderColor}`,
          boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
        },
      }}
      placeholder={"Enter your email"}
    />
  </div>
)}
