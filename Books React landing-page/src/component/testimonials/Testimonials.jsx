import React from 'react'
import './testimonials.css'
import { date } from './Testimonials date';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
	return (
		<section className='testimonials'>
			<div className='testimonials__container'>

				<div className='testimonials__about'>
					<h2 className='testimonials__title title'>Words From Our</h2>
					<h2 className='testimonials__title title'>Readers</h2>
					<p className='testimonials__text-about text'>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
					<div className='testimonials__rating'></div>
				</div>

				<Swiper
					modules={[Pagination]}
					spaceBetween={40}
					slidesPerView={1}
					pagination={{ clickable: true }}
					className="testimonials__swiper"
				>
					{date.map(({ img, title, subtitle, text, rate }, id) => {
						return (
							<SwiperSlide key={id} className='testimonials__inner'>

								<div className='testimonials__wrapper'>

									<div className='testimonials__user'>
										<img src={img} alt="" className='testimonials__avatar'/>
										<div className='testimonias__rate'>
											<h4 className='testimonials__name'>{title}</h4>
											<img src={rate} alt="" className='testimonials__rating'/>
										</div>
									</div>
									<blockquote className='testimonials__sub'>{subtitle}</blockquote>
									<p className='testimonials__text text'>{text}</p>
								</div>
							</SwiperSlide>
						)
					})
					}
				</Swiper>
			</div>
		</section>
	)
}

export default Testimonials