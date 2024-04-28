import { FC } from "react";
import "./styles.scss";

interface Props {
    items: string[];
}

export const FooterMenuItems: FC<Props> = ({ items }) => (
    <div className="footer-menu-items">
        {items.map((item) => (
            <a key={item} href="#" className="footer-menu-items__link">
                {item}
            </a>
        ))}
    </div>
);
