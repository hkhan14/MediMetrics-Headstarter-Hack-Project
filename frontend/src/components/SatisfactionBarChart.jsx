import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SatisfactionBarChart = ({ data }) => {
  return (
    <div className="flex justify-center items-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="satisfactionPercentage" fill="#4700D8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SatisfactionBarChart;