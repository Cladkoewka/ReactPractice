let a = 1

const App = (props) => {
    const { initialButtonText, initialButtonClasses } = props
    const [buttonText, setButtonText] = React.useState(initialButtonText)
    const [buttonClasses, setButtonClass] = React.useState(initialButtonClasses)

    const onButtonClick = () => {
        setButtonText("Clicked: " + a++)
        setButtonClass("green-btn")
    }

    return (
        <div className="app">
            <button className={buttonClasses} onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="click me" initialButtonClasses="" />)
