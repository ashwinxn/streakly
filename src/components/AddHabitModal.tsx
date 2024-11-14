import React, { useState } from 'react';
import { X, Clock } from 'lucide-react';

interface AddHabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (habit: { name: string; time: string }) => void;
}

export function AddHabitModal({ isOpen, onClose, onAdd }: AddHabitModalProps) {
  const [habitName, setHabitName] = useState('');
  const [habitTime, setHabitTime] = useState('09:00');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (habitName.trim()) {
      const formattedTime = new Date(`2000/01/01 ${habitTime}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      onAdd({ name: habitName.trim(), time: formattedTime });
      setHabitName('');
      setHabitTime('09:00');
      onClose();
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-[#1F1F1F] rounded-xl w-full max-w-md">
          <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
            <h2 className="text-lg font-semibold">Add New Habit</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <label htmlFor="habitName" className="block text-sm text-gray-400 mb-2">
                Habit Name
              </label>
              <input
                id="habitName"
                type="text"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="e.g., Morning Meditation"
                autoFocus
              />
            </div>

            <div>
              <label htmlFor="habitTime" className="block text-sm text-gray-400 mb-2">
                Reminder Time
              </label>
              <div className="relative">
                <input
                  id="habitTime"
                  type="time"
                  value={habitTime}
                  onChange={(e) => setHabitTime(e.target.value)}
                  className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-3 py-2 pl-10 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 rounded-lg border border-[#3A3A3A] hover:bg-[#2A2A2A] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors"
              >
                Add Habit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}