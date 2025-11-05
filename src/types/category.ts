export type MainCategory = 'collaboration' | 'interview';
export type CollaborationSubCategory = 'frontend' | 'backend' | 'nondev';
export type InterviewSubCategory = 'personality' | 'frontend-tech' | 'backend-tech';

export interface CategoryItem {
  id: string;
  isWide: boolean;
  bgColor: string;
  icon: React.ReactNode;
  text: string;
}
