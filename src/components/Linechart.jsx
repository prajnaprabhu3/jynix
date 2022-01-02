import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Linechart() {
    const data = [
        {
            month: 'Jan',
            value: 4000,

        },
        {
            month: 'Feb',
            value: 4000,

        },
        {
            month: 'Mar',
            value: 4000,

        },
        {
            month: 'Apr',
            value: 4000,

        },
        {
            month: 'Maya',
            value: 4000,

        },
        {
            month: 'June',
            value: 4000,

        },

    ];





    return (
        <div>
            <ResponsiveContainer width="100%" aspect={4 / 1} >
                <LineChart daya={data}>
                    <XAxis dataKey="month" stroke="#5550bd" />
                    <Line type="monotone" dataKey="value" stroke="#5550bd" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Linechart
