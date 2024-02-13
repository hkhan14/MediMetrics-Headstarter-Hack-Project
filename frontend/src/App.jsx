import React, { useState } from 'react';
import Header from './components/Header';
import SatisfactionBarChart from './components/SatisfactionBarChart';
import SatisfactionTable from './components/SatisfactionTable';
import AverageWaitTimeLineChart from './components/AverageWaitTimeLineChart';
import GenderRatioStackedBarChart from './components/GenderRatioStackedBarChart';
import FacilityRatingRadarChart from './components/FacilityRatingRadarChart';
import TreatmentEfficacyPieChart from './components/TreatmentEfficacyPieChart';
import MultipleYAxesScatterChart from './components/MultipleYAxesScatterChart';
import patientData from './data/data.json'; // Update the path as per your project structure

function App() {

  const [selectedHospital, setSelectedHospital] = useState('All');
  const [filteredData, setFilteredData] = useState(patientData);

  const handleHospitalChange = (e) => {
    const hospital = e.target.value;
    setSelectedHospital(hospital);
    setFilteredData(hospital === 'All' ? patientData : patientData.filter(item => item.hospital === hospital));
  };


  const satisfactionData = filteredData.map(dept => {
    const totalResponses = dept.patient_satisfaction.excellent + dept.patient_satisfaction.good + dept.patient_satisfaction.average + dept.patient_satisfaction.poor;
    const satisfactionScore = (dept.patient_satisfaction.excellent * 4 + dept.patient_satisfaction.good * 3 + dept.patient_satisfaction.average * 2 + dept.patient_satisfaction.poor * 1) / (totalResponses * 4);
    const satisfactionPercentage = Math.round(satisfactionScore * 100); // Round off the percentage

    return {
      ...dept,
      satisfactionPercentage: satisfactionPercentage
    };
  });
  return (
    <div className="App bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">

        <div className="mb-8">
          <label htmlFor="hospital-select" className="block mb-2 text-lg font-medium text-gray-700">Select Hospital:</label>
          <select id="hospital-select" onChange={handleHospitalChange} value={selectedHospital} className="p-2 rounded border border-blue-400 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option value="Blue Ridge Medical Center">Blue Ridge Medical Center</option>
            <option value="Evergreen Hospital">Evergreen Hospital</option>
            <option value="Lakeside Mercy Medical Center">Lakeside Mercy Medical Center</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         
        <div className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#001325' }}>Average Wait Time by Department</h3>
            <AverageWaitTimeLineChart data={filteredData} />
          </div>
          <div className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#001325' }}>Gender Ratio in Departments</h3>
            <GenderRatioStackedBarChart data={filteredData} />
          </div>

          <div className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#001325' }}>Patient Satisfaction Overview</h3>
            <SatisfactionBarChart data={satisfactionData} />
          </div>
          <div className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#001325' }}>Patient Count</h3>
            <SatisfactionTable data={satisfactionData} />
          </div>
          <div className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#001325' }}>Facility Ratings (Cleanliness & Comfort)</h3>
            <FacilityRatingRadarChart data={filteredData} />
          </div>

          <div className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#001325' }}>Treatment Efficacy</h3>
            <TreatmentEfficacyPieChart data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


