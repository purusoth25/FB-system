export const FeedbackForm = ({zIndex, handleSubmit, children}) => 
  <form
  className="frf-modal-container"
  style={{ zIndex: parseInt(props.zIndex) }}
  onSubmit={this.handleSubmit}
  ><div className="frf-modal-content-container">
    {children}
  </div>
</form>

