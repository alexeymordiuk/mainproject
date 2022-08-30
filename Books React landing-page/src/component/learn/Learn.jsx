import { motion } from 'framer-motion'
import React from 'react'
import './learn.css';
import { learnDate } from './LearnDate';
import Img from '../../images/learn/IMAGE.png'

const learnAnimation = {
	// hidden: {
	// 	x: -100,
	// 	opacity: 0,
	// },
	// visible: custom => ({
	// 	x: 0,
	// 	opacity: 1,
	// 	transition: { delay: custom * 0.2 },
	// }),
	hidden: { opacity: 1, scale: 0 },
	visible: {
	  opacity: 1,
	  scale: 1,
	  transition: {
		 delayChildren: 0.3,
		 staggerChildren: 0.5
	  }
	}
}

const Learn = () => {
	return (
		<motion.section className='learn' id='pages'>
			<h2 className='learn__title title'>What Will You Learn?</h2>
			<div className='learn__container'>

				<motion.div 
				initial="hidden"
				viewport={{ amount: 0.2 }}
				whileInView="visible"
				className='learn__about'>
					{learnDate.map(({ id, value, text }) => {
						return (
							<motion.div
							variants={learnAnimation} 
							custom={id + 1}
								key={id} className='learn__wrapper'>
								<div className='learn__circle'>{value}</div>
								<p className='learn__text'>{text}</p>
							</motion.div>
						)
					})
					}
				</motion.div>

				<div className='learn__photo'>
					<img src={Img} alt="" className='learn__img' />
					<div className='learn__border'></div>
				</div>
			</div>
		</motion.section>
	)
}

export default Learn