import React, { useState } from 'react';
import { Plus, Trophy, TrendingUp, CheckCircle2 } from 'lucide-react';
import { HabitCard } from './HabitCard';
import { ProgressChart } from './ProgressChart';
import { AddHabitModal } from './AddHabitModal';

interface Habit {
  id: number;
  name: string;
  streak: number;
  completed: boolean;
  time: string;
}

export function HabitDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: 'Morning Meditation', streak: 7, completed: true, time: '7:00 AM' },
    { id: 2, name: 'Read 30 Minutes', streak: 12, completed: true, time: '8:30 AM' },
    { id: 3, name: 'Exercise', streak: 5, completed: false, time: '6:00 PM' },
    { id: 4, name: 'Code Practice', streak: 15, completed: false, time: '7:30 PM' },
  ]);

  const handleAddHabit = (newHabit: { name: string; time: string }) => {
    setHabits(prev => [
      ...prev,
      {
        id: Math.max(0, ...prev.map(h => h.id)) + 1,
        name: newHabit.name,
        time: newHabit.time,
        streak: 0,
        completed: false,
      }
    ]);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-8">
        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Welcome back, Mehul</h1>
          <p className="text-gray-400 text-sm md:text-base">Track your progress and build lasting habits</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Habit</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 lg:mb-8">
        {[
          { icon: Trophy, label: 'Achievement Score', value: '2,450', change: '+125 this week' },
          { icon: TrendingUp, label: 'Completion Rate', value: '87%', change: '+5% from last week' },
          { icon: CheckCircle2, label: 'Total Habits', value: habits.length.toString(), change: `${habits.filter(h => h.completed).length} completed today` },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#1F1F1F] rounded-xl p-4 md:p-6">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <stat.icon className="w-5 h-5 text-indigo-400" />
              <span className="text-gray-400 text-sm">{stat.label}</span>
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        <div className="lg:col-span-8">
          <div className="bg-[#1F1F1F] rounded-xl p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Today's Habits</h2>
            <div className="space-y-3 md:space-y-4">
              {habits.map((habit) => (
                <HabitCard key={habit.id} habit={habit} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="bg-[#1F1F1F] rounded-xl p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Weekly Progress</h2>
            <ProgressChart />
          </div>
        </div>
      </div>

      <AddHabitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddHabit}
      />
    </div>
  );
}