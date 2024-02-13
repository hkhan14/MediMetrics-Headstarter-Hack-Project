import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const FacilityRatingRadarChart = ({ data }) => {
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="department" />
      <PolarRadiusAxis angle={30} domain={[0, 5]} />
      <Radar name="Cleanliness" dataKey="facility_rating.cleanliness" stroke="#523f93" fill="#F900BF" fillOpacity={2.5} />
      <Radar name="Comfort" dataKey="facility_rating.comfort" stroke="#497e4e" fill="#4700D8" fillOpacity={0.6} />
      <Tooltip />
    </RadarChart>
  );
};

export default FacilityRatingRadarChart;

