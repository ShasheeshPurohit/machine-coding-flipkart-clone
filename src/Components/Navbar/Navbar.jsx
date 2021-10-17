import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar w-full flex justify-around h-16 items-center">
            <div className="brand-box flex w-5/12 ml-8">
                <div className="brand-details flex flex-col">
                 <p className="brand-name text-white italic font-bold text-xl">Flipkart</p>
                 <p className="brand-sub text-white italic text-s flex">Explore <span className="text-yellow-400 font-semibold pl-1">Plus</span> <img className="plus-icon" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"/></p>
             
                </div>
                <input placeholder="Search for products, brands and more" className="search-box ml-2 mt-2 mb-2 w-4/5 p-1 pl-4"></input>
                <button className="bg-white mt-2 mb-2 w-8 pr-2"><i class="fas fa-search text-blue-200 search-btn-icon"></i></button>
            </div>
            <div className="nav-button-section flex justify-around w-3/12 mr-4">
                <div>
                <button className="nav-btn show-btn btn-login bg-white text-lg  w-36 text-blue">Login</button>
                <div className="showme">I'm here!</div>
                </div>

                <button className="nav-btn text-white font-semibold text-lg">More</button>
                <button className="nav-btn text-lg text-white font-semibold"><i class="fas fa-shopping-cart"></i> Cart</button>
            </div>
        </nav>
    );
}