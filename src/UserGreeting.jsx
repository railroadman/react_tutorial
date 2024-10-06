import propTypes from 'prop-types'
function UserGreeting(props) {
	return props.isLoggedIn ? (
		<h2 className='welcome-message'>Welcome {props.username}</h2>
	) : (
		<h2 className='login-prompt'>Please Login </h2>
	)
}

UserGreeting.propTypes = {
	username: propTypes.string,
	isLoggedIn: propTypes.bool,
}
UserGreeting.defaultProps = {
	isLLoggedIn: false,
	userName: 'Guest',
}
export default UserGreeting
