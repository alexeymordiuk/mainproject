import React from 'react'
import './articles.css'
import { dateArticles } from './ArticlesDate';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";


const Articles = () => {
	return (
		<section className='articles'>
			<h2 className='articles__title title'>Articles & Resources</h2>
			<div className='articles__container'>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					breakpoints={{
						300: {
							slidesPerView: 1,
						},
						500: {
							
							slidesPerView: 1,
						},
						800: {
							slidesPerView: 2,
						},
						900: {
							slidesPerView: 3,
						},
					}}
					className="articles__swiper"
				>
					{
						dateArticles.map(({ img, title, text, link, date }, id) => {
							return (
								<SwiperSlide key={id} className='atrticles__slide'>
									<img src={img} alt="" />
									<div className='atrticles__inner'>
										<h4 className='atrticles__subtitle'>{title}</h4>
										<p className='articles__text text'>{text}</p>
										<div className='articles__more'>
											<a href="#" className='articles__link'>{link}</a>
											<span>{date}</span>
										</div>
									</div>
								</SwiperSlide>
							)
						})
					}
				</Swiper>
			</div>
		</section >
	)
}

export default Articles