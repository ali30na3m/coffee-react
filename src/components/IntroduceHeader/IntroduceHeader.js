import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function IntroduceHeader() {
    return (
        <section className="relative z-0 h-[200px] md:h-[716px] md:bg-home-Desktop bg-home-mobile bg-no-repeat bg-cover bg-[center_top]">
            <div className="container relative overflow-y-hidden h-full px-2.5 flex items-center justify-end">
                <div className="child:text-white w-[201px] md:w-[462px]">
                    <div className='space-y-1'> 
                        <h2 className="font-Morabba md:font-bold text-2xl md:text-6xl/relaxed">قهوه عربیکا تانزانیا</h2>
                        <span className="font-MorabbaLight font-light text-xl/8 md:text-5xl">یک فنجان بالانس!</span>
                    </div>
                    <span className="block w-[100px] h-[2px] bg-orange-300 my-8"></span>
                    <p className="font-Dana text-xs md:text-2xl">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>

                    <div className="hidden absolute left-0 bottom-0 right-0 mx-auto md:flex items-center justify-center z-20 w-[203px] h-[203px] rounded-full border border-white/25 translate-y-2/4">
                        <div className="flex items-center justify-center w-[145px] h-[145px] rounded-full border border-white/50">
                            <div className="flex items-center justify-center w-[95px] h-[95px] rounded-full border border-white/80"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block absolute z-10 left-0 right-0 bottom-0 mx-auto w-[100px] h-[22px] text-gray-100 dark:text-zinc-800">
                <svg width="100" height="22" viewBox="0 0 100 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
                </svg>

            </div>
            <div className='hidden absolute md:flex items-center justify-center p-[5px] z-20 right-0 bottom-0 left-0 mx-auto translate-y-1/2 text-zinc-700 dark:text-gray-300 border-2 border-orange-300 rounded-full w-[30px] h-[30px]'>
                <KeyboardArrowDownOutlinedIcon />
            </div>
        </section>
    );
};
