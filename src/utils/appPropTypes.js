import PropTypes from 'prop-types'

const AppPropTypes = {
    auth: PropTypes.shape({
        inProcess: PropTypes.bool,
        token: PropTypes.string,
        user: PropTypes.object
    }),
}

export default AppPropTypes;