type WelcomeProp = {
    name:string
}

function Welcome({name}: WelcomeProp) {
    return <h3 className="welcome">Ciao {name}!</h3>
}

export default Welcome