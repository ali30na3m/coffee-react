import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export default function ProductBox(props) {
    return (
        <div className='p-2 md:p-5 rounded-2xl shadow-normal bg-white dark:bg-zinc-700'>
            <div className='relative'>
                <img className='w-[128px] md:w-[260px] h-[128px] md:h-[260px] mx-auto' src={props.img} alt="#" />
                {
                    props.percent && <span className='absolute text-xs md:text-base top-0 right-0 bg-orange-300 text-white dark:text-zinc-700 rounded-[100px] px-[10px] md:px-[14px] py-[2px] md:py-[4px] font-DanaMadium font-semibold'>12%</span>
                }
            </div>
            <h3 className='text-zinc-700 dark:text-white font-DanaMadium font-medium text-sm md:text-xl'>قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی</h3>
            <div className='flex items-center gap-2.5'>
                {
                    (
                        props.status && <span className='font-DanaMadium font-semibold text-base md:text-xl text-teal-600 dark:text-emerald-500'>175,000 <span className='!font-normal !text-xs md:!text-sm  tracking-[-1px]'>تومان</span></span>
                    )
                }
                {
                    props.offer &&
                    <div className='relative'>
                        <span className='font-DanaMadium text-xs md:text-xl font-semibold text-gray-400' >300,000 <span className='!font-normal !text-xs md:!text-sm tracking-[-1px]'>تومان</span></span>
                        <span className='block absolute w-full inset-0 my-auto bg-red-500 h-[1px]'></span>
                    </div>
                }
                {
                    (
                        !props.status && <span className='text-red-500 dark:text-red-400 font-Dana text-base md:text-xl'>فعلا موجود نیست</span>
                    )
                }
            </div>
            <div className='flex items-center justify-between'>
                <div className='child:text-gray-500 dark:child:text-gray-400 hover:child:bg-gray-100 dark:hover:child:bg-zinc-800 child:rounded-full p-[3px] md:child:p-[7px] flex items-center gap-1 md:gap-3'>
                    <div className='md:hidden'>
                        <ShoppingCartOutlinedIcon fontSize='small' />
                    </div>
                    <div className='md:hidden'>
                        <CompareArrowsOutlinedIcon fontSize='small' />
                    </div>
                    <div className='hidden md:block'>
                        <ShoppingCartOutlinedIcon />
                    </div>
                    <div className='hidden md:block'>
                        <CompareArrowsOutlinedIcon />
                    </div>
                </div>
                <div className='text-orange-300'>
                    <div className='md:hidden'>
                        <StarBorderOutlinedIcon fontSize='small' />
                        <StarBorderOutlinedIcon fontSize='small' />
                        <StarBorderOutlinedIcon fontSize='small' />
                        <StarBorderOutlinedIcon fontSize='small' />
                        <StarBorderOutlinedIcon fontSize='small' />
                    </div>
                    <div className='hidden md:block'>
                        <StarBorderOutlinedIcon />
                        <StarBorderOutlinedIcon />
                        <StarBorderOutlinedIcon />
                        <StarBorderOutlinedIcon />
                        <StarBorderOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

