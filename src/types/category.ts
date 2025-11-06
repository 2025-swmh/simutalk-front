export type MainCategory = 'collaboration' | 'interview';
export type CollaborationSubCategory = 'frontend' | 'backend' | 'nondev';
export type InterviewSubCategory = 'personality' | 'tech';
export type TechInterviewSubCategory = 'frontend' | 'backend' | 'design' | 'planning';

export interface CategoryItem {
  id: string;
  bgColor: string;
  icon: React.ReactNode;
  text: string;
}
