export default function CategoryBanner() {
    return (
        <section className="my-20">
            <div className="container block space-y-5  md:flex md:items-center md:justify-between md:gap-5">
                <div className="relative categoryBanner--Item1 flex items-center justify-start flex-wrap w-full rounded-2xl h-[248px] ">
                    <div className='absolute space-y-7 right-12'>
                        <h3 className='text-2xl md:text-4xl font-semibold font-DanaMadium text-white'>انواع قهوه</h3>
                        <p className='text-base md:text-xl font-medium font-DanaMadium text-white'>ترکیبی و تک خواستگاه</p>
                    </div>
                </div>
                <div className="relative categoryBanner--Item2 flex items-center justify-start flex-wrap w-full rounded-2xl h-[248px] ">
                    <div className='absolute space-y-7 right-12'>
                        <h3 className='text-2xl md:text-4xl font-semibold font-DanaMadium text-white'>پودر های فوری</h3>
                        <p className='text-base md:text-xl font-medium font-DanaMadium text-white'>نسکافه ، هات چاکلت ، ماسالا</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
