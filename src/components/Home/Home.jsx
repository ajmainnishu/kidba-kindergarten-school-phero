import React from 'react';
import Header from './Header/Header';
import About from './Main/About/About';
import Staffs from './Main/Staffs/Staffs';
import Classes from './Main/Classes/Classes';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Staffs></Staffs>
            <About></About>
            <Classes></Classes>
        </div>
    );
};

export default Home;