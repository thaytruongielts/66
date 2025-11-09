
import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { Exercise } from './components/Exercise';
import { grammarData } from './data/grammarData';
import type { Topic } from './types';
import { BookOpenIcon } from './components/icons/BookOpenIcon';

type ViewMode = 'theory' | 'exercise';

export default function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('unit-1-present-simple');
  const [viewMode, setViewMode] = useState<ViewMode>('theory');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const selectedTopic = useMemo((): Topic | null => {
    for (const unit of grammarData) {
      const foundTopic = unit.topics.find(topic => topic.id === selectedTopicId);
      if (foundTopic) {
        return foundTopic;
      }
    }
    return null;
  }, [selectedTopicId]);

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopicId(topicId);
    setViewMode('theory');
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };
  
  return (
    <div className="min-h-screen flex flex-col text-slate-800 dark:text-slate-200">
      <header className="bg-white dark:bg-slate-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center space-x-3">
          <BookOpenIcon className="h-8 w-8 text-blue-500" />
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            English Grammar Grade 6
          </h1>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
          aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div className="flex flex-1">
        <aside className={`fixed lg:relative lg:translate-x-0 inset-y-0 left-0 z-30 w-72 bg-white dark:bg-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
           <div className="h-full overflow-y-auto">
             <div className="p-4 lg:hidden flex justify-end">
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
             </div>
             <Sidebar
                selectedTopicId={selectedTopicId}
                onTopicSelect={handleTopicSelect}
              />
           </div>
        </aside>
        
        {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/30 z-20 lg:hidden"></div>}

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {selectedTopic ? (
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{selectedTopic.title}</h2>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                  <button
                    onClick={() => setViewMode('theory')}
                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${viewMode === 'theory' ? 'bg-blue-500 text-white' : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'}`}
                  >
                    Theory
                  </button>
                  <button
                    onClick={() => setViewMode('exercise')}
                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${viewMode === 'exercise' ? 'bg-blue-500 text-white' : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'}`}
                  >
                    Exercise
                  </button>
                </div>
              </div>
              
              {viewMode === 'theory' ? (
                <ContentDisplay topic={selectedTopic} />
              ) : (
                <Exercise key={selectedTopic.id} topic={selectedTopic} />
              )}
            </div>
          ) : (
            <div className="text-center p-10">
              <p>Please select a topic to start learning.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
