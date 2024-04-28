import { FC } from "react";
import "./styles.scss";

interface Props {
    title: string;
    value: string;
}

export const Property: FC<Props> = ({ title, value }) => (
    <p className="property">
        {title}: <span className="property__value">{value}</span>
    </p>
);
