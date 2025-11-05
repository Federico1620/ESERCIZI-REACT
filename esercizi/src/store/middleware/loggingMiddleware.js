const loggingMiddleware = (store) => (next) => (action) => {
    console.log("Stato iniziale", store.getState())
    console.log("Azione dispatch",action)
    const result = next(action)
    console.log("Stato successivo", store.getState())
    return result
}

export default loggingMiddleware