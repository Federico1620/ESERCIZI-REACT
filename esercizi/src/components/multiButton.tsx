import type { BaseSyntheticEvent } from "react"

function MultiButton() {
    function hendlerOne(event: BaseSyntheticEvent) {
        console.log(event.target.name)
    }
    function hendlerTwo(event: BaseSyntheticEvent) {
        console.log(event.target.name)
    }
    function hendlerThree(event: BaseSyntheticEvent) {
        console.log(event.target.name)
    }
    return(<>
    <button onClick={hendlerOne} name="one">ONE</button>
    <button onClick={hendlerTwo} name="two">TWO</button>
    <button onClick={hendlerThree} name="three">THREE</button>
    </>)
}

export default MultiButton