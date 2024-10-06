function ButtonInline() {
	const styles = {
		backgroundColor: 'hsl(200, 100%, 50%)',
		color: 'white',
		padding: '10px 20px',
		borderRadius: '5px',
		border: 'none',
		cursor: 'pointer',
		margin: '2px',
	}
	return (
		<>
			<div>
				<button style={styles}>i am inline</button>
			</div>
		</>
	)
}

export default ButtonInline
