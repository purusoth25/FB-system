const LoadingIndicator = ({textColor}) => <div
key="8"
style={{
  borderTop: `2.133px solid ${textColor}`,
}}
className="frf-modal-button-loader"
></div>

const SubmitIndicator = ({submitted, postSubmitButtonMsg}) => submitted ? <span>{postSubmitButtonMsg}</span> : 
  <span>{submitButtonMsg}</span>


const ButtonTxt = ({loading, submitted, postSubmitButtonMsg}) => loading ? <LoadingIndicator /> : <SubmitIndicator submitted={submitted} postSubmitButtonMsg={postSubmitButtonMsg} />

export const SubmitButton = ({ loading, submitted, postSubmitButtonMsg, primaryColor, textColor, hoverBorderColor}) => <button
  className="frf-modal-button"
  disabled={submitted}
  key="7"
  style={{
    background: primaryColor,
    color: textColor,
    ":hover": {
      border: `1px solid ${hoverBorderColor}`,
      boxShadow: `${hoverBorderColor} 0px 0px 0px 1px`,
    },
  }}
  type="submit"
  ><ButtonTxt loading={loading} submitted={submitted} postSubmitButtonMsg={postSubmitButtonMsg} />
</button>