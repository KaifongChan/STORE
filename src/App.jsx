import { useState } from "react"
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import { Link } from "react-router-dom";
import Card from "./components/Card";
import blackjumper from "./assets/black-jumper.webp"
import whitedress from "./assets/white-dress.webp"
import CardGenerator from "./components/CardGenerator";

{/* <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
            <h3 class="text-xl text-white font-bold"></h3> */}


function App() {

  return (
    <div className="h-screen">
      {/* Header/navbar section */}
      <div className="flex flex-row justify-center pt-5 gap-5 text-1xl font-semibold">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/signup">Log In</Link>
      </div>
      {/* Hero section */}
      <div className="">
        <div>
          <img src="src\assets\hero.jpg" alt="shoes" className="object-cover h-96 w-screen p-8" />
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2 grow flex flex-row justify-center">
            <img src="src\assets\ice.webp" alt="" />
          </div>
          <div className="basis-1/2 grow flex flex-row justify-center">
            <img src="src\assets\ther.webp" alt="" />
          </div>
        </div>
        <div className="flex flex-row pb-10">
          {/* <Card image={blackjumper} name={"BLACK JUMPER"} price={480} />
          <Card image={whitedress} name={"WHITE DRESS"} price={250} /> */}
          <CardGenerator />
        </div>
      </div>
      {/* Footer section */}
      {/* <div>
        <h3>Contact</h3>
      </div> */}
    </div>
  )
}

export default App
