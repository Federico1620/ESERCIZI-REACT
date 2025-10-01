import { useEffect, useState } from "react";

function useCurrentLocation() {
    const [position, setPosition] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=> {
        try {
            if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setPosition({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                })
            })
        }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    })
    return [position, loading, error]
}

export default useCurrentLocation