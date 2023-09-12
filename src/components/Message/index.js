import './index.css'

const Message = props => {
  const {displayText} = props
  return <h1 className="heading">{displayText}</h1>
}

export default Message
