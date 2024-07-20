import './index.css'

const Buttons = props => {
  const {data, toggleGreeting, isActiveBtn} = props
  const {id, buttonText} = data

  const customBtn = isActiveBtn ? 'active-button' : 'button'

  const onClickButton = () => {
    toggleGreeting(id)
  }

  return (
    <li className="button-card">
      <button className={customBtn} type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default Buttons
