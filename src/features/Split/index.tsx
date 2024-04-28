import cn from "classnames";
import { Info } from "@phosphor-icons/react";
import splitImage from "@/shared/assets/split.svg";
import "./styles.scss";
import { FC } from "react";

interface Props {
    small?: boolean;
}

export const Split: FC<Props> = ({ small }) => (
    <div className={cn("split", { "split--small": small })}>
        <div className="split__label">
            <img src={splitImage} alt="Split" width={12} />
            30 000 ₽
        </div>
        <p className="split__text">× 4 платежа в Сплит</p>
        {!small && <Info className="icon" size={16} />}
    </div>
);
