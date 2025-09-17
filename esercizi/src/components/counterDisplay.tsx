type CounterDisplayProp = {
    counter: number
}

function CounterDisplay({counter}: CounterDisplayProp) {
    return <h2>{counter}</h2>
}

export default CounterDisplay