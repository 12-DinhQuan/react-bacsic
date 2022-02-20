
function logger(reduce) {
    return (prev, action) => {
        console.group(action.type)
        console.log("Prev State: ", prev)
        console.log("Prev Action: ", action)

        const newState = reduce(prev, action)

        console.log("New State: ", newState)
        console.groupEnd()
        return newState
    }
}

export default logger