import React from 'react';
import Header from './Header/Header';
import About from './Main/About/About';
import Staffs from './Main/Staffs/Staffs';
import Classes from './Main/Classes/Classes';
import Client from './Main/Client/Client';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Staffs></Staffs>
            <About></About>
            <Classes></Classes>
            <Client></Client>
        </div>
    );
};

export default Home;