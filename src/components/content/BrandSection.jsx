import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const BrandSection = () => {
	return (
		<div className="brand-area pt-100px pb-100px">
			<div className="container">
				<div className="brand-slider swiper-container">
					<Swiper
						slidesPerView={4}
						speed={1500}
						loop={true}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false
						}}
						modules={[Autoplay]}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							480: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
							1200: {
								slidesPerView: 4,
							},
						}}
						className="mySwiper align-items-center"
					>
						<SwiperSlide className='brand-slider-item text-center'>
							<Link to="#"><img className=" img-fluid" src="assets/images/partner/1.png" alt="" /></Link>
						</SwiperSlide>
						<SwiperSlide className='brand-slider-item text-center'>
							<Link to="#"><img className=" img-fluid" src="assets/images/partner/2.png" alt="" /></Link>
						</SwiperSlide>
						<SwiperSlide className='brand-slider-item text-center'>
							<Link to="#"><img className=" img-fluid" src="assets/images/partner/3.png" alt="" /></Link>
						</SwiperSlide>
						<SwiperSlide className='brand-slider-item text-center'>
							<Link to="#"><img className=" img-fluid" src="assets/images/partner/4.png" alt="" /></Link>
						</SwiperSlide>
						<SwiperSlide className='brand-slider-item text-center'>
							<Link to="#"><img className=" img-fluid" src="assets/images/partner/4.png" alt="" /></Link>
						</SwiperSlide>
						<SwiperSlide className='brand-slider-item text-center'>
							<Link to="#"><img className=" img-fluid" src="assets/images/partner/4.png" alt="" /></Link>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default BrandSection
