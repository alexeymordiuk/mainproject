import { motion } from 'framer-motion'
import React from 'react'
import './books.css'
import { booksDateFirst } from './BooksDate'


const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const booksAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}), 
}


const Books = () => {
	return (
		<motion.section
			initial="hidden"
			viewport={{ amount: 0.2, once: true }}
			whileInView="visible"
			className='books'>
			<motion.h2 custom={1} variants={textAnimation} className='books__title title'>The Author’s Book</motion.h2>
			<motion.div 
			initial="hidden"
			viewport={{ amount: 0.2 }}
			whileInView="visible"
			className='books__container'>
				{booksDateFirst.map(({ id, imageFirst, title, price, text, subtitle, buttontext }) => {
					return (
						<motion.div variants={booksAnimation} 
						custom={id + 1}
						key={id} className='books__left'>
							<div className='books__inner'>
								<div className='books__picture'>
									<img src={imageFirst} alt="" className='books__img' />
								</div>
								<div className='books__content'>
									<h4 className='books__preview'>{title}</h4>
									<span>{price}</span>
									<p className='books__text text'>{text}</p>
									<div className='books__wrapper'>
										<h5 className='books__subtitle'>{subtitle}</h5>
										<div className='books__circle'></div>
									</div>
									<a href="#" className='btn__primary'>{buttontext}</a>
								</div>
							</div>
						</motion.div>
					)
				})
				}
			</motion.div>
		</motion.section>
	)
}
export default Books