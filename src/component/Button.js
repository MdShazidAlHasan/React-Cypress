import propTypes from 'prop-types'
const Button = ({color, text, onclick}) => {
    return (
        <button data-testid='add' onClick = {onclick} style={{backgroundColor:color}} className= 'btn'> 
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes = {
    text:propTypes.string,
    color:propTypes.string,
}

export default Button