import React from 'react';
import Header from './Header/Header';
import About from './Main/About/About';
import Staffs from './Main/Staffs/Staffs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Staffs></Staffs>
            <About></About>
        </div>
    );
};

export default Home;