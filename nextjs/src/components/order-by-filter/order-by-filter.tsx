import "./order-by-filter.css"

import {useQueryState} from "nuqs";

type OrderByFilterProps = {
    orderKey: string;
    options: string[];
    defaultOrder?: string;
    onOrderChange: (order: string) => void;
}

export default function OrderByFilter(props: OrderByFilterProps) {
    const [order, setOrderByInUrl] = useQueryState(props.orderKey, {defaultValue: props.defaultOrder ? props.defaultOrder : ""});

    const orderByOptions = [];
    for (const i in props.options) {
        const opt = props.options[i]
        orderByOptions.push(<option key={opt} value={opt}>{opt}</option>);
    }

    return (
        <div className="order-by-container">
            <span className="order-by-label">Order by:&nbsp;</span>
            <select className="order-by-select" name="order-by"
                    defaultValue={order}
                    onChange={(e) => {
                        setOrderByInUrl(e.target.value);
                        props.onOrderChange(e.target.value)
                    }}>
                {orderByOptions}
            </select>
        </div>
    )
}