import productBannerImage from "@/shared/assets/product-banner.png";
import { Button } from "@/shared/ui";
import "./styles.scss";

export const ProductBanner = () => (
    <div className="product-banner">
        <div className="product-banner__cover">
            <img
                src={productBannerImage}
                className="product-banner__image"
                alt="Product banner"
            />
        </div>
        <div className="product-banner__content">
            <h3 className="product-banner__title">
                Запускай Круговорот сумок с THE CULTT
            </h3>
            <p className="product-banner__description">
                Мы оценим ваш лот и предложим депозит в размере его стоимости на
                покупку нового лота на нашем сайте
            </p>
            <Button wide className="product-banner__button">
                Начать продавать
            </Button>
        </div>
    </div>
);
