import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GenderRatioStackedBarChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="gender_ratio.male" stackId="a" fill="#F900BF" animationDuration={500} />
                <Bar dataKey="gender_ratio.female" stackId="a" fill="#4700D8" animationDuration={500} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default GenderRatioStackedBarChart;



