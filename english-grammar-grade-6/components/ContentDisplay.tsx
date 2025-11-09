
import React from 'react';
import type { Topic, ContentBlock } from '../types';

interface ContentDisplayProps {
  topic: Topic;
}

const renderContentBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case 'paragraph':
      return <p key={index} className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: block.data }} />;
    
    case 'structure':
      return (
        <div key={index} className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg my-4 font-mono text-sm">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Cấu trúc:</h4>
          {block.data.map((line: string, i: number) => (
            <p key={i} className="whitespace-pre-wrap">{line}</p>
          ))}
        </div>
      );
      
    case 'example':
      return (
        <blockquote key={index} className="border-l-4 border-blue-400 pl-4 my-4 italic">
          <p className="mb-1">"{block.data.en}"</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Dịch nghĩa: {block.data.vi}</p>
        </blockquote>
      );
      
    case 'table':
      return (
        <div key={index} className="overflow-x-auto my-6">
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
              <tr>
                {block.data.headers.map((header: string, i: number) => (
                  <th key={i} scope="col" className="px-6 py-3">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.data.rows.map((row: string[], i: number) => (
                <tr key={i} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                  {row.map((cell: string, j: number) => (
                    j === 0 ? 
                    <th key={j} scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">{cell}</th> :
                    <td key={j} className="px-6 py-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      
    case 'note':
       return (
        <div key={index} className="my-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 rounded-r-lg">
          <p className="font-semibold">Lưu ý:</p>
          <div className="text-sm" dangerouslySetInnerHTML={{ __html: block.data }} />
        </div>
       );

    case 'list':
        return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-4 pl-4">
                {block.data.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        );

    default:
      return null;
  }
};

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ topic }) => {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      {topic.content.map(renderContentBlock)}
    </article>
  );
};
