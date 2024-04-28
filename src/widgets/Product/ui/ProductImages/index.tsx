import productImage from "@/shared/assets/product.png";
import "./styles.scss";
import { CarouselNavigation } from "@/shared/ui";

export const ProductImages = () => (
    <div className="product-images">
        <div className="product-images-vertical-list">
            <div className="product-images-vertical-list__item product-images-vertical-list__item--active">
                <img
                    src={productImage}
                    className="product-images-vertical-list__item-img"
                    alt="Product"
                />
            </div>
            <div className="product-images-vertical-list__item">
                <img
                    src={productImage}
                    className="product-images-vertical-list__item-img"
                    alt="Product"
                />
            </div>
            <div className="product-images-vertical-list__item">
                <img
                    src={productImage}
                    className="product-images-vertical-list__item-img"
                    alt="Product"
                />
            </div>
            <div className="product-images-vertical-list__item">
                <img
                    src={productImage}
                    className="product-images-vertical-list__item-img"
                    alt="Product"
                />
            </div>
            <div className="product-images-vertical-list__item">
                <img
                    src={productImage}
                    className="product-images-vertical-list__item-img"
                    alt="Product"
                />
            </div>
        </div>
        <div className="product-images-main-image">
            <img
                src={productImage}
                className="product-images-main-image__img"
                alt="Product"
            />
        </div>
        <div className="product-images__navigation">
            <CarouselNavigation count={5} activeIndex={0} />
        </div>
    </div>
);
