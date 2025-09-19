type WelcomeProp = {
    name:string
}

function Welcome({name}: WelcomeProp) {
    return <h3>Ciao {name}!</h3>
}

export default Welcome