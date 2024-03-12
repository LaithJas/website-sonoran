import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    TruckIcon,
    KeyIcon,
    HandThumbUpIcon,
    DocumentIcon,
    BriefcaseIcon,
    EyeIcon,
    CalendarDaysIcon,
    CreditCardIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Service from "../services/Service";

const services: Array<BenefitType> = [
    {
        icon: <KeyIcon className="h-6 w-6" />,
        title: "Title Transfer",
        description:
            "Process that Entails a Change of Ownership for a Motor Vehicle or Trailer",
    },
    {
        icon: <TruckIcon className="h-6 w-6" />,
        title: "Registration Renewal",
        description:
            "Reneww your Vehicle Regestration so you are Legal on the Road",
    },
    {
        icon: <CalendarDaysIcon className="h-6 w-6" />,
        title: "Permits",
        description:
            "3 Days and 30 Days Permits",
    },
    {
        icon: <DocumentIcon className="h-6 w-6" />,
        title: "Motor Vehicle Records",
        description:
            "Any Certified or Uncertified MVR, From 39 Months to 10 Years.",
    },
];

const services2: Array<BenefitType> = [
    {
        icon: <HandThumbUpIcon className="h-6 w-6" />,
        title: "Placards",
        description:
            "Issue and Replace Temporary and Permanent Placards.",
    },
    {
        icon: <EyeIcon className="h-6 w-6" />,
        title: "Vehicle Insection",
        description:
            "Our Certified Processors Can Help You With Your Level I Inspection",
    },
    {
        icon: <BriefcaseIcon className="h-6 w-6" />,
        title: "Dealer's Services",
        description:
            "Are you a Car Dealer and looking for competitive prices?",
    },
    {
        icon: <CreditCardIcon className="h-6 w-6" />,
        title: "Plate Services",
        description:
            "Reinstating Plates, Resending Plates, Tab Replacement, and  Sold Notices",
    },
];
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const AllServices = ({ setSelectedPage }: Props) => {
    return (
        <section id="services" className="w-full bg-gray-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
            >
                <div className="mx-auto min-h-full w-5/6 py-20">
                    {/* HEADER */}
                    <motion.div
                        className="md:my-5 md:basis-3/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <HText>OUR SERVICES</HText>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        className="mt-5 items-center justify-between gap-8 md:flex"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={container}
                    >
                        {services.map((service: BenefitType) => (
                            <Service
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                setSelectedPage={setSelectedPage}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="mt-5 items-center justify-between gap-8 md:flex"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={container}
                    >
                        {services2.map((service: BenefitType) => (
                            <Service
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                setSelectedPage={setSelectedPage}
                            />
                        ))}
                    </motion.div>

                    {/* GRAPHICS AND DESCRIPTION */}
                    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                        {/* GRAPHIC 
                    <img
                        className="mx-auto"
                        alt="services-page-graphic"
                        src={BenefitsPageGraphic}
                    />
                        */}
                        {/* DESCRIPTION */}
                        <div>
                            {/* TITLE */}
                            <div className="relative">
                                <div className="before:absolute before:-top-28 before:-left-20 before:z-[1]">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            hidden: { opacity: 0, x: 50 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                        className="relative z-[2]"
                                    >
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AllServices;
