import React from 'react'
import './author.css'
import Writter from '../../images/author/author.png'
import Qr from '../../images/author/qr.png'

const Author = () => {
	return (
		<section className='author' id='about'>
			<div className='author__container'>

				<div className='author__photo'>
					<div className='author__wprapper'>
						<img src={Writter} alt="" className='author__img' />
						<div className='author__line'></div>
					</div>
				</div>

				<div className='author__content'>
					<h2 className='author__title title'>About the Author</h2>
					<p className='author__text text'>We believe that bookstores are essential to a healthy
						culture. They’re where authors can connect with readers, where we discover new writers,
						where children get hooked on
						the thrill of reading that can last a lifetime.
					</p>
					<div className='author__statisticks'>

						<div className='author__about-books'>
							<div className='author__number'>02</div>
							<p>Books Published</p>
						</div>

						<div className='author__about-books'>
							<div className='author__number'>4.5</div>
							<p>User Reviews</p>
						</div>

						<div className='author__about-books'>
							<div className='author__number'>04</div>
							<p>Best Seller Awards</p>
						</div>
					</div>

					<div className='author__contact'>
						<div className='author__inner'>
								<img src={Qr} alt="" className='author__img-qr'/>
							<div className='author__contacts'>
								<h5 className='author__ns'>John Abraham , Ph.d</h5>
									<a href="mailto:example@gmail.com" className='author__mail simple'>Mail: johnabraham@gmail.com</a>
									<a href="tel:+380985554433" className='author__phone simple'>(+2) 123 545 9000</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Author