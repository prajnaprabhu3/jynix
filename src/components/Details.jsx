import React from 'react'
import Members from './Members'
import { cardStyle4 } from './Reusable4';
import styled from 'styled-components';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';


function Details() {
    const { data, loading, error } = Members("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f756d325-87d9-4f74-9b16-73aa7e3a63ba/teams.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220102T160516Z&X-Amz-Expires=86400&X-Amz-Signature=40a5a1720fc0439e9d955b411977abb25114c805d6b5b92ee0e32fb0c48c7cd1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22teams.json%22&x-id=GetObject");
    if (loading) return <h1>Loading...</h1>
    if (error) console.log(error);


    return (
        <div>
            <Section>
                {/* <div>                <h4 className='heading'>Team Members</h4> */}
                {/* </div> */}
                <div className="members">
                    {/* One  */}
                    <div className="one">
                        <div className="image">
                            <img src={one} alt="" />
                        </div>

                        <div className="name">
                            <h4>   {data?.team[0].name}  </h4>
                            <p>    {data?.team[0].designation}  </p>
                        </div>

                        <div className="rating">
                            <h3>   {data?.team[0].performance}  </h3>
                        </div>

                    </div>


                    {/* One ends  */}


                    {/* Two starts  */}
                    <div className="two">
                        <div className="image">
                            <img src={two} alt="" />
                        </div>

                        <div className="name">
                            <h4>   {data?.team[1].name}  </h4>
                            <p>    {data?.team[1].designation}  </p>
                        </div>

                        <div className="rating">
                            <h3>   {data?.team[1].performance}  </h3>
                        </div>

                    </div>
                    {/* Two ends  */}



                    {/* Three starts  */}
                    <div className="three">
                        <div className="image">
                            <img src={three} alt="" />
                        </div>

                        <div className="name">
                            <h4>   {data?.team[2].name}  </h4>
                            <p>    {data?.team[2].designation}  </p>
                        </div>

                        <div className="rating">
                            <h3>   {data?.team[2].performance}  </h3>
                        </div>

                    </div>
                    {/* Three ends  */}



                    {/* Four starts  */}
                    <div className="four">
                        <div className="image">
                            <img src={four} alt="" />
                        </div>

                        <div className="name">
                            <h4>   {data?.team[3].name}  </h4>
                            <p>    {data?.team[3].designation}  </p>
                        </div>

                        <div className="rating">
                            <h3>   {data?.team[3].performance}  </h3>
                        </div>
                    </div>
                    {/* Four ends  */}


                </div>
            </Section>
        </div>
    )
}

export default Details




const Section = styled.section`
display: grid;
grid-template-columns: repeat(2,1fr);
// gap: 13rem;
// padding: 5rem, 4rem, 3rem, 3rem;

// .bar{
// ${cardStyle4}:
// padding: 11rem;
// display:flex;
// flex-direction:column;
// }
`;





