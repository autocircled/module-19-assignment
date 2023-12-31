
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const HeroSection = () => {
    useEffect(() => {
        const sliderWrapper = document.querySelector('.hero-slider .swiper-wrapper');
        const sliderBGImages = sliderWrapper.querySelectorAll('[data-bg-image]');
        Array.from(sliderBGImages).forEach((el) => {
            // console.log(el.getAttribute('data-bg-image'));
            el.style.backgroundImage = `url(${el.getAttribute('data-bg-image')})`;
        })
    }, [])

    const navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
  return (
	<>
        <div className="section">
            <div className="hero-slider swiper-container slider-nav-style-1 slider-dot-style-1">
                    <Swiper
                        navigation={navigation}
                        modules={[Navigation]}
                        loop={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="hero-slide-item slider-height swiper-slide bg-color1"
                            data-bg-image="assets/images/hero/bg/hero-bg-1.webp">
                                <div className="container h-100">
                                    <div className="row h-100">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                            <div className="hero-slide-content slider-animated-1">
                                                <span className="category">Welcome To Hmart</span>
                                                <h2 className="title-1">Your Home <br /> Smart Devices & <br /> Best Solution</h2>
                                                <a href="shop-left-sidebar.html" className="btn btn-primary text-capitalize">Shop
                                                    All Devices</a>
                                            </div>
                                        </div>
                                        <div
                                            className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative align-items-end">
                                            <div className="show-case">
                                                <div className="hero-slide-image">
                                                    <img src="assets/images/hero/inner-img/hero-1-1.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hero-slide-item slider-height swiper-slide bg-color1"
                            data-bg-image="assets/images/hero/bg/hero-bg-1.webp">
                                <div className="container h-100">
                                    <div className="row h-100">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                            <div className="hero-slide-content slider-animated-1">
                                                <span className="category">Welcome To Hmart</span>
                                                <h2 className="title-1">Your Home <br />
                                                    Smart Devices & <br />
                                                    Best Solution </h2>
                                                <a href="shop-left-sidebar.html" className="btn btn-primary text-capitalize">Shop
                                                    All Devices</a>
                                            </div>
                                        </div>
                                        <div
                                            className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative align-items-end">
                                            <div className="show-case">
                                                <div className="hero-slide-image">
                                                    <img src="assets/images/hero/inner-img/hero-1-2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                <div className="swiper-buttons">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </div>
	</>
  )
}

export default HeroSection
