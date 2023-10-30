import { Link } from "react-router-dom";
import Product from "../components/Browse";
import { useState } from "react";

export default function Browse() {

    const [ascendingPrice, setAscendingPrice] = useState(false);
    const [descendingPrice, setDescendingPrice] = useState(false);

    const handleAscending = (evt) => {
        setAscendingPrice(true);
        setDescendingPrice(false);
    }

    const handleDescending = (evt) => {
        setDescendingPrice(true);
        setAscendingPrice(false);
    }

    return (
        <div className="h-screen">
            {/* header section */}
            <div className="flex flex-row justify-center pt-5 gap-5 text-1xl font-semibold">
                <Link to="/">Home</Link>
                <Link to="/browse">Browse</Link>
                <Link to="/signup">Log In</Link>
            </div>
            {/* main content */}
            <div className="flex flex-row">
                {/* sidenav bar */}
                <div className="basis-1/4 grow">
                    <ul>
                        <li>
                            <input type="radio" id="low-to-high" name="sort_property" value="low-to-high" onClick={handleAscending} />
                            <label htmlFor="low-to-high">Price, Low to High</label>
                            <br />
                            <input type="radio" id="high-to-low" name="sort_property" value="high-to-low" onClick={handleDescending} />
                            <label htmlFor="high-to-low">Price, High to Low</label>


                        </li>
                        <li></li>
                    </ul>
                </div>
                {/* grid section */}
                <div className="basis-3/4 grow grid grid-cols-4 gap-4 border-black">
                    {ascendingPrice === false && descendingPrice === false ? <Product /> : null}
                    {ascendingPrice ? <Product sortingProperty={"PriceAscending"} /> : null}
                    {descendingPrice ? <Product sortingProperty={"PriceDescending"} /> : null}
                </div>
            </div>

        </div>
    )
}

