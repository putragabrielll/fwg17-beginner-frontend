import propTypes from "prop-types"

const Modals = ({ message, isHiddenAlert, isSuccess }) => {
    return (
        <>
            <div className={`${isHiddenAlert ? 'hidden' : ''} ${isSuccess ? 'border-green-700 bg-green-300' : 'border-red-700 bg-red-300'} border-2 border-green-700 bg-green-300 p-2 rounded-md`}>
                <div>{message}</div>
            </div>
        </>
    )
}

Modals.propTypes = { // untuk prop valitdation dari modals
    message: propTypes.string,
    isHiddenAlert: propTypes.bool,
    isSuccess: propTypes.bool
}

export default Modals