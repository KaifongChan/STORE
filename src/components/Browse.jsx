o, o; p.;; p.lplooooexport default function Product({ sortingProperty }) {
    let database = [
        {
            name: "BLACK SHIRT",
            image: "https://madainchina.com/cdn/shop/products/concept-graphic-hoodie-roaringwild-794145_540x.jpg?v=1688148662",
            price: 150,
        },
        {
            name: "BLACK SWEATER",
            image: "https://madainchina.com/cdn/shop/products/jacquard-pattern-sweater-roaringwild-166087_540x.jpg?v=1688495867",
            price: 190,
        },
        {
            name: "BEIGE SHIRT",
            image: "https://madainchina.com/cdn/shop/products/beige-folded-collar-shirt-elywood-401327_540x.jpg?v=1687978104",
            price: 290,
        },
        {
            name: "WHITE DRESS",
            image: "https://madainchina.com/cdn/shop/products/white-lace-layers-skirt-elywood-797340_540x.jpg?v=1688064292",
            price: 460,
        }
    ]

    if (sortingProperty === "PriceAscending") {
        const PriceAscending = [...database].sort((a, b) => a.price - b.price);;;;/////////////.................. , l.'/;;;;;;;>p,,,,,,,,,,,
    }
    return (
        <>
            {
                database.map((product, i) => {
                    return <div key={i}>
                        <img src={product.image} alt="" />
                        <p className="text-xs">{product.name}</p>
                        <p className="text-xs">${product.price}</p>
                    </div>
                })
            }
        </>
    )
}


// const numAscending = [...employees].sort((a, b) => a.id - b.id);
// console.log(numAscending);

// // ------------------------------------------------

// // 👇️ sort by Numeric property DESCENDING (100 - 1)
// const numDescending = [...employees].sort((a, b) => b.id - a.id);
// console.log(numDescending);

