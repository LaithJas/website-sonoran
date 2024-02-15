import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/SonoranText.png";
import HomePageGraphic from "@/assets/carHomeDesign.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import RouteLink from "@/shared/RouteLink";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADINGS */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-24 before:-left-28 before:z-[-1] md:before:content-evolvetext">
                                <img alt="home-page-text" src={HomePageText} />
                            </div>
                        </div>

                        <p className="mt-8 text-sm">
                            At Sonoran Tag and Title, We Specialize in Simplifying Your Vehicle-related Processes.
                            We offer Title Transfer, Registration Renewal, Plates and Tags Replacement, Duplicate Titles, Public Notray
                            Permits, and{' '}
                            <AnchorLink
                                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                                href={`#${SelectedPage.ContactUs}`}
                            >
                                more.
                            </AnchorLink>
                        </p>
                    </motion.div>

                    {/* ACTIONS */}
                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <RouteLink page="Services" isButton={true} >
                            Our Services
                        </RouteLink>

                    </motion.div>
                </div>

                {/* IMAGE */}
                <div
                    className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
                >
                    <img alt="home-pageGraphic" src={HomePageGraphic} />
                </div>
            </motion.div>

            {/* SPONSORS 
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-gray-20 ">
                    <div className="mx-auto w-5/6">
                        <div className="flex items-center justify-between gap-8">
                            <img alt="Tumble-Weed" src={TumbleWeed} />
                            <img alt="Tumble-Weed55" src={TWRotate55} />
                        </div>
                    </div>
                </div>
            )}*/}
        </section>
    );
};

export default Home;
