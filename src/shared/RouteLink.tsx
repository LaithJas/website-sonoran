import { Link } from "react-router-dom";
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    page: string;
}

/*
 *RouteLink Component is used to Route linked to different pages that exsit inside the website.
 * The names of the pages that we can route to are defiened in the types.ts file
 *
 * TODO: This might need to be changed to indlue any route not just things from types.ts
 */

function RouteLink({ page, children }: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    return (
        <Link
            to={"/" + lowerCasePage}
            className="text-secondary-500 transition duration-500 hover:text-secondary-500"
        >
            {children}
        </Link>
    )
}

export default RouteLink;
