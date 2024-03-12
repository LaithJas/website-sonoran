import React from "react"

interface Props {
    item: {
        name: string;
        initialPrice: string;
        conviencyPrice: string;
        total: string
    }
}

const PricingItem: React.FC<Props> = ({ item }) => {

    return (

        <React.Fragment>
            <div className="col-span-1">{item.name}</div>
            <div className="col-span-1">{item.initialPrice}</div>
            <div className="col-span-1">{item.conviencyPrice}</div>
            <div className="col-span-1">{item.total}</div>
        </React.Fragment>
    )
}

export default PricingItem
