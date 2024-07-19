import './index.css'

const Buttons = props => {
  const {data, toggle} = props
  const {id, imageUrl, buttonText, imageAltText} = data

  const onClickButton = () => {
    toggle(id)
  }

  return (
    <div className="buttons-container">
      <button type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </div>
  )
}

export default Buttons
