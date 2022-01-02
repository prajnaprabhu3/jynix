import React from 'react';
import styled from "styled-components";
import Analytics from './Analytics';
import Navbar from './Navbar';
// import Profile from './Profile';
import Transfers from './Transfers';
import { Earnings } from './Earnings';
import { Chart } from './Chart';
import Linechart from './Linechart';
import Members from './Members';
import Details from './Details';

function Dashboard() {
    const { data, loading, error } = Members("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f756d325-87d9-4f74-9b16-73aa7e3a63ba/teams.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220102T160516Z&X-Amz-Expires=86400&X-Amz-Signature=40a5a1720fc0439e9d955b411977abb25114c805d6b5b92ee0e32fb0c48c7cd1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22teams.json%22&x-id=GetObject");
    if (loading) return <h1>Loading...</h1>
    if (error) console.log(error);


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
                    {/* <h1> */}
                    {/* {data?.team[0].name} */}
                    {/* </h1> */}
                    {/* <Members /> */}
                    <Details />

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



