import './product-image-slider.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'
import imgpd1 from "../../../../img/item1-1.jpg"
import imgpd2 from "../../../../img/item1-2.jpg"
import imgpd3 from "../../../../img/item1-3.jpg"
import imgpd4 from "../../../../img/item1-4.jpg"
import imgpd5 from "../../../../img/item1-5.jpg"
import imgpd6 from "../../../../img/item1-6.jpg"
import imgpd7 from "../../../../img/item1-7.jpg"
import imgpd8 from "../../../../img/item1-8.jpg"

const ProductImagesSlider = props => {
    const [activeThumb, setActiveThumb] = useState()

    return <>
        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
        >
           
                    <SwiperSlide >
                        <img src={imgpd1} alt="product images" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={imgpd2} alt="product images" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={imgpd3} alt="product images" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={imgpd4} alt="product images" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={imgpd5} alt="product images" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={imgpd6} alt="product images" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={imgpd7} alt="product images" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={imgpd8} alt="product images" />
                    </SwiperSlide>
             
        </Swiper>
        <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs'
        >
           
                    <SwiperSlide >
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={imgpd1} alt="product images" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={imgpd2} alt="product images" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={imgpd3} alt="product images" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={imgpd4} alt="product images" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={imgpd5} alt="product images" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={imgpd6} alt="product images" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={imgpd7} alt="product images" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={imgpd8} alt="product images" />
                        </div>
                    </SwiperSlide>
           
        </Swiper>
    </>
}

ProductImagesSlider.propTypes = {
    images: PropTypes.array.isRequired
}

export default ProductImagesSlider