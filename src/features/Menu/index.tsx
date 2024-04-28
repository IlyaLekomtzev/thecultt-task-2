import { MENU_ITEMS } from "./constants";
import "./styles.scss";

export const Menu = () => (
    <nav className="menu">
        {MENU_ITEMS.map((item) => (
            <a key={item} href="#" className="menu__item">
                {item}
            </a>
        ))}
    </nav>
);
