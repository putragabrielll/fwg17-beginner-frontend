const Modals = ({message, isHiddenAlert, isSuccess}) => {
    return (
        <>
            <div className={`${isHiddenAlert ? 'hidden' : ''} ${isSuccess ? 'border-green-700 bg-green-300' : 'border-red-700 bg-red-300'} border-2 border-green-700 bg-green-300 p-2 rounded-md`}>
                <div>{message}</div>
            </div>
        </>
    )
}

export default Modals