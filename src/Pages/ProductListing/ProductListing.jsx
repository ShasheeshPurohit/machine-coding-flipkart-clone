import Filter from "../../Components/Filter/Filter";
import "./ProductListing.css"
import { useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function ProductListing(){

    const {data} = useSelector((state)=>state.filterData)


    return(
        <div className="product-listing-layout flex w-full p-4">
            <div className="filter-layout m-1 h-full bg-white w-1/6 text-justify">
                <Filter/>
            </div>
            <div className="product-display m-1 bg-white w-5/6 flex flex-wrap p-16 justify-start">
                {data.map((product)=>{
                    return(
                        <div className="product-card-container m-4">
                            <ProductCard product={product}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}