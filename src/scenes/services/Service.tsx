import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Service = ({ icon, title, description, setSelectedPage }: Props) => {
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
            <AnchorLink
                className="text-sm font-bold text-gray-700 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
        </motion.div>
    );
};

export default Service;
