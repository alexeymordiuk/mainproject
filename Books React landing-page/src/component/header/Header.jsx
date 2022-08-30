import {motion} from 'framer-motion'

import React from 'react'
import './header.css'
import { menu } from './HeaderDate'
import Logo from '../../images/logo.svg'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import Menu from './Menu'
import { useState } from "react";
import Book from '../../images/mainbook.png'


const textAnimation = {
hidden: {
	x: -100,
	opacity: 0,
},
visible: custom => ({
	x:0,
	opacity: 1,
	transition: { delay : custom * 0.2 },
}),
}


const Header = () => {
	const [menuActive, setMenuActive] = useState(false)
	return (
		<motion.header 
		initial="hidden"
		whileInView="visible"
		className='header'>
			<div className='header__container'>

				<div className='header__about-us'>
					<img src={Logo} alt="" className='header__logo' />
					<div className='header__icons'>
						<a href="#" className='header__links'><FaFacebookF /></a>
						<a href="#" className='header__links'><BsTwitter /></a>
						<a href="#" className='header__links'><FaInstagramSquare /></a>
					</div>
				</div>

				<div id="burger-menu" onClick={() => setMenuActive(!menuActive)}>
					<span></span>
				</div>

				<nav className='header__nav' id='menu'>
					<ul className='header__list'>
						{menu.map((item, idx) => (
							<li key={`${idx}`} className='header__item'><a href={item.links} className='header__navigation'>{item.title}</a></li>
						))}
					</ul>
					<a href="#" className='btn__primary'>Order today</a>
				</nav>
			</div>
			<Menu active={menuActive} setActive={setMenuActive} menu={menu} />

			<div className='header__container-hero'>

				<div className='header__content'>
					<motion.h5 custom={1} variants={textAnimation} className='header__subtitle'>Welcome to Pages!!!</motion.h5>
					<motion.h2 custom={2} variants={textAnimation}>Your Books From</motion.h2>
					<motion.h2 custom={3} variants={textAnimation}>The Best Writer.</motion.h2>
					<motion.p custom={4} variants={textAnimation} className='text'>We believe that reading books are essential to a healthy culture.</motion.p>
					<motion.p custom={5} variants={textAnimation} className='header__text text'>They’re where authors can connect with readers.</motion.p>
					<div className='header__order'>
						<motion.a custom={6} variants={textAnimation} href="#" className='btn__primary'>Order today</motion.a>
						<motion.a custom={7} variants={textAnimation} href="#" className='header__demo'>Real free demo</motion.a>
					</div>
					<div className='header__about-book'>

						<div className='header__info'>
						<div className='circle'></div>
							<h5 className='header__subtitle'>Pages:</h5>
							<span>250pages</span>
						</div>

						<div className='header__info'>
							<div className='circle'></div>
							<h5 className='header__subtitle'>Length:</h5>
							<span>10 Hours</span>
						</div>

						<div className='header__info'>
						<div className='circle'></div>
							<h5 className='header__subtitle'>Rating:</h5>
							<span>4.5/5 (305 ratings)</span>
						</div>
					</div>
				</div>

				<div className='header__book-picture'>
					<img src={Book} alt="" className='header__book-img' />
				</div>
			</div>
		</motion.header>
	)
}

export default Header