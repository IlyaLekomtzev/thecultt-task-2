import cn from "classnames";
import { FC, ReactNode } from "react";
import "./styles.scss";
import { Plus } from "@phosphor-icons/react";

interface IAccordionItem {
    title: string;
    content: ReactNode;
}

interface Props {
    items: IAccordionItem[];
    activeIndex?: number;
    icon?: ReactNode;
    onClick?: (index: number) => void;
}

export const Accordion: FC<Props> = ({ items, icon, activeIndex, onClick }) => (
    <div className="accordion">
        {items.map(({ title, content }, index) => (
            <div
                key={index}
                className={cn("accordion-item", {
                    "accordion-item--active": activeIndex === index,
                })}
            >
                <div
                    className="accordion-item__head"
                    onClick={() => onClick?.(index)}
                >
                    <h5 className="accordion-item__title">{title}</h5>
                    {icon || <Plus className="icon" size={18} />}
                </div>
                <div className="accordion-item__content">{content}</div>
            </div>
        ))}
    </div>
);
