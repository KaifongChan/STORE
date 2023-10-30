export default function Card({ image, name, price }) {
    return (
        <div className="">
            <img src={image} alt="" />
            <p className="pl-5">{name}</p>
            <p className="pl-5">${price}</p>
        </div>
    )
}