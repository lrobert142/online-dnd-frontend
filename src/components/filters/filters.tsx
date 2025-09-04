import Searchbar from "@/components/searchbar/searchbar";
import OrderByFilter from "@/components/order-by-filter/order-by-filter";

type filtersProps = {
    searchKey: string;
    searchTerm?: string;
    onSearchChange: (searchTerm: string) => void;

    orderByKey: string;
    defaultOrderBy?: string;
    orderByOptions: string[];
    onOrderChange: (order: string) => void;
}

export default function Filters(props: filtersProps) {
    return (
        <div className="filters-and-searchbar">
            <Searchbar searchKey={props.searchKey} searchTerm={props.searchTerm} onSearchChange={props.onSearchChange}/>
            <div className="filters-container">
                <OrderByFilter
                    orderKey={props.orderByKey}
                    options={props.orderByOptions}
                    defaultOrder={props.defaultOrderBy}
                    onOrderChange={props.onOrderChange}/>
            </div>
        </div>
    )
}