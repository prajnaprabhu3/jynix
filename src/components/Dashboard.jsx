import React from 'react';
import styled from "styled-components";
import Analytics from './Analytics';
import Navbar from './Navbar';
import Profile from './Profile';
import Transfers from './Transfers';
import Earnings from './Earnings';
import { Chart } from './Chart';

function Dashboard() {
    return (
        <Section>
            <Navbar />
            <div className="grid">
                <div className="row1">
                    <Analytics />
                    <Chart />
                </div>
                <div className="row2">
                    <Earnings />
                    <Transfers />
                    <Profile></Profile>
                </div>
            </div>
        </Section >
    )
}

export default Dashboard

const Section = styled.section`
margin-left:18vw;
padding:2rem;
height:100%`;

