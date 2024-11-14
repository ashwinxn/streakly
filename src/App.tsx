import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { HabitDashboard } from './components/HabitDashboard';
import { Menu } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center px-4 h-16 border-b border-[#1F1F1F] lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-[#1F1F1F] rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </header>
        
        <main className="flex-1 overflow-auto">
          <HabitDashboard />
        </main>
      </div>
    </div>
  );
}

export default App;