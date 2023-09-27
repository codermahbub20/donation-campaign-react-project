import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div className="hero w-full min-h-screen" style={{ backgroundImage: 'url(https://webartdevelopers.com/blog/wp-content/uploads/2018/09/404-SVG-Animated-Page-Concept.png)' }}>
            <div>
            <div className="hero-content  text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-black">Page Not Found</h1>
                    <p className="mb-5 text-xl text-black">This Is A Error Message.</p>
                   <Link to="/"> <button className="btn btn-primary">Go Back Home</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;