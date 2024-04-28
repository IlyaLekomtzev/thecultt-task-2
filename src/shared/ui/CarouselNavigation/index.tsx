import { FC } from "react";
import cn from "classnames";
import "./styles.scss";

interface Props {
    count: number;
    activeIndex: number;
    className?: string;
}

export const CarouselNavigation: FC<Props> = ({
    count,
    activeIndex,
    className,
}) => (
    <div className={cn("carousel-navigation", className)}>
        {Array.from({ length: count }, (_, i) => (
            <span
                key={i}
                className={cn("carousel-navigation__item", {
                    "carousel-navigation__item--active": activeIndex === i,
                })}
            />
        ))}
    </div>
);
