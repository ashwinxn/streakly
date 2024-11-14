import React from 'react';
import { LayoutDashboard, Target, Trophy, Settings, Flame, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 w-[280px] bg-[#0A0A0A] border-r border-[#1F1F1F]
          transform transition-transform duration-200 ease-in-out z-30
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-indigo-500" />
              <span className="font-semibold text-lg">HabitForge</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#1F1F1F] rounded-lg transition-colors lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="space-y-1">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: true },
              { icon: Target, label: 'Habits' },
              { icon: Trophy, label: 'Achievements' },
              { icon: Settings, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-2 w-full px-3 py-2 rounded-md transition-colors ${
                  item.active
                    ? 'bg-indigo-500/10 text-indigo-400'
                    : 'hover:bg-[#1F1F1F]'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
          
          <div className="mt-auto">
            <div className="bg-[#1F1F1F] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">Current Streak</span>
              </div>
              <div className="text-2xl font-bold">12 Days</div>
              <div className="text-xs text-gray-400 mt-1">Personal Best: 21 days</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}