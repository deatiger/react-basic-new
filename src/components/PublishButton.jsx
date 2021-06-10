const PublishButton = (props) => {
  return (
    <button onClick={() => props.onClick()}>
      公開状態: {props.isPublished.toString()}
    </button>
  )
}
export default PublishButton;