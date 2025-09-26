import Color from "./color";

type ColorsProp ={
    items: {id: number; name: string}[]
}

function Colors({items}: ColorsProp) {
    return(<>
    <ul>
        {items.map((item)=> (
            <Color 
            key={item.id}
            name={item.name}>
            </Color>
        ))}
    </ul>
    </>)
}

export default Colors