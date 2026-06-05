import { page2 } from "../Page2";
import { urlparameter } from "../UrlParameter";

export const page2Routes = [
    {
        path: "/",
        exact: true,
        children: <page2 />
    },
    {
        path: "/:id",
        exact: false,
        children: <UrlParameter />
    },
];
