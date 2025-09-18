import type { BaseSyntheticEvent } from "react"

function MouseClicker() {
    function hendler(event: BaseSyntheticEvent) {
        console.log(event.target.name)
    }
    function hendlerImg(event: BaseSyntheticEvent) {
        console.log(event.target.src)
        //in questo caso viene stampato anche "one" perchè nella funzione hendler viene stampato currentTarget e non target
        //lo impediamo facendo stampare event.target e non currentTarget
    }
    return(<>
    <button onClick={hendler} name = "one">
        <img onClick={hendlerImg} src="https://upload.wikimedia.org/wikipedia/commons/0/00/SSC_Napoli_2024_%28deep_blue_navy%29.svg"></img>
        Cliccami!</button>
    </>)
}
export default MouseClicker