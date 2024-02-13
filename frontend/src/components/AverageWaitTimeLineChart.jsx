import React, { useRef, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as d3 from 'd3';

const AverageWaitTimeLineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const chartContainer = d3.select(chartRef.current);

    const xScale = d3.scaleBand()
      .domain(data.map(entry => entry.department))
      .range([0, 600])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, entry => entry.average_wait_time)])
      .range([300, 0]);

    const line = d3.line()
      .x(entry => xScale(entry.department) + xScale.bandwidth() / 2)
      .y(entry => yScale(entry.average_wait_time));

    chartContainer.selectAll('path.line')
      .data([data])
      .join('path')
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke', '#1f77b4') // Darker Blue color
      .attr('stroke-width', 2) // Thicker line
      .attr('d', line);
  }, [data]);

  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="department" />
        <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_wait_time" stroke="#F900BF" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default AverageWaitTimeLineChart;
