import React from 'react';
import { cardStyle } from './ReusableStyles';
import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css'; 




function Analytics() {
    const percentage1 = 50 %;
    <CircularProgressbar value={percentage1} text={`${percentage1}%`} />;

    return (
        <Section>
            <div className="analytics">
                <div className="firstRow">
                    <div> <h4>Works</h4> </div>
                    <div> <BiDotsVerticalRounded /></div>
                </div>
                <div className="secondRow">
                    <div><h4>Ring</h4></div>
                    <div><h2>75</h2>
                        <p>Works Today</p>
                    </div>
                </div>
            </div>




            <div className="analytics">
                <div className="firstRow">
                    <div> <h4>Analytics</h4> </div>
                    <div> <BiDotsVerticalRounded /></div>
                </div>
                <div className="secondRow">
                    <div><h4>Ring</h4></div>
                    <div><h2>310</h2>
                        <p>Analytics Today</p></div>
                </div>
            </div>


            <div className="analytics">
                <div className="firstRow">
                    <div> <h4>Statistics</h4> </div>
                    <div> <BiDotsVerticalRounded /></div>
                </div>
                <div className="secondRow">
                    <div><h4>Ring</h4></div>
                    <div><h2>75</h2>
                        <p>Works Today</p></div>
                </div>
            </div>



            <div className="analytics">
                <div className="firstRow">
                    <div> <h4>Tasks</h4> </div>
                    <div> <BiDotsVerticalRounded /></div>
                </div>
                <div className="secondRow">
                    <div><h4>Ring</h4></div>
                    <div><h2>15</h2>
                        <p>Task Today</p></div>
                </div>
            </div>



        </Section>
    )
}

export default Analytics

const Section = styled.section`
display: grid;
grid-template-columns: repeat(2,1fr);
gap:1rem;

.analytics{
    ${cardStyle}:
    // padding:1rem;
    display:flex;
    flex-direction:column;
}
`;
