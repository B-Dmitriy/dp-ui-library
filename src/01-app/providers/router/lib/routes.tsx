import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../ui/Layout/Layout";
import { TodosLazy } from "../../../../03-pages/todos";
import { AuthLazy } from "../../../../03-pages/auth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        loader: () => <span>Loading...</span>,
        children: [
            {
                path: "/todos",
                element: <TodosLazy />
            },
            {
                path: "/auth",
                element: <AuthLazy />
            },
        ],
    },
]);
