import React from 'react';

export function ProgressChart() {
  const data = [65, 80, 45, 90, 75, 85, 70];
  const maxValue = Math.max(...data);

  return (
    <div className="h-36 sm:h-48 flex items-end gap-1 sm:gap-2">
      {data.map((value, index) => (
        <div key={index} className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full bg-[#2A2A2A] rounded-sm" style={{ height: `${(value / maxValue) * 100}%` }}>
            <div
              className="w-full bg-indigo-500 rounded-sm transition-all duration-500"
              style={{ height: `${value}%` }}
            />
          </div>
          <span className="text-xs text-gray-400">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
          </span>
        </div>
      ))}
    </div>
  );
}