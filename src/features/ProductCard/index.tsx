import { FC } from "react";
import cn from "classnames";
import { CheckCircle } from "@phosphor-icons/react";
import productImage from "@/shared/assets/product.png";
import { CarouselNavigation } from "@/shared/ui";
import { Split } from "@/features/Split";
import { FavoriteButton } from "@/features/FavoriteButton";
import "./styles.scss";

interface Props {
    className?: string;
}

export const ProductCard: FC<Props> = ({ className }) => (
    <div className={cn("product-card", className)}>
        <div className="product-card__images-wrapper">
            <FavoriteButton className="product-card__favorite" />
            <div className="product-card__images">
                <img
                    src={productImage}
                    className="product-card__image"
                    alt="Product"
                />
            </div>
            <CarouselNavigation
                className="product-card__pagination"
                count={4}
                activeIndex={0}
            />
        </div>
        <span className="product-card__brand">Gucci</span>
        <h5 className="product-card__name">MINI BUCKET BAG</h5>
        <div className="product-card-condition">
            <span className="product-card-condition__title">Состояние</span>
            <span className="product-card-condition__delimiter" />
            <CheckCircle className="product-card-condition__icon" size={12} />
            <span className="product-card-condition__value">Отличное</span>
        </div>
        <span className="product-card__price">142 000 ₽</span>
        <Split small />
    </div>
);
