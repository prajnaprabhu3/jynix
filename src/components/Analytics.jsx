import React from 'react';
import { cardStyle } from './ReusableStyles';
import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css'; 


const percentage1 = 50;
const percentage2 = 25;
const percentage3 = 59;
const percentage4 = 75;


function Analytics() {



    return (
        <Section>
            <div className="analytics">
                <div className="hover">
                    <div className="firstRow">
                        <div> <h4>Works</h4> </div>
                        <div> <BiDotsVerticalRounded /></div>
                    </div>
                    <div className="secondRow">
                        <div className="ring" style={{ width: '4rem', height: '4rem' }}>
                            <CircularProgressbar
                                value={percentage1}
                                text={`${percentage1}%`}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.5,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',

                                    // Text size
                                    textSize: '22px',


                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.7,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `rgba( 255, 211,57)`,
                                    textColor: ' #FFD339',
                                    trailColor: 'rgba(31,33,39,0.06)',
                                    backgroundColor: '#3e98c7',



                                })}
                            />
                        </div>

                        <div><h2>75</h2>
                            <p>Works Today</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="analytics">
                <div className="hover">
                    <div className="firstRow">
                        <div> <h4>Analytics</h4> </div>
                        <div> <BiDotsVerticalRounded /></div>
                    </div>
                    <div className="secondRow">
                        <div className="ring" style={{ width: '4rem', height: '4rem' }}>
                            <CircularProgressbar
                                value={percentage2}
                                text={`${percentage2}%`}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.75,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',

                                    // Text size
                                    textSize: '20px',


                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `rgba(255, 109, 57)`,
                                    textColor: '#FF6D39',
                                    trailColor: 'rgba(31,33,39,0.06)',
                                    backgroundColor: '#3e98c7',

                                    width: '20',
                                    height: '20',
                                    // font: '20px'

                                })}
                            />
                        </div>

                        <div><h2>310</h2>
                            <p>Analytics Today</p></div>
                    </div>
                </div>
            </div>




            <div className="analytics">
                <div className="hover">
                    <div className="firstRow">
                        <div> <h4>Statistics</h4> </div>
                        <div> <BiDotsVerticalRounded /></div>
                    </div>
                    <div className="secondRow">
                        <div className="ring" style={{ width: '4rem', height: '4rem' }}>
                            <CircularProgressbar
                                value={percentage3}
                                text={`${percentage3}%`}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.4,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',

                                    // Text size
                                    textSize: '20px',


                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `rgba(149, 57, 255 )`,
                                    textColor: '#9539FF',
                                    trailColor: 'rgba(31,33,39,0.06)',
                                    backgroundColor: '#3e98c7',

                                    width: '20',
                                    height: '20',
                                    // font: '20px'

                                })}
                            />
                        </div>

                        <div><h2>75</h2>
                            <p>Works Today</p></div>
                    </div>
                </div>
            </div>



            <div className="analytics">
                <div className="hover">
                    <div className="firstRow">
                        <div> <h4>Tasks</h4> </div>
                        <div> <BiDotsVerticalRounded /></div>
                    </div>
                    <div className="secondRow">
                        <div className="ring" style={{ width: '4rem', height: '4rem' }}>
                            <CircularProgressbar
                                value={percentage4}
                                text={`${percentage4}%`}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',

                                    // Text size
                                    textSize: '20px',


                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 1,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `rgba(57, 84, 255)`,
                                    textColor: '#3954FF',
                                    trailColor: 'rgba(31,33,39,0.06)',
                                    backgroundColor: '#3e98c7',

                                    width: '20',
                                    height: '20',
                                    // font: '20px'

                                })}
                            />
                        </div>

                        <div><h2>15</h2>
                            <p>Task Today</p></div>
                    </div>
                </div>
            </div>


        </Section >
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
