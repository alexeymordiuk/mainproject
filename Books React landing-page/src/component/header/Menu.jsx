import React from 'react'
import './header.css'
import { menu } from './HeaderDate'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'

const Menu = ({ active, setActive }) => {
	return (
		<div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
			<ul className='menu__main'>
				{menu.map((item, idx) => (
					<li key={`${idx}`}><a href={item.links}>{item.title}</a></li>
				))}
				<div className='header__icons'>
					<a href="#" className='header__links'><FaFacebookF /></a>
					<a href="#" className='header__links'><BsTwitter /></a>
					<a href="#" className='header__links'><FaInstagramSquare /></a>
				</div>
			</ul>
		</div>
	)
}

export default Menu