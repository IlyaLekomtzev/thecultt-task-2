import { FC } from "react";
import cn from "classnames";
import { ProductConditionState } from "./types";
import { PRODUCT_CONDITIONS } from "./constants";
import "./styles.scss";

interface Props {
    state: ProductConditionState;
}

export const ProductCondition: FC<Props> = ({ state }) => (
    <div className="product-condition">
        {PRODUCT_CONDITIONS.map(({ key, title }) => (
            <div
                key={key}
                className={cn("product-condition-item", {
                    "product-condition-item--active": state === key,
                })}
            >
                <div className="product-condition-item__circle" />
                <span className="product-condition-item__title">{title}</span>
            </div>
        ))}
    </div>
);
