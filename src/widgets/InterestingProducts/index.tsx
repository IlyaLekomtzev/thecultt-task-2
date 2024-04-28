import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ProductCard } from "@/features/ProductCard";
import "./styles.scss";

export const InterestingProducts = () => (
    <div className="interesting-products">
        <h2 className="interesting-products__title">Может быть интересно</h2>
        <div className="interesting-products__list">
            <button className="interesting-products__nav-button interesting-products__nav-button--prev">
                <CaretLeft size={16} />
            </button>
            {Array.from({ length: 6 }).map((_, index) => (
                <ProductCard
                    key={index}
                    className="interesting-products__item"
                />
            ))}
            <button className="interesting-products__nav-button interesting-products__nav-button--next">
                <CaretRight size={16} />
            </button>
        </div>
    </div>
);
