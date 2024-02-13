import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MultipleYAxesScatterChart = ({ data }) => {
  return (
    <ScatterChart
      width={600}
      height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <CartesianGrid />
      <XAxis type="category" dataKey="department" name="Department" />
      <YAxis type="number" dataKey="facility_rating.cleanliness" name="Cleanliness" unit="/5" yAxisId="left" />
      <YAxis type="number" dataKey="facility_rating.comfort" name="Comfort" unit="/5" orientation="right" yAxisId="right" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name="Cleanliness" data={data} fill="#5a5099" yAxisId="left" />
      <Scatter name="Comfort" data={data} fill="#6eaf7b" yAxisId="right" />
    </ScatterChart>
  );
};

export default MultipleYAxesScatterChart;
