import { Link } from "react-router-dom";
function NavBar(){
    return (
        <div className="flex flex-grow justify-between items-center bg-gray-700 shadow-2xl text-white">

            <img src="/images/logo.png" alt="logo" className="ml-20 h-[50px] w-[70px]"/>
            <nav className="flex gap-[24px] p-3 mr-15">
                <Link to="/" >Home</Link>
                <Link to="/favorites">Favorites</Link>
              
            </nav>

        </div>
    )
}

export default NavBar;