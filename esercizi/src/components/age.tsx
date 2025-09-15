type AgeProps = {
    eta: number
}

function Age({eta = 18}:AgeProps) {
    return <p>Your age is {eta}</p>
}

export default Age