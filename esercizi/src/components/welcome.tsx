import Age from "./age"
import Message from "./message"

type WelcomeProp = {
    name: string
    age: number
}

function Welcome({name, age}: WelcomeProp) {
    return(<>
    <p>Welcome {name}</p>
    { <Message age = {age}></Message> }
    { age > 18 && <Age age = {age}></Age>}
    { age && <Age age = {age}></Age>}
    {age > 18 && age < 65 && <Age age = {age}></Age>}
    {age > 18 && name === "John" && <Age age = {age}></Age>}
    <Age age = {age}></Age>
    </>)
}

export default Welcome