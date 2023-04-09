import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loader=useLoaderData();
    console.log(loader);
    return (
        <div>
            <h1>Home page</h1>
        </div>
    );
};

export default Home;