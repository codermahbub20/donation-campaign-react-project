import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center ">
            <div className="text-3xl">
            <h1 className="text-center">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/"><button className="btn btn-primary mt-3">Go Back</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;