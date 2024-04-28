import { ArrowLeft } from "@phosphor-icons/react";
import { BREADCRUMBS_ITEMS } from "./constants";
import "./styles.scss";

export const Breadcrumbs = () => (
    <div className="breadcrumbs">
        <button className="breadcrumbs-back">
            <ArrowLeft className="icon" size={14} />
        </button>
        <nav className="breadcrumbs-links">
            {BREADCRUMBS_ITEMS.map((item) => (
                <a key={item} href="#" className="breadcrumbs-links__item">
                    {item}
                </a>
            ))}
        </nav>
    </div>
);
