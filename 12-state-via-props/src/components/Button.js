function Button({ onClick, addAmount = 1 }) {
  return <button onClick={() => onClick(addAmount)}>Add {addAmount}</button>
}

export default Button
