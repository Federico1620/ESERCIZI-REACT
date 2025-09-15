type MessageProp = {
    age: number
}

function Message({age}: MessageProp) {
    return (<>
    {age > 18 ? (
        <p>You are {age} years old!</p>
    ) : (
        <p>You are very young!</p>
    )}
    </>)
}

export default Message