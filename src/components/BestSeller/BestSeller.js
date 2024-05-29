import ProductBox from "../ProductBox/ProductBox";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Titles from "../Titles/Titles";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function BestSeller() {

    const imgProduct = [
        { img: "/Images/products/p5.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p6.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p7.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p8.png", status: false, offer: false, percent: false },
        { img: "/Images/products/p5.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p6.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p7.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p8.png", status: false, offer: false, percent: false }
    ]


    return (
        <section className="mt-20">
            <div className="container">
                <Swiper
                    className="!flex gap-5 flex-col-reverse"
                    slidesPerView={2}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    Navigation={{
                        nextEl: '.next-button',
                        prevEl: '.left-button'
                    }}
                    spaceBetween={20}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation]}
                >
                    <Titles title='محصولات پرفروش' des='پیشنهاد قهوه خورها...' hrefDesk='' hrefMob='' />
                    {
                        imgProduct.map((data, index) => (
                            <SwiperSlide >
                                <ProductBox key={index + 1} img={data.img} status={data.status} offer={data.offer} percent={data.percent} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section >
    );
};
