const Modals = ({message, isHiddenAlert}) => {
    return (
        <>
            <div className={`${isHiddenAlert ? 'hidden' : ''} border-2 border-green-700 bg-green-300`}>
                <div>{message}</div>
            </div>
        </>
    )
}

export default Modals