
type WelcomeProps = {
    name?: string
    age?: number
}

function Welcome({name = "Anonimo"}: WelcomeProps) {
    return (<>
    <p>Welcome <strong>{name}</strong></p>
    </>)
}

export default Welcome