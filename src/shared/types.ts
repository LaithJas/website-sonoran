export enum SelectedPage {
    Home = "home",
    Services = "services",
    AllServices = "allservices",
    FAQ = "FAQ",
    ContactUs = "contactus",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}
