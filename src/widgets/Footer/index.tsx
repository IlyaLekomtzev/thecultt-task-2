import { useState } from "react";
import { CaretRight, TelegramLogo } from "@phosphor-icons/react";
import logoImage from "@/shared/assets/logo.svg";
import { Accordion, Button } from "@/shared/ui";
import { FOOTER_LINKS_GROUPS } from "./constants";
import { FooterMenuItems } from "./ui/FooterMenuItems";
import "./styles.scss";

export const Footer = () => {
    const [accordionIndex, setAccordionIndex] = useState(-1);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__desktop">
                    <a href="#" className="footer-logo">
                        <img
                            className="footer-logo__img"
                            src={logoImage}
                            alt="Logo"
                        />
                    </a>
                    <div className="footer__grid">
                        {FOOTER_LINKS_GROUPS.map(({ title, items }) => (
                            <div key={title} className="footer-menu-block">
                                <h5 className="footer-menu-block__title">
                                    {title}
                                </h5>
                                <FooterMenuItems items={items} />
                            </div>
                        ))}
                        <div className="footer-telegram">
                            <h5 className="footer-telegram__title">
                                Подписывайтесь на THE CULTT в Telegram
                            </h5>
                            <p className="footer-telegram__description">
                                Ничего лишнего, только лоты мечты, которые вы
                                увидите первыми 🤫
                            </p>
                            <Button
                                className="footer-telegram__button"
                                variant="outline"
                                iconPosition="left"
                                icon={<TelegramLogo size={22} weight="fill" />}
                            >
                                Перейти
                            </Button>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <span className="footer__copyright">
                            © Все права защищены 2023, THE CULTT
                        </span>

                        <div className="footer-bottom-links">
                            <a href="#" className="footer-bottom-links__item">
                                Публичная оферта
                            </a>
                            <a href="#" className="footer-bottom-links__item">
                                Пользовательсткое соглашение
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__mobile">
                    <Accordion
                        icon={<CaretRight size={18} />}
                        activeIndex={accordionIndex}
                        items={FOOTER_LINKS_GROUPS.map((item) => ({
                            title: item.title,
                            content: <FooterMenuItems items={item.items} />,
                        }))}
                        onClick={setAccordionIndex}
                    />

                    <a href="#" className="footer-mobile-telegram">
                        <TelegramLogo
                            className="icon"
                            size={36}
                            weight="fill"
                        />
                    </a>

                    <span className="footer__copyright">
                        © Все права защищены 2023, THE CULTT
                    </span>
                </div>
            </div>
        </footer>
    );
};
