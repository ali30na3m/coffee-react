import IntroduceHeader from "../IntroduceHeader/IntroduceHeader";
import CategoryBanner from '../../components/CategoryBanner/CategoryBanner';
import Product from '../../components/Product/Product';
import ProductsCategory from "../ProductsCategory/ProductsCategory";
import BestSeller from "../BestSeller/BestSeller";
import CoffeeClub from "../CoffeeClub/CoffeeClub";
import Articles from "../Articles/Articles";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";

export default function Main() {
    return (
        <main>
            <IntroduceHeader />
            <Product />
            <CategoryBanner />
            <ProductsCategory />
            <BestSeller />
            <CoffeeClub />
            <Articles />
            <ContactUs />
            <Services />
        </main>
    );
}
