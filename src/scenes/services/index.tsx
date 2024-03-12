import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    ClipboardDocumentListIcon,
    TruckIcon,
    BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Service from "./Service";
import RouteLink from "@/shared/RouteLink";

const services: Array<BenefitType> = [
    {
        icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
        title: "Title Transfer",
        description:
            "Process that entails a change of ownership for a motor vehicle or trailer",
        link: "TandR"
    },
    {
        icon: <TruckIcon className="h-6 w-6" />,
        title: "Registration Renewal",
        description:
            "Renewing your vehicle registration so you are legal on the road ",
        link: "reg"
    },
    {
        icon: <BuildingOfficeIcon className="h-6 w-6" />,
        title: "Dealer's Services",
        description:
            "Are you a new dealer and feel overwhelmed with all the ADOT required documents? we offer a step-by-step guide on document completion at no additional cost ",
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

const Services = ({ setSelectedPage }: Props) => {
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
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <HText>WE ARE HERE TO HELP.</HText>
                        <p className="my-5 text-md text-gray-700">
                            We Provide variaty of services for Customers and Dealers.
                        </p>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        className="mt-5 items-center justify-between gap-8 md:flex"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={container}
                    >
                        {services.map((benefit: BenefitType) => (
                            <Service
                                key={benefit.title}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                link={benefit.link}
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
                                        <HText>
                                            HUNDEREDS OF HAPPY CUSTOMERS EVERYDAY.
                                        </HText>
                                    </motion.div>
                                </div>
                            </div>

                            {/* DESCRIPT */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <p className="my-5">
                                    Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                    egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                    fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                    nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                    tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                    Felis orci diam odio.
                                </p>
                                <p className="mb-5">
                                    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                    tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                    facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                    enim mattis odio in risus nunc.
                                </p>
                            </motion.div>

                            {/* BUTTON */}
                            <div className="relative mt-16">
                                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                    <RouteLink page="AllServices" isButton={true}>
                                        View Services
                                    </RouteLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
