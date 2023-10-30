import { Link } from "react-router-dom"

export default function Home({ loggedIn }) {
    return (
        <div className="flex flex-row justify-center p-5 gap-5">
            <Link to="/">Home</Link>
            <Link to="/browse">Browse</Link>
            <Link to="/signup">Log In</Link>
            <p>{loggedIn ? "True" : "False"}</p>
        </div>
    )
}