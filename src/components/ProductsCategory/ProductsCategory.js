export default function ProductsCategory() {
    return (
        <section>
            <div  className="container flex items-center justify-center flex-wrap gap-16">
                <div className="flex flex-col items-center justify-center w-[100px] md:w-[200px] h-[200px] md:[200px]">
                    <img src="/Images/categories/category1.png" alt="" />
                    <p className="text-zinc-700 dark:text-white text-sm md:text-xl font-DanaMadium font-semibold ">قهوه و اسپرسو</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[100px] md:w-[200px] h-[200px] md:[200px]">
                    <img src="/Images/categories/category2.png" alt="" />
                    <p className="text-zinc-700 dark:text-white text-sm md:text-xl font-DanaMadium font-semibold ">لوازم جانبی و تجهیزات</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[100px] md:w-[200px] h-[200px] md:[200px]">
                    <img src="/Images/categories/category3.png" alt="" />
                    <p className="text-zinc-700 dark:text-white text-sm md:text-xl font-DanaMadium font-semibold ">اسپرسو ساز</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[100px] md:w-[200px] h-[200px] md:[200px]">
                    <img src="/Images/categories/category4.png" alt="" />
                    <p className="text-zinc-700 dark:text-white text-sm md:text-xl font-DanaMadium font-semibold ">پک تستر قهوه</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[100px] md:w-[200px] h-[200px] md:[200px]">
                    <img src="/Images/categories/category5.png" alt="" />
                    <p className="text-zinc-700 dark:text-white text-sm md:text-xl font-DanaMadium font-semibold ">قهوه ترک</p>
                </div>
            </div>
        </section>
    );
};
