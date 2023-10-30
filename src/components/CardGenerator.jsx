// import Card from "./Card"
// import whitedress from "./assets/white-dress.webp"
import beigeshirt from "../assets/beige-shirt.webp"
import blackshirt from "../assets/black-shirt.webp"
import blackjumper from "../assets/black-jumper.webp"
import whitedress from "../assets/white-dress.webp"
import { useState } from "react"

export default function CardGenerator() {

    let data = [
        {
            brand: "ELYWOOD",
            name: "BEIGE SHIRT",
            price: 280,
            image: beigeshirt,
            secondaryImage: whitedress,
            sale: true,
        },
        {
            brand: "ELYWOOD",
            name: "WHITE DRESS",
            price: 780,
            image: whitedress,
            secondaryImage: blackshirt,
            sale: false,
        },
        {
            brand: "ROARINGWILD",
            name: "BLACK SHIRT",
            price: 590,
            image: blackshirt,
            secondaryImage: blackjumper,
            sale: false,
        },
        {
            brand: "ROARINGWILD",
            name: "BLACK JUMPER",
            price: 350,
            // image: "../assets/black-jumper.webp"
            image: blackjumper,
            secondaryImage: blackshirt,
            sale: true,
        }
    ]

    return (
        <div>
            <ul className="flex flex-row">
                {data.map((product, i) => {
                    return <Card key={i} name={product.name} brand={product.brand} price={product.price} image={product.image} sale={product.sale} secondaryImage={product.secondaryImage} />
                })}
            </ul>
        </div >
    )


}

function Card({ image, name, price, brand, sale, secondaryImage }) {
    const [picture, setPicture] = useState(image);

    const changeSecondaryImage = (evt) => {
        setPicture(secondaryImage);
        console.log("MOUSEOVER");
    }

    const changePrimaryImage = (evt) => {
        setPicture(image);
    }

    return (
        <div className="text-xs">
            <img src={picture} alt="" onMouseOver={changeSecondaryImage} onMouseOut={changePrimaryImage} />
            <p className="pl-5">{name}</p>
            <p className="pl-5">{brand}</p>
            {sale ? <p className="pl-5"><span className="line-through">${price}</span>  ${price - 80}</p> : <p className="pl-5">${price}</p>}



            {/* {sale ? <><p className="pl-5 line-through">${price}</p> <p className="pl-5">${price - 80}</p> </> : <p className="pl-5 ">${price}</p>} */}
            {/* <p className="pl-5 line-through">${price}</p> */}
        </div>
    )
}

// function Card({ image, name, price }) {
//     return (
//         <div className="">
//             <img src={image} alt="" />
//             <p className="pl-5">{name}</p>
//             <p className="pl-5">${price}</p>
//         </div>
//     )
// }


// for (let i = 0; i < data.length; i++) {
//     <Card image={data[i].image} name={data[i].name} price={data[i].price} />
//     console.log("hello");
// }

