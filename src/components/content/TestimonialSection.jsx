import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const TestimonialSection = () => {

    const navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    return (
        <div className="trstimonial-area pt-100px pb-100px">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center m-0">
                            <h2 className="title">Client Feedback</h2>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* <!-- Swiper --> */}
                        <div className="swiper-container content-top slider-nav-style-1">
                            <Swiper
                                navigation={navigation}
                                modules={[Navigation]}
                                slidesPerView={2}
                                spaceBetween={30}
                                speed={1500}
                                loop={true}
                                className="mySwiper"
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    478: {
                                        slidesPerView: 1,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 2,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    {/* <div className="swiper-slide"> */}
                                    <div className="testi-inner">
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor
                                                incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-image">
                                                <img className="img-responsive" src="assets/images/testimonial/1.png"
                                                    alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Regan Rosen<span>Client</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* <div className="swiper-slide"> */}
                                    <div className="testi-inner">
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor
                                                incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-image">
                                                <img className="img-responsive" src="assets/images/testimonial/1.png"
                                                    alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Regan Rosen<span>Client</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* <div className="swiper-slide"> */}
                                    <div className="testi-inner">
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor
                                                incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-image">
                                                <img className="img-responsive" src="assets/images/testimonial/1.png"
                                                    alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Regan Rosen<span>Client</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* <div className="swiper-slide"> */}
                                    <div className="testi-inner">
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor
                                                incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-image">
                                                <img className="img-responsive" src="assets/images/testimonial/1.png"
                                                    alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Regan Rosen<span>Client</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </SwiperSlide>
                            </Swiper>
                            {/* <!-- Add Arrows --> */}
                            <div className="swiper-buttons">
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TestimonialSection
