import Age from "./age"

type WelcomeProps = {
    name?: string
    age?: number
}

function Welcome({name = "Anonimo", age = 18}: WelcomeProps) {
    return (<>
    <p>Welcome <strong>{name}</strong></p>
    <Age eta ={age}></Age>
    </>)
}

export default Welcome