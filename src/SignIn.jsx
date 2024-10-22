import react from 'react';
import Navbar from './NavBar';

const SignIn = () => {
    return(
        <div>
            <Navbar />
            <div style={pageStyle}>
                <h1>Sign In</h1>
                <p>Sign in to access your account.</p>
            </div>
        </div>
    );
};

const pageStyle = {
    padding: "20px",
    minHeight: "200vh",
    backgroundColor: "#DADED4",
    color: "#39603D",
};

export default SignIn;