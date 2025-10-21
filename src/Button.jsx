import PropTypes from 'prop-types'

export function Button({text, names="User"}){
    //console.log(text)
    if(!text){
        console.error('El texto es requerido')
    }
    return <button>
        {text} - {names}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    names: 'Some User'
}