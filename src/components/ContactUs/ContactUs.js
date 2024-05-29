import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

export default function ContactUs() {
    return (
        <section className="my-28">
            <div className="container flex items-center flex-col md:flex-row gap-5">
                <div className='md:basis-[52%]'>
                    <img className='w-[296px] md:w-full' src="/Images/contact.png" alt="" />
                </div>
                <div className='flex flex-col gap-6 text-zinc-700 dark:text-white'>
                    <div>
                        <h3 className='font-Morabba font-medium text-2xl md:text-5xl'>یکی از بهترین قهوه ها !</h3>
                        <p className='font-Morabba font-light text-lg md:text-3xl/10 '>کیفیت قهوه را از ما بخواهید ...</p>
                    </div>
                    <div className='flex items-center gap-2.5 child:block child:bg-zinc-700  child:rounded-full child:w-1 child:h-1'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className='font-Dana text-lg md:text-2xl '>فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
                    <button className='flex items-center justify-center gap-2 border-[2px] border-orange-300 text-orange-300 rounded-[100px] py-[14px] px-6 font-Dana text-base md:text-xl tracking-[-1px] w-max'>
                        <CallOutlinedIcon />
                        ثبت سفارش تلفنی
                    </button>
                </div>
            </div>
        </section>
    );
};
