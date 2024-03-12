import { Link } from "react-router-dom";
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    page: string;
    classNameOverride?: string;
    isButton?: boolean;
    onClick?: () => void;
}

/*
 *RouteLink Component is used to Route linked to different pages that exsit inside the website.
 * The names of the pages that we can route to are defiened in the types.ts file
 *
 * TODO: This might need to be changed to indlue any route not just things from types.ts
 */

function RouteLink({ page, children, isButton, onClick, classNameOverride }: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    return (
        <>
            {isButton ? (
                <Link
                    className="rounded-md bg-secondary-500 text-white px-10 py-2 hover:bg-gray-700 hover:text-black"
                    to={"/" + lowerCasePage}
                    onClick={onClick}>
                    {children}
                </Link>
            ) :
                (
                    <Link
                        to={"/" + lowerCasePage}
                        className={classNameOverride === "" ? "text-secondary-500 transition duration-500 hover:text-secondary-500" : classNameOverride}
                        onClick={onClick}
                    >
                        {children}
                    </Link>
                )
            }
        </>
    )
}

export default RouteLink;
