function ResetButton({ resetCount }) {
  const buttonStyle = { backgroundColor: "red" }

  return (
    <div>
      <button style={buttonStyle} onClick={resetCount}>
        Reset
      </button>
    </div>
  )
}

export default ResetButton
