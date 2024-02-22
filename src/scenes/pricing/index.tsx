import React from "react";
type Props = {}

interface PricingItem {
    name: string;
    initialPrice: number;
    conviencyPrice: number;
}

const pricingData: PricingItem[] = [
    { name: 'Item 1', initialPrice: 10, conviencyPrice: 5 },
    { name: 'Item 2', initialPrice: 20, conviencyPrice: 8 },
    // Add more items here...
];

function Pricing({ }: Props) {
    return (
        <section className="gap-16 bg-gray-20 pt-10 w-full h-full  md:pb-12">
            <div>
                <div className="py-10 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold">Pricing</h2>
                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">Out-Of-State Registration</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-1 font-bold">Service</div>
                        <div className="col-span-1 font-bold">State Price</div>
                        <div className="col-span-1 font-bold">Conviency Price</div>
                        <div className="col-span-1 font-bold">Total</div>
                        {pricingData.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="col-span-1">{item.name}</div>
                                <div className="col-span-1">${item.initialPrice}</div>
                                <div className="col-span-1">${item.conviencyPrice}</div>
                                <div className="col-span-1">${item.initialPrice + item.conviencyPrice}</div>
                            </React.Fragment>
                        ))}
                    </div>
                    <h2 className="my-5 text-2xl tracking-tight font-extrabold">In-State Registration</h2>
                </div>
            </div>
        </section>
    )
}

export default Pricing
