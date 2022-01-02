import React from 'react';
import { cardStyle2 } from './Reusable3';
import styled from 'styled-components';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
            text: 'Task Activities',
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }

    },
};


const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

export const data = {
    labels,
    datasets: [
        {
            barThickness: 6,
            label: 'Recieved',
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 130 })),
            data: [100, 110, 130, 112, 80, 110],
            backgroundColor: 'rgba(57, 84, 255, 1)',
        },
        {
            barThickness: 6,
            label: 'Completed',
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 110 })),
            data: [50, 95, 108, 100, 48, 96],
            backgroundColor: 'rgba(255, 211, 57, 1)',
        },
    ],
};



export function Chart() {
    return (
        <div className="bar">
            <Section>
                <Bar options={options} data={data} />
            </Section>
        </div>

    );

}

const Section = styled.section`
display: grid;
grid-template-columns: repeat(2,1fr);
// gap: 13rem;
// padding: 5rem, 4rem, 3rem, 3rem;

// .bar{
// ${cardStyle2}:
// padding: 11rem;
// display:flex;
// flex-direction:column;
// }
`;












