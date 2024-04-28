import { ProductConditionState } from "./types";

export const PRODUCT_CONDITIONS: Array<{
    key: ProductConditionState;
    title: string;
}> = [
    {
        key: "good",
        title: "Хорошее",
    },
    {
        key: "excellent",
        title: "Отличное",
    },
    {
        key: "new",
        title: "Новое",
    },
    {
        key: "with-tag",
        title: "С биркой",
    },
];
