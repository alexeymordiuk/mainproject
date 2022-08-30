import React from 'react'
import './subscribe.css'

const Subscribe = () => {
	return (
		<section className='subscribe'>

			<div className='subscribe__container'>

				<div className='subscribe__inner'>
					<h2 className='subscribe__title title'>Get The Best Updates</h2>
					<p className='subscribe__text'>Subscribe with your mail id to know the current update in book edition at your fingertip with in a minute.</p>
					<p className='subscribe__text'>edition at your fingertip with in a minute.</p>

					<div className='subscribe__buttons'>
						<form className='subscribe__form'>
							<input type="text" placeholder='Your Email ID...' className='subscribe__text-field'/>
							<button type="submit" className='subscribe__submit'>Subscribe</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Subscribe