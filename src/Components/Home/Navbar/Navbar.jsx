
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="px-10">
            <div className="navbar">
                <div className="flex-1 px-10">
                    <img className="w-52 h-15" src="https://i.ibb.co/GvYmgDH/Logo.png" alt="" />
                </div>
                <div className="flex-none px-20">
                    <ul className="menu gap-10 text-xl font-bold menu-horizontal px-1">

                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 text-xl font-bold underline" : ""
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/domain"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 text-xl font-bold underline" : ""
                            }
                        >
                            Domain
                        </NavLink>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 text-xl font-bold underline" : ""
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