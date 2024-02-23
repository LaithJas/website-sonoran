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

//{name: '', initialPrice: '', conviencyPrice: '', total: ''},
const myList1 = [
    { name: 'Title Transfer', initialPrice: 'Varies', conviencyPrice: '1:$30 2:$40 5:$55', total: 'Varies' },
    { name: 'Out of State Transfer', initialPrice: 'Varies', conviencyPrice: '1:$35 2:$45 5:$65', total: 'Varies' },
    { name: 'Title Only', initialPrice: '$4', conviencyPrice: '$16', total: '$20' },
    { name: 'Print Title/Duplicate Title', initialPrice: '$4', conviencyPrice: '$16', total: '$20' },
    { name: 'Restored Salvage', initialPrice: '$4', conviencyPrice: '$18', total: '$22' },
    { name: 'Salvage', initialPrice: '$4', conviencyPrice: '$16', total: '$20' }
];

const myList2 = [
    { name: 'Vehicle Renewal', initialPrice: 'Varies', conviencyPrice: '1:$15 2:$20 5:$35', total: 'Varies' },
    { name: 'Initial Registration', initialPrice: 'Varies', conviencyPrice: '$20', total: 'Varies' },
    { name: 'Replacement Plate', initialPrice: '$6.52', conviencyPrice: '$6.48', total: '$13' },
    { name: 'Tab Replacement', initialPrice: '$6.96', conviencyPrice: '$4.04', total: '$11' },
    { name: 'Duplicate Registration', initialPrice: '$0', conviencyPrice: '$5', total: '$5' },
]

const Pricing: React.FC<PricingItemProps> = ({ }) => {
    return (
        <section className="gap-16 bg-gray-20 pt-10 w-full h-full  md:pb-12">
            <div>
                <div className="py-10 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold">Pricing</h2>
                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">Title And Registration</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-1 font-bold">Service</div>
                        <div className="col-span-1 font-bold">State Price</div>
                        <div className="col-span-1 font-bold">Conviency Price</div>
                        <div className="col-span-1 font-bold">Total</div>
                        {myList1.map((item, index) => (
                            <PricingItem key={index} item={item} />
                        ))}
                    </div>
                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">Registration Renewal</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {myList2.map((item, index) => (
                            <PricingItem key={index} item={item} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Pricing
