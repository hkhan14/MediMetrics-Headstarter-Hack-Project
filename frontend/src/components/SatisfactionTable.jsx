import React from 'react';

const SatisfactionTable = ({ data }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Department
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Patient Count
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {row.department}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {row.patient_count}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SatisfactionTable;
