import Logo from "@/assets/icon2_son.png";
import Link from "./Link";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import CustomLink from "@/shared/CustomLink";
import RouteLink from "@/shared/RouteLink";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const [isDropDownToggled, setIsDropDownToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-gray-20 drop-shadow"

    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/*LEFT SIDE*/}
                        <img alt="logo" src={Logo} />
                        {/*RIGHT SIDE*/}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>

                                <div className={`${flexBetween} gap-8 text-md`}>
                                    <RouteLink page="">
                                        Home
                                    </RouteLink>
                                    <RouteLink page="Services">
                                        Services
                                        <button onClick={() => setIsDropDownToggled(!isDropDownToggled)}>
                                            <ChevronDownIcon className="h-4 w-6" />
                                        </button>
                                        <div>
                                            {/*
                                                TODO: make the dropdown window disappear when you click a link (chekc chatGPT: Tailwind css margin and | for more info )
                                                TODO: Deal with dropdown window disappearing when scrolling (either untoggle the dropdown or fix it)
                                                TODO: check same GPT page to do the multipage Services functionality
                                                TODO: fix FAQ page where the footer is getting mixed with the page
                                            */}
                                            {isDropDownToggled && (
                                                <div className={`${navbarBackground} fixed z-auto h-[40%] w-1/3 bg-gray-700 drop-shadow-xl rounded-xl`}>

                                                    <div className="flex justify-end p-4">
                                                        <button onClick={() => setIsDropDownToggled(!isDropDownToggled)}>
                                                            <XMarkIcon className="h-6 w-6 text-white" />
                                                        </button>
                                                    </div>

                                                    <div className="ml-[10%] mt-[5%] flex flex-col gap-5 ">
                                                        <RouteLink page="">
                                                            Title Transfer:
                                                        </RouteLink>
                                                        <RouteLink page="Services">
                                                            Renew Registration
                                                        </RouteLink>
                                                        <RouteLink page="faq">
                                                            MVR
                                                        </RouteLink>
                                                    </div>
                                                </div>

                                            )}
                                        </div>
                                    </RouteLink>
                                    <RouteLink page="faq">
                                        FAQ
                                    </RouteLink>
                                    <RouteLink
                                        page="Contact Us"
                                    >
                                        Contact Us
                                    </RouteLink>
                                </div>

                                <div className={`${flexBetween} gap-8`}>
                                    <CustomLink url="https://azdot.gov/mvd" >ADOT</CustomLink>
                                </div>

                            </div>)

                            : (
                                <button
                                    className="rounded-full bg-secondary-500 p-2"
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <Bars3Icon className="h-6 w-6 text-white" />
                                </button>
                            )}
                    </div>
                </div>
            </div >

            {/*Mobel Menu Modal*/}
            {
                !isAboveMediumScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-700 drop-shadow-xl">
                        {/*Close Icon*/}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <XMarkIcon className="h-6 w-6 text-gray-400" />
                            </button>
                        </div>

                        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                            <RouteLink page="">
                                Home
                            </RouteLink>
                            <RouteLink page="Services">
                                Services
                            </RouteLink>
                            <RouteLink page="faq">
                                FAQ
                            </RouteLink>
                            <RouteLink
                                page="Contact Us"
                            >
                                Contact Us
                            </RouteLink>
                        </div>

                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
