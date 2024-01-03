import { interpolate } from "framer-motion";
import { StringifyOptions } from "querystring";

export enum SelectedPage {
    Home = "home",
    Services = "services",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}
