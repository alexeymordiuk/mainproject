import React from 'react'
import './footer.css'
import Logo1 from '../../images/logo.svg'
import Bubles from '../../images/bubles.png'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'


const Footer = () => {
	return (
		<footer className='footer' id='contact'>

			<div className='footer__container'>

				<div className='footer__social'>
					<a href="index.html"><img src={Logo1} alt="" className='footer__logo' /></a>
					<div className='footer__social-icons'>
						<a href="#" className='footer__links'><FaFacebookF /></a>
						<a href="#" className='footer__links'><BsTwitter /></a>
						<a href="#" className='footer__links'><FaInstagramSquare /></a>
					</div>
				</div>

				<div className='footer__list'>
					<h2 className='footer__title-list'>Explore</h2>
					<ul>
						<li className='footer__items'><a href="" className='footer__nav'>Home</a></li>
						<li className='footer__items'><a href="" className='footer__nav'>About</a></li>
						<li className='footer__items'><a href="" className='footer__nav'>Articles</a></li>
						<li className='footer__items'><a href="" className='footer__nav'>Our Store</a></li>
						<li className='footer__items'><a href="" className='footer__nav'>Contact Us</a></li>
					</ul>
				</div>

				<div className='footer__list'>
					<h2 className='footer__title-list'>Explore</h2>
					<ul>
						<li className='footer__items'><a href="" className='footer__nav'>Style Guide</a></li>
						<li className='footer__items'><a href="" className='footer__nav'>404 Not Found</a></li>
						<li className='footer__items'><a href="" className='footer__nav'>Password Protected</a></li>
						<li className='footer__items'><a href="" className='footer__nav'>Licenses</a></li>
						<li className='footer__items'><a href="" className='footer__nav'>Changelog</a></li>
					</ul>
				</div>

				<div className='footer__list'>
					<h2 className='footer__title-list'>Keep in Touch</h2>

					<div className='footer__adress'>
						<p className='footer__title-adress'>Address:</p>
						<div className='footer__state'>
							<p className='footer__text-adress'>24A Kingston St, Los Vegas</p>
							<p className='footer__text-adress'>NC 28202, USA.</p>
						</div>
					</div>

					<div className='footer__adress'>
						<p className='footer__title-adress'>Mail:</p>
						<div className='footer__state'>
							<a href="mail:aleks@gmai.com" className='footer__text-adress'>support@pages.com</a>
						</div>
					</div>

					<div className='footer__adress'>
						<p className='footer__title-adress'>Phone:</p>
						<div className='footer__state'>
							<a href="tel:0394414234" className='footer__text-adress'>(+22) 123 - 4567 - 900</a>
						</div>
					</div>
				</div>
			</div>
				<p className='footer__copyrigth'><span>© Drafted by</span>VictorFlow- Powered by Webflow</p>
		</footer>
	)
}

export default Footer