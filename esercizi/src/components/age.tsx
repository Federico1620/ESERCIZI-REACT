type AgeProp = {
    age: number
}

function Age({age}: AgeProp) {
    return <p>You are {age} years old!</p>
}

export default Age