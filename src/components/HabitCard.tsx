import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface HabitCardProps {
  habit: {
    name: string;
    streak: number;
    completed: boolean;
    time: string;
  };
}

export function HabitCard({ habit }: HabitCardProps) {
  return (
    <div className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-[#151515] hover:bg-[#1A1A1A] transition-colors">
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <button className="flex-shrink-0 text-gray-400 hover:text-indigo-400 transition-colors">
          {habit.completed ? (
            <CheckCircle2 className="w-5 h-5 text-indigo-400" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>
        <div className="min-w-0">
          <h3 className="font-medium truncate">{habit.name}</h3>
          <p className="text-sm text-gray-400">{habit.time}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
        <div className="text-sm hidden sm:block">
          <span className="text-orange-400">{habit.streak}</span>
          <span className="text-gray-400 ml-1">day streak</span>
        </div>
        <div className="w-16 sm:w-24 h-1 rounded-full bg-[#2A2A2A]">
          <div
            className="h-full rounded-full bg-indigo-500"
            style={{ width: `${(habit.streak / 30) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}