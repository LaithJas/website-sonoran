import RouteLink from "@/shared/RouteLink";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    link?: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Service = ({ icon, title, description, link }: Props) => {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-4 border-blue-200 px-5 py-16 text-center flex flex-col justify-between"
            style={{ minWidth: "300px", minHeight: "350px" }}
        >
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-blue-200 bg-primary-100 p-4">
                    {icon}
                </div>
            </div>
            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
            <RouteLink
                classNameOverride="text-sm font-bold text-gray-700 underline hover:text-secondary-500"
                page={link ? link : ""}
                isButton={false}>
                Learn More
            </RouteLink>
        </motion.div>
    );
};

export default Service;


/*
            <AnchorLink
                className="text-sm font-bold text-gray-700 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
                        className={classNameOverride === "" ? "text-secondary-500 transition duration-500 hover:text-secondary-500" : { classNameOverride }}
*/
