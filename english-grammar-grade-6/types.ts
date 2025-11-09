
export interface ExerciseQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'structure' | 'example' | 'table' | 'note' | 'list';
  data: any;
}

export interface Topic {
  id: string;
  title: string;
  content: ContentBlock[];
  exercises: ExerciseQuestion[];
}

export interface Unit {
  unitNumber: number;
  title: string;
  topics: Topic[];
}
