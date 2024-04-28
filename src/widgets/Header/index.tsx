import {
    GlobeSimple,
    List,
    MagnifyingGlass,
    ShoppingBag,
    User,
} from "@phosphor-icons/react";
import logoImage from "@/shared/assets/logo.svg";
import { SearchBar } from "@/features/SearchBar";
import { Button } from "@/shared/ui";
import { Menu } from "@/features/Menu";
import "./styles.scss";

export const Header = () => (
    <header className="header">
        <div className="container">
            <div className="header__top">
                <div className="header__buttons header-mobile-buttons">
                    <button className="header-button">
                        <List className="icon" size={18} />
                    </button>
                    <button className="header-button">
                        <MagnifyingGlass className="icon" size={18} />
                    </button>
                </div>
                <div className="header__row">
                    <a href="#" className="header-logo">
                        <img
                            className="header-logo__img"
                            src={logoImage}
                            alt="Logo"
                        />
                    </a>
                    <div className="header__search">
                        <SearchBar />
                    </div>
                </div>
                <div className="header__row">
                    <div className="header__buttons header-text-buttons">
                        <Button size="small">Продать</Button>
                        <Button size="small" variant="outline">
                            Обменять
                        </Button>
                    </div>
                    <button className="header-button header-button--transparent header-lang-button">
                        <GlobeSimple size={20} />
                    </button>
                    <div className="header__buttons">
                        <button className="header-button">
                            <ShoppingBag className="icon" size={18} />
                        </button>
                        <button className="header-button">
                            <User className="icon" size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container header__menu">
            <Menu />
        </div>
    </header>
);
