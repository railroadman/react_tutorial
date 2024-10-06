import profilePic from './assets/avatar.webp'
function Card() {
	return (
		<div className='card'>
			<img src={profilePic} alt='myimage' className='card-image' />
			<h2 className='card-title'>Bro code2</h2>
			<p className='card-text'>I make youtube videos and play video games</p>
		</div>
	)
}

export default Card
