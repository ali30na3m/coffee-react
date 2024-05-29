import ArticleBox from "../ArticleBox/ArticleBox";
import Titles from "../Titles/Titles";

export default function Articles() {

    const imgArticle = [
        { img: "/Images/blogs/blog-1.png", desc: 'طرز تهیه قهوه دمی با دستگاه اروپرس' },
        { img: "/Images/blogs/blog-2.png", desc: 'یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز' },
        { img: "/Images/blogs/blog-3.png", desc: 'طرز تهیه یک فنجان کافه زینو برزیلی' },
        { img: "/Images/blogs/blog-4.png", desc: 'طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی' }
    ]

    return (
        <section>
            <div className="container">
                <Titles title='مطالب  خواندنی' des='' hrefDesk='مشاهده همه مطالب' hrefMob='مشاهده همه' />
                <div className='grid grid-cols-1 md:grid-cols-4 mt-5 md:mt-12 gap-5'>
                    {
                        imgArticle.map((data, index) => (
                            <ArticleBox key={index} img={data.img} desc={data.desc} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
