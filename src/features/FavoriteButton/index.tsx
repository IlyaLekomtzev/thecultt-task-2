import { FC, useState } from "react";
import cn from "classnames";
import { Heart } from "@phosphor-icons/react";
import "./styles.scss";

interface Props {
    className?: string;
}

export const FavoriteButton: FC<Props> = ({ className }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <button
            type="button"
            className={cn("favorite-button", className, {
                "favorite-button--active": isFavorite,
            })}
            onClick={() => setIsFavorite((s) => !s)}
        >
            <Heart size={24} weight={isFavorite ? "fill" : "regular"} />
            <span className="favorite-button__count">12</span>
        </button>
    );
};
