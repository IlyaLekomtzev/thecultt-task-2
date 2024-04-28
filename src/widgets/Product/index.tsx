import { ProductImages } from "./ui/ProductImages";
import { ProductInfo } from "./ui/ProductInfo";
import "./styles.scss";

export const Product = () => (
    <section className="product">
        <ProductImages />
        <ProductInfo />
    </section>
);
