import { useEffect, useRef } from "react"

function Incognito() {
    const pRef = useRef(false)
    useEffect(()=> {
        if(!pRef.current) {
            console.log("Montato")
            pRef.current = true
        }
    },[])
    return(<>
    <div>
        <p>Stamperò un messaggio al montaggio!</p>
    </div>
    </>)
}

export default Incognito