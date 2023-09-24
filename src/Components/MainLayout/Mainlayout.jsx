import { Outlet } from "react-router-dom";


const Mainlayout = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Mainlayout;