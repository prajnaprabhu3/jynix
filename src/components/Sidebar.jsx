import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import scrollreveal from "scrollreveal";
import home from '../images/home.png';
import team from '../images/team.png';
import task from '../images/task.png';
import calender from '../images/calender.png';
import report from '../images/report.png';
import setting from '../images/setting.png';
import { FiLogOut } from "react-icons/fi";
import { AiOutlineHome, }

// Css file 
import '../index.css';




function Sidebar() {
    const [presentLink, setPresentLink] = useState(1);
    return (
        <>
            <Container>
                <div className="top">
                    <div className="brand">
                        <h2>B .</h2>
                    </div>

                    <div className="toggle"></div>

                    <div className="links">
                        <ul>
                            <li onClick={() => setPresentLink(1)} className={presentLink === 1 ? "active" : ""}>
                                <a href="#"> <img src={home} alt="" /> <span>Home</span>  </a>
                            </li>
                            <li onClick={() => setPresentLink(2)} className={presentLink === 2 ? "active" : ""}>
                                <a href="#"> <img src={team} alt="" /> <span>Team</span>  </a>
                            </li>
                            <li onClick={() => setPresentLink(3)} className={presentLink === 3 ? "active" : ""}>
                                <a href="#"> <img src={task} alt="" /> <span>Task</span>  </a>
                            </li>
                            <li onClick={() => setPresentLink(4)} className={presentLink === 4 ? "active" : ""}>
                                <a href="#"> <img src={calender} alt="" /> <span>Calen</span>  </a>
                            </li>
                            <li onClick={() => setPresentLink(5)} className={presentLink === 5 ? "active" : ""}>
                                <a href="#"> <img src={report} alt="" /> <span>Report</span>  </a>
                            </li>
                            <li onClick={() => setPresentLink(6)} className={presentLink === 6 ? "active" : ""}>
                                <a href="#"> <img src={setting} alt="" /> <span>Setting</span>  </a>
                            </li>
                        </ul>
                    </div>
                </div>



                <div className="logout">
                    <a href="#"><FiLogOut /> <span class="logout"> Logout</span>  </a>
                </div>
            </Container>
        </>
    )
}

export default Sidebar


const Container = styled.section`
position:fixed;
background-color: #F7F9FD;;
height:100vh;
width: 18vw;
display: flex;
flex-direction:column;
align-items:center;
justify-content: space-between;
padding:2rem 0;
`;



