import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import { useSwiper } from "swiper/react";

export default function Titles(props) {

    const swiper = useSwiper()

    return (
        <div className="flex items-end justify-between">
            <div className="child:text-zinc-700 dark:child:text-white child:font-Morabba space-y-1.5">
                <h3 className="font-medium text-2xl/8 md:text-5xl">{props.title}</h3>
                <p className="font-light text-lg/8 md:text-3xl/10">{props.des}</p>
            </div>
            <div className="flex items-center child:text-orange-300">
                <span className="hidden md:block font-Dana text-xl tracking-[-1px]">{props.hrefDesk}</span>
                <span className="md:hidden block font-Dana tracking-[-1px]">{props.hrefMob}</span>
                {
                    !props.hrefDesk == '' && <KeyboardArrowLeftOutlinedIcon />
                }
                {
                    props.hrefDesk === '' &&
                    <div className='flex items-center gap-[18px] child:!text-zinc-700 dark:child:!text-white child:bg-white dark:child:bg-zinc-700 child:rounded-full child:p-[9px] child:shadow-normal'>
                        <div className='swiper-button-next-custom' onClick={() => swiper.slidePrev()}>
                            <KeyboardArrowRightOutlinedIcon fontSize='medium' />
                        </div>
                        <div className='swiper-button-prev-custom' onClick={() => swiper.slideNext()}>
                            <KeyboardArrowLeftOutlinedIcon fontSize='medium' />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};
