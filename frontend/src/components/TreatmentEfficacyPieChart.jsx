import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';

const TreatmentEfficacyPieChart = ({ data }) => {
  const efficacyData = [
    { name: 'Effective', value: data.reduce((acc, curr) => acc + curr.treatment_efficacy.effective, 0) },
    { name: 'Moderately Effective', value: data.reduce((acc, curr) => acc + curr.treatment_efficacy.moderately_effective, 0) },
    { name: 'Ineffective', value: data.reduce((acc, curr) => acc + curr.treatment_efficacy.ineffective, 0) },
  ];

  const COLORS = ['#4700D8', '#9900F0', '#F900BF'];

  return (
    <div className="flex justify-center items-center">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={efficacyData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={150}
            fill="#695fad"
            dataKey="value"
          >
            {efficacyData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TreatmentEfficacyPieChart;
