type ColorProp = {
    name: string
}

function Color({name}:ColorProp) {
    return <li>{name}</li>
}

export default Color