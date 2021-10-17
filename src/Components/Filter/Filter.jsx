import "./Filter.css"
import { useDispatch } from "react-redux";
import { brandFil, clearFilters, idealForRed, priceSort, removeIdealFor, sizeFil } from "../../features/filter/filterSlice";


export default function Filter(){
    const dispatch = useDispatch();

    return(
        <div className="w-full">
            <p className="p-4 text-2xl font-semibold border-b-2">Filters</p>
            <div className="filter-menu-category p-4 border-b-2">
                <p className="uppercase text-xs font-semibold text-grey">Categories</p>
                <p className="mt-2 text-m font-semibold">&#60; Clothing and Accessor...</p>
            </div>
            <div className="sort-menu p-4 flex flex-col w-full items-start border-b-2">
                <p>Sort by price</p>
                <div className="sorting-options">
                    <div>
                        <input type="radio" name="price" className="m-2" onClick={()=>dispatch(priceSort("high-to-low"))} /><>High-to-Low</>
                    </div>
                     <div>
                        <input type="radio" name="price" className="m-2" onClick={()=>dispatch(priceSort("low-to-high"))} /><>Low-to-high</>
                    </div>
                </div>
            </div>
            <div className="filter-menu p-4 flex flex-col w-full items-start border-b-2">
                <p>Ideal for:</p>
                <div className="filtering-options">
                    <div>
                        <input type="radio" name="idealFor" className="m-2"  onChange={(event)=>{
                          dispatch(idealForRed({value:"Men", checked:event.target.value}))
                            }}/><>Men</>
                    </div>
                     <div>
                        <input type="radio" name="idealFor" className="m-2" onChange={(event)=>{
                          dispatch(idealForRed({value:"Women", checked:event.target.value}))
                            }}/><>Women</>
                    </div>
                    <div>
                        <input type="radio" name="idealFor" className="m-2" onChange={()=>dispatch(idealForRed("Children"))}/><>Children</>
                    </div>
                </div>
            </div>
            <div className="filter-menu p-4 flex flex-col w-full items-start border-b-2">
                <p>Brand:</p>
                <div className="filtering-options">
                    <div>
                        <input type="radio" name="brand" className="m-2" onClick={()=>dispatch(brandFil("Gucci"))} /><>Gucci</>
                    </div>
                     <div>
                        <input type="radio" name="brand" className="m-2" onClick={()=>dispatch(brandFil("Louis Vuitton"))} /><>Louis Vuitton</>
                    </div>
                    <div>
                        <input type="radio" name="brand" className="m-2" onClick={()=>dispatch(brandFil("Armani"))} /><>Armani</>
                    </div>
                    <div>
                        <input type="radio" name="brand" className="m-2" onClick={()=>dispatch(brandFil("Sarojini Bazaar"))} /><>Sarojini Bazaar</>
                    </div>
                </div>
            </div>
            <div className="filter-menu p-4 flex flex-col w-full items-start border-b-2">
                <p>Size:</p>
                <div className="filtering-options">
                    <div>
                        <input type="radio" name="size" className="m-2" onClick={()=>dispatch(sizeFil("S"))} /><>S</>
                    </div>
                     <div>
                        <input type="radio" name="size" className="m-2" onClick={()=>dispatch(sizeFil("M"))} /><>M</>
                    </div>
                    <div>
                        <input type="radio" name="size" className="m-2" onClick={()=>dispatch(sizeFil("L"))} /><>L</>
                    </div>
                    <div>
                        <input type="radio" name="size" className="m-2" onClick={()=>dispatch(sizeFil("XL"))} /><>XL</>
                    </div>
                </div>
            </div>
            <button onClick={()=>dispatch(clearFilters())}>Clear Filter</button>
        </div>
    );
}