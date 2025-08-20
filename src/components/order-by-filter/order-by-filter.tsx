import "./order-by-filter.css"

import {useQueryState} from "nuqs";

type OrderByFilterProps = {
    options: string[];
    defaultOrder?: string;
    onOrderChange: (order: string) => void;
}

export default function OrderByFilter(props: OrderByFilterProps) {
    const [order, setOrderByInUrl] = useQueryState('order', {defaultValue: props.defaultOrder ? props.defaultOrder : ""});

    const orderByOptions = [];
    for (const i in props.options) {
        const opt = props.options[i]
        orderByOptions.push(<option key={opt} value={opt}>{opt}</option>);
    }

    return (
        <div className="order-by-container">
            <span className="order-by-label">Order by:&nbsp;</span>
            <select id="order-by-select" name="order-by"
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