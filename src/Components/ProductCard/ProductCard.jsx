import "./ProductCard.css"

export default function ProductCard({product}){
    return(
        <div className="product-card rounded-lg w-60 flex flex-col items-start">
            <div className="image-container h-4/5">
                <img src={product.image} className="rounded-lg"/>
            </div>
            <p>{product.brand}</p>
            <p>{product.name.slice(0,25)}{product.name.length>25?"...":""}</p>
            <p>{product.price}</p>
            <div className="size-array flex">
                <p>Sizes:</p>
                <ul className="flex">
                    {product.size.map((size)=>{
                        return (
                            <li className="ml-2 mr-2">{size}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}