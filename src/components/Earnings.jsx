import React from 'react';
import { Line } from 'react-chartjs-2';
import { cardStyle3 } from './Reusabble2';
import styled from 'styled-components';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Team Activities',
        },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Recieved',
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            data: [100, 110, 130, 112, 80, 110],
            borderColor: 'rgb(57, 84, 255,1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        // {
        //     label: 'Dataset 2',
        //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        //     borderColor: 'rgb(53, 162, 235)',
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
    ],
};

export function Earnings() {
    return (
        <Section>
            <Line options={options} data={data} />
        </Section>
    );
}




const Section = styled.section`
display: grid;
grid-template-columns: repeat(2,1fr);
// gap: 13rem;
// padding: 5rem, 4rem, 3rem, 3rem;

// .bar{
// ${cardStyle3}:
// padding: 11rem;
// display:flex;
// flex-direction:column;
// }
`;