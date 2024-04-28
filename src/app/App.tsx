import { Header } from "@/widgets/Header";
import { Product } from "@/widgets/Product";
import { Footer } from "@/widgets/Footer";
import { InterestingProducts } from '@/widgets/InterestingProducts';
import { Breadcrumbs } from "@/features/Breadcrumbs";
import { ProductBanner } from "@/features/ProductBanner";
import "./styles/global.scss";

export const App = () => (
    <>
        <Header />
        <main className="container content">
            <Breadcrumbs />
            <div className="content__wrapper">
                <Product />
                <InterestingProducts />
                <ProductBanner />
            </div>
        </main>
        <Footer />
    </>
);
