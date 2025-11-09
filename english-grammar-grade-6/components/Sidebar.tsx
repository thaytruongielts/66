
import React, { useState } from 'react';
import { grammarData } from '../data/grammarData';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface SidebarProps {
  selectedTopicId: string;
  onTopicSelect: (topicId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedTopicId, onTopicSelect }) => {
  const [openUnits, setOpenUnits] = useState<Set<number>>(() => {
    const initialUnit = grammarData.find(unit => unit.topics.some(topic => topic.id === selectedTopicId));
    return new Set(initialUnit ? [initialUnit.unitNumber] : [1]);
  });

  const toggleUnit = (unitNumber: number) => {
    setOpenUnits(prevOpenUnits => {
      const newOpenUnits = new Set(prevOpenUnits);
      if (newOpenUnits.has(unitNumber)) {
        newOpenUnits.delete(unitNumber);
      } else {
        newOpenUnits.add(unitNumber);
      }
      return newOpenUnits;
    });
  };

  return (
    <nav className="p-4">
      <ul>
        {grammarData.map(unit => (
          <li key={unit.unitNumber} className="mb-4">
            <button
              onClick={() => toggleUnit(unit.unitNumber)}
              className="w-full flex justify-between items-center text-left text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <span>Unit {unit.unitNumber}: {unit.title}</span>
              {openUnits.has(unit.unitNumber) ? <ChevronDownIcon /> : <ChevronRightIcon />}
            </button>
            {openUnits.has(unit.unitNumber) && (
              <ul className="mt-2 pl-4 border-l-2 border-slate-200 dark:border-slate-600">
                {unit.topics.map(topic => (
                  <li key={topic.id}>
                    <button
                      onClick={() => onTopicSelect(topic.id)}
                      className={`w-full text-left p-2 rounded-md my-1 transition-colors text-sm font-medium ${
                        selectedTopicId === topic.id
                          ? 'bg-blue-500 text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {topic.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
