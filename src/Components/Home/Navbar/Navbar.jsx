
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div >
            <div className="navbar md:px-10">
                <div className="flex-1">
                    <img className="w-32 h-10 md:h-14  md:w-36 lg:w-auto" src="https://i.ibb.co/GvYmgDH/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu gap-5  lg:text-x md:text-xl  lg:font-bold menu-horizontal px-1">

                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 lg:text-xl lg:font-bold underline" : ""
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/domain"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 lg:text-xl lg:font-bold underline" : ""
                            }
                        >
                            Domain
                        </NavLink>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 lg:text-xl lg:font-bold underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;