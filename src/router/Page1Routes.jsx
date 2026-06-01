import { page1 } from "../page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
    {
        path: "/",
        exact: true,
        children: <page1 />
    },
    {
        path: "/detailA",
        exact: false,
        children: <page1DatailA />
    },
    {
        path: "/detailB",
        exact: false,
        children: <page1DatailB />
    },
];

