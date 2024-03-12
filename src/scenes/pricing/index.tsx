import React from "react";
import PricingItem from "./PricingItem";

interface PricingItemProps {
    pricingList: {
        name: string;
        initialPrice: string;
        conviencyPrice: string;
        total: string;
    }[];
}

//{name: '', initialPrice: '$', conviencyPrice: '$', total: '$'},
const TnR = [
    { name: 'Title Transfer', initialPrice: 'Varies', conviencyPrice: '1:$30 2:$40 5:$55', total: 'Varies' },
    { name: 'Out of State Transfer', initialPrice: 'Varies', conviencyPrice: '1:$35 2:$45 5:$65', total: 'Varies' },
    { name: 'Title Only', initialPrice: '$4', conviencyPrice: '$16', total: '$20' },
    { name: 'Print Title/Duplicate Title', initialPrice: '$4', conviencyPrice: '$16', total: '$20' },
    { name: 'Restored Salvage', initialPrice: '$4', conviencyPrice: '$18', total: '$22' },
    { name: 'Salvage', initialPrice: '$4', conviencyPrice: '$16', total: '$20' }
];

const Reg = [
    { name: 'Vehicle Renewal', initialPrice: 'Varies', conviencyPrice: '1:$15 2:$20 5:$35', total: 'Varies' },
    { name: 'Initial Registration', initialPrice: 'Varies', conviencyPrice: '$20', total: 'Varies' },
    { name: 'Plate Replacement', initialPrice: '$6.52', conviencyPrice: '$6.48', total: '$13' },
    { name: 'Tab Replacement', initialPrice: '$6.96', conviencyPrice: '$4.04', total: '$11' },
    { name: 'Duplicate Registration', initialPrice: '$0', conviencyPrice: '$5', total: '$5' },
]

const mvr = [
    { name: '39 Month Record Uncertified', initialPrice: '$3', conviencyPrice: '$7', total: '$10' },
    { name: '5 Year Record Certified', initialPrice: '$5', conviencyPrice: '$10', total: '$15' },
    { name: '10 Year Recrod Certified', initialPrice: '$5', conviencyPrice: '$15', total: '$20' },
    { name: 'Lien Record, Vehicle Record', initialPrice: 'Varies', conviencyPrice: '$10', total: 'Varies' },
]

const placards = [
    { name: 'Temporary Placard', initialPrice: '$0', conviencyPrice: '$10', total: '$10' },
    { name: 'Permanent Placard', initialPrice: '$0', conviencyPrice: '$10', total: '$10' },
]

const permits = [
    { name: 'Restricted Use 3 - Day', initialPrice: '$1', conviencyPrice: '$6', total: '$7' },
    { name: '30 - Day General Use', initialPrice: '$15', conviencyPrice: '$10', total: '$25' },
    { name: '90 - Day Resident Registration', initialPrice: '$15', conviencyPrice: '$15', total: '$30' },
    { name: '90 - Day Non-Resident', initialPrice: '$15', conviencyPrice: '$15', total: '$30' },
]

const inspection = [
    { name: 'Level One Inspection', initialPrice: 'None', conviencyPrice: '$20', total: '$20' },
    { name: 'Plate Suspension Reinstatement', initialPrice: '$50', conviencyPrice: '$20', total: '$70' },

]

const misc = [
    { name: 'Sold Notice, De-Insured', initialPrice: 'None', conviencyPrice: '$5', total: '$5' },
    { name: 'Notary', initialPrice: 'None', conviencyPrice: 'ADOT:$10 Public:$15', total: 'Varies' },
    { name: 'Address Change', initialPrice: 'None', conviencyPrice: '$2', total: '$2' },
    { name: 'Faxing', initialPrice: 'None', conviencyPrice: '$1/Page', total: '$Varies' },
    { name: 'Varies', initialPrice: '$500', conviencyPrice: '$10', total: '$510' }
]

const Pricing: React.FC<PricingItemProps> = ({ }) => {
    return (
        <section className="gap-16 bg-gray-20 pt-12 w-full md:pb-12">
            <div>
                <div className="py-10 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold">Pricing</h2>
                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">Title And Registration</h2>
                    <div className="grid grid-cols-4 gap-5 space-x-2 tracking-tight">
                        <div className="col-span-1 font-bold">Service</div>
                        <div className="col-span-1 font-bold">State Fee</div>
                        <div className="col-span-1 font-bold">Service Fee</div>
                        <div className="col-span-1 font-bold">Total</div>
                        {TnR.map((item, index) => (
                            <PricingItem key={index} item={item} />
                        ))}
                    </div>
                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">Registration Renewal</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {Reg.map((item, index) => (
                            <PricingItem key={index} item={item} />
                        ))}
                    </div>
                    <h2 className="my-5 text-2xl  tracking-tight font-extrabold">Motor Vehicle Records </h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-1 font-bold">Service</div>
                        <div className="col-span-1 font-bold">State Fee</div>
                        <div className="col-span-1 font-bold">Service Fee</div>
                        <div className="col-span-1 font-bold">Total</div>
                        {mvr.map((item, index) => (
                            <PricingItem key={index} item={item} />
                        ))}
                    </div>

                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">Placards</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {placards.map((item, index) => (
                            <PricingItem key={index} item={item} />
                        ))}
                    </div>

                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">Permits</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {permits.map((item, index) => (
                            <PricingItem key={index} item={item} />
                        ))}
                    </div>
                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">Vehicle Inspection</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {inspection.map((item, index) => (
                            <PricingItem key={index} item={item} />
                        ))}
                    </div>
                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">MISC </h2>
                    <div className="grid grid-cols-4 gap-4">
                        {misc.map((item, index) => (
                            <PricingItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
