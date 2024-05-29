import ProductBox from '../ProductBox/ProductBox';
import Titles from '../Titles/Titles';

export default function Product() {

    const imgProduct = [
        { img: "/Images/products/p1.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p2.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p3.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p4.png", status: false, offer: false, percent: false },
        { img: "/Images/products/p2.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p4.png", status: true, offer: false, percent: false },
        { img: "/Images/products/p3.png", status: true, offer: true, percent: true },
        { img: "/Images/products/p1.png", status: true, offer: false, percent: false },
    ]

    // flex items-center justify-center lg:justify-start flex-wrap gap-5

    return (
        <section className="pt-8 md:pt-48 md:product">
            <div className="container">
                <Titles title='جدیدترین محصولات' des='فرآوری شده از قهوه' hrefDesk='مشاهده محصولات' hrefMob='مشاهده همه' />
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:mt-12 '>
                    {
                        imgProduct.map((data, index) => (
                            <ProductBox key={index + 1} img={data.img} status={data.status} offer={data.offer} percent={data.percent} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
