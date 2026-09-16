export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  topics: string[];
  keyFormulas: string[];
  experimentCount: number;
  progressPercentage: number;
  color: string;
}

export interface Experiment {
  id: string;
  name: string;
  chapter: string;
  icon: string;
  tag: string;
  description: string;
  interactiveType: 'ray-mirror' | 'lens' | 'ohms-law' | 'circuit' | 'magnetic-field' | 'motor' | 'prism';
  keyVariables: string[];
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface QuestionSample {
  id: string;
  category: string;
  marks: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
  question: string;
  options?: string[];
  correctOptionIndex?: number;
  explanation: string;
  markingBreakdown: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'student' | 'ai';
  text: string;
  formulaHighlight?: string;
  stepByStep?: string[];
  timestamp?: string;
}

export type ThemeMode = 'dark' | 'light';
