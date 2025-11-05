const delayMiddleware = (store) => (next) => (action) => {
    console.log(`⏳ Ritardo 3s per: ${action.type}`);
    return setTimeout(() => {
        console.log(`🚀 Invio azione: ${action.type}`);
        next(action)
    }, 3000);
}

export default delayMiddleware