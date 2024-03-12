import Logo from "@/assets/icon3.png";
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

const Navbar = ({ isTopOfPage }: Props) => {
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
                                    <RouteLink page=""> Home </RouteLink>

                                    <RouteLink page="AllServices">
                                        Services
                                        <button onClick={() => setIsDropDownToggled(!isDropDownToggled)}>
                                            <ChevronDownIcon className="h-4 w-6" onClick={(e) => e.preventDefault()} />
                                        </button>
                                        <div className="relative">
                                            <div>
                                                {isDropDownToggled && (
                                                    <div className={`${navbarBackground} absolute pb-4 py-2 mt-2 whitespace-nowrap bg-white drop-shadow-xl rounded-xl`}>

                                                        <div className="flex justify-end p-4">
                                                            <button onClick={() => setIsDropDownToggled(!isDropDownToggled)}>
                                                                <XMarkIcon className="h-6 w-6" onClick={(e) => e.preventDefault()} />
                                                            </button>
                                                        </div>

                                                        <div className="ml-[10%] mt-[5%] flex flex-col gap-4 pr-10">
                                                            <RouteLink page="" onClick={() => setIsDropDownToggled(false)}>
                                                                Title Transfer
                                                            </RouteLink>
                                                            <RouteLink page="Services" onClick={() => setIsDropDownToggled(false)}>
                                                                Renew Registration
                                                            </RouteLink>
                                                            <RouteLink page="faq" onClick={() => setIsDropDownToggled(false)}>
                                                                MVR
                                                            </RouteLink>
                                                        </div>
                                                    </div>

                                                )}
                                            </div>
                                        </div>
                                    </RouteLink>

                                    <RouteLink page="faq"> FAQ </RouteLink>

                                </div>

                                <div className={`${flexBetween} gap-8`}>
                                    <CustomLink url="https://www.google.com/maps/dir//111+S+Dobson+Rd+Suite+101,+Mesa,+AZ+85202/@33.4128298,-111.9562415,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x872b07f5d72d849b:0xa23a16029740fb12!2m2!1d-111.8738489!2d33.412857?entry=ttu">Directions</CustomLink>
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
                            <RouteLink page="" onClick={() => setIsMenuToggled(false)}>
                                Home
                            </RouteLink>
                            <RouteLink page="AllServices" onClick={() => setIsMenuToggled(false)}>
                                Services

                                <button onClick={() => setIsDropDownToggled(!isDropDownToggled)}>
                                    <ChevronDownIcon className="h-4 w-6" onClick={(e) => e.preventDefault()} />
                                </button>
                                <div>
                                    {isDropDownToggled && (
                                        <div className={`${navbarBackground} fixed z-auto h-[40%] w-auto bg-white drop-shadow-xl rounded-xl`}>

                                            <div className="flex justify-end p-4">
                                                <button onClick={() => setIsDropDownToggled(!isDropDownToggled)}>
                                                    <XMarkIcon className="h-6 w-6 text-black" onClick={(e) => e.preventDefault()} />
                                                </button>
                                            </div>

                                            <div className="ml-[10%] mt-[5%] flex flex-col gap-5 ">
                                                <RouteLink page="" onClick={() => setIsDropDownToggled(false)}>
                                                    Title Transfer
                                                </RouteLink>
                                                <RouteLink page="Services" onClick={() => setIsDropDownToggled(false)}>
                                                    Renew Registration
                                                </RouteLink>
                                                <RouteLink page="faq" onClick={() => setIsDropDownToggled(false)}>
                                                    MVR
                                                </RouteLink>
                                            </div>
                                        </div>

                                    )}
                                </div>
                            </RouteLink>
                            <RouteLink page="faq" onClick={() => setIsMenuToggled(false)}>
                                FAQ
                            </RouteLink>
                            <CustomLink classNameOverride="text-secondary-500 transition duration-500 hover:text-secondary-500" url="https://www.google.com/maps/dir//111+S+Dobson+Rd+Suite+101,+Mesa,+AZ+85202/@33.4128298,-111.9562415,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x872b07f5d72d849b:0xa23a16029740fb12!2m2!1d-111.8738489!2d33.412857?entry=ttu">Directions</CustomLink>
                            <a href="tel:(480) 905-0414">Phone: (480) 905-0414</a>
                        </div>

                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
