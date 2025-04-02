"use client";

import { useState } from "react";

type ComparisonTableProps = {
  headers: string[];
  rows: {
    name: string;
    values: (string | number | JSX.Element)[];
  }[];
  highlightIndex?: number;
};

export default function ComparisonTable({ headers, rows, highlightIndex }: ComparisonTableProps) {
  const [sortColumn, setSortColumn] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (columnIndex: number) => {
    if (sortColumn === columnIndex) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnIndex);
      setSortDirection('asc');
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (sortColumn === null) return 0;
    
    const aValue = a.values[sortColumn];
    const bValue = b.values[sortColumn];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    const aString = String(aValue);
    const bString = String(bValue);
    
    return sortDirection === 'asc' 
      ? aString.localeCompare(bString)
      : bString.localeCompare(aString);
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-indigo-100 text-left p-3 border border-gray-300">
              Solution
            </th>
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="bg-indigo-100 text-left p-3 border border-gray-300 cursor-pointer hover:bg-indigo-200"
                onClick={() => handleSort(index)}
              >
                <div className="flex items-center">
                  {header}
                  {sortColumn === index && (
                    <svg 
                      className={`ml-1 w-4 h-4 ${sortDirection === 'desc' ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className={`${rowIndex === highlightIndex ? 'bg-indigo-50' : rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-indigo-50`}
            >
              <td className="p-3 border border-gray-300 font-medium">{row.name}</td>
              {row.values.map((value, valueIndex) => (
                <td key={valueIndex} className="p-3 border border-gray-300">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
