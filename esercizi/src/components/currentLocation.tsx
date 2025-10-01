import useCurrentLocation from "./useCurrentLocation";

function CurrentLocation() {
    const [position, loading, error] = useCurrentLocation()
    return(<>
    {loading && <p>Caricamento...</p>}
    {position && <div>
        <p>Latitudine: {position.latitude}</p>
        <p>Longitudine: {position.longitude}</p>
        </div>}
        {!position && <p>{error}</p>}
    </>)
}

export default CurrentLocation