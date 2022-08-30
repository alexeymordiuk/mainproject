import { motion } from 'framer-motion'
import React from 'react'
import './trusted.css'
import { TrustedCompany } from './TrustedDate'
import Coffee from "../../images/company/bg2.png"

const trustedAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}), 
}

const Trusted = () => {
	return (
		<motion.section className='trusted'>
			<h2 className='trusted__title title'>Trusted By The Best</h2>
			<motion.div 
			initial="hidden"
			viewport={{ amount: 0.2 }}
			whileInView="visible"
			className='trusted__container'>
			{TrustedCompany.map(({ id, image, title, text }) => {
				return (
				<motion.div 
				variants={trustedAnimation} 
				custom={id + 1}
				key={id} className='trusted__company'>
					<img src={image} alt="" />
					<h4 className='trusted__subtitle'>{title}</h4>
					<p className='trusted__text text'>{text}</p>
				</motion.div>
					)
				})
				}
			</motion.div>

			<div className='coffee'>

				<div className='coffee__container'>

					<div className='coffee__conent'>
						<h2 className='coffee__title'>Get Book Copy Today!</h2>
						<p className='coffee__text text'>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
						<a href="#" className='btn__primary'>Order Today</a>
					</div>

					<img src={Coffee} alt="" className='coffee__img'/>
				</div>
			</div>
		</motion.section>
	)
}

export default Trusted