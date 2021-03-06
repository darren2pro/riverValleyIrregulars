import AllProducts from '../components/AllProducts';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const welcomeMessage =
        'Welcome to River Valley Irregulars Static E-Commerce Website!';

    return (
        <>
            <h3>{welcomeMessage}</h3>
            <br />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(50)
                        .pauseFor(1500)
                        .typeString('Redux is used for state management. Try adding a few products then view the cart.')
                        .start();
                }}
            />
            <AllProducts />
            <br />
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/cart"
            >
                View Cart
            </Button>
        </>
    );
};

export default Home;
