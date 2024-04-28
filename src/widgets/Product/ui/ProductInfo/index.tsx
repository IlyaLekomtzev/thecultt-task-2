import {
    ArrowsCounterClockwise,
    CaretRight,
    Heart,
    Info,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Split } from "@/features/Split";
import { Accordion, Button, Property } from "@/shared/ui";
import productAuthenticityImage from "@/shared/assets/product-authenticity.svg";
import { ProductCondition } from "@/features/ProductCondition";
import "./styles.scss";

export const ProductInfo = () => {
    const [faqIndex, setFaqIndex] = useState(-1);

    return (
        <>
            <div className="product-info">
                <div className="product-info__head">
                    <span className="product-info__vendor">
                        Артикул: 1923001
                    </span>
                    <h1 className="product-info__name">Fendy Textile Bag </h1>
                    <a href="#" className="product-info__brand">
                        Fendy
                    </a>
                    <div className="product-info-price">
                        <span className="product-info-price__value">
                            120 000 ₽
                        </span>
                        <Split />
                    </div>
                </div>
                <div className="product-info__actions">
                    <div className="product-info__buttons">
                        <Button wide>Добавить в корзину</Button>
                        <Button variant="outline" icon={<Heart size={22} />}>
                            В избранное
                        </Button>
                    </div>
                    <a href="#" className="product-info-exchange">
                        <div className="product-info-exchange__content">
                            <span className="product-info-exchange__title">
                                Обмен <ArrowsCounterClockwise size={16} />
                            </span>
                            <p className="product-info-exchange__description">
                                Обменяйте свой товар на данную модель
                            </p>
                        </div>
                        <CaretRight className="icon" size={16} />
                    </a>
                </div>
                <div className="product-info__properties">
                    <div className="product-info-properties-group">
                        <h5 className="product-info-properties-group__title">
                            Состояние <Info className="icon" size={16} />
                        </h5>
                        <div className="product-info-properties-group__items">
                            <ProductCondition state="excellent" />
                            <Property
                                title="Следы жизни"
                                value="Повреждения на коже"
                            />
                        </div>
                    </div>
                    <div className="product-info-properties-group">
                        <h5 className="product-info-properties-group__title">
                            Информация о товаре
                        </h5>
                        <div className="product-info-properties-group__items">
                            <Property title="Внешний материал" value="Шерсть" />
                            <Property
                                title="Материал подкладки"
                                value="Шерсть"
                            />
                            <Property title="Цвет" value="Белый" />
                        </div>
                    </div>
                    <div className="product-info-properties-group">
                        <h5 className="product-info-properties-group__title">
                            Размер
                        </h5>
                        <div className="product-info-properties-group__items">
                            <Property title="Длина (см)" value="6" />
                            <Property title="Ширина (см)" value="20" />
                            <Property title="Высота (см)" value="24" />
                            <Property title="Длина ручек (см)" value="14" />
                        </div>
                    </div>
                </div>
                <a href="#" className="product-info-authenticity">
                    <div className="product-info-authenticity__content">
                        <span className="product-info-authenticity__title">
                            Гарантия подлинности
                        </span>
                        <p className="product-info-authenticity__subtitle">
                            Подробнее о проверке подлинности
                        </p>
                    </div>
                    <img
                        src={productAuthenticityImage}
                        alt="Product authenticity"
                        className="product-info-authenticity__img"
                    />
                </a>
                <div className="product-info__faq product-info-faq">
                    <Accordion
                        onClick={setFaqIndex}
                        activeIndex={faqIndex}
                        items={[
                            {
                                title: "Доставка",
                                content: (
                                    <p className="product-info-faq__text">
                                        Доставка оплаченных заказов по Москве и
                                        России — бесплатно. Доставка по Москве
                                        (внутри МКАД) осуществляется собственным
                                        курьером платформы THE CULTT. Доставка
                                        по России курьерской службой СДЭК до
                                        пункта самовывоза или вашего адреса.
                                        Услуга доставки с примеркой по Москве —
                                        600₽. Доставка международных заказов
                                        осуществляется службой EMS. Стоимость
                                        международной доставки — от 2.000₽ до
                                        5.000₽ в зависимости от страны.
                                        Подробнее в разделе «Доставка и оплата».
                                    </p>
                                ),
                            },
                            {
                                title: "Оплата",
                                content: (
                                    <p className="product-info-faq__text">
                                        К оплате на сайте принимаются платежные
                                        системы: МИР, MasterCard, Visa, Maestro,
                                        UnionPay, YandexPay или СБП. Оплата
                                        наличными возможна только для услуги
                                        «Примерка по Москве». Вид оплаты
                                        «Рассрочка» или »Кредит» возможен для
                                        заказов стоимостью не более 500.000₽.
                                        Для оплаты »Яндекс Сплит» - не более
                                        150.000₽. Подробнее в разделе «Доставка
                                        и оплата».
                                    </p>
                                ),
                            },
                            {
                                title: "Возврат",
                                content: (
                                    <p className="product-info-faq__text">
                                        Мы принимаем возврат в течение трех дней
                                        с момента получения заказа (кроме
                                        заказов с методом доставки самовывоз).
                                        Товары из подборки "Архив Алены
                                        Долецкой" и оплаченные международными
                                        картами, не подлежат возврату. Подробнее
                                        в разделе «Возврат».
                                    </p>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="product-info-mobile-fixed">
                <Button wide>В корзину, 120 000 ₽</Button>
                <button className="product-info-mobile-fixed__favorite">
                    <Heart className="icon" size={24} />
                </button>
            </div>
        </>
    );
};
