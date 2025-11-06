import type { InterviewSubCategory, MainCategory } from '../types';

export const getPageTitle = (
  showCustomForm: boolean,
  selectedCategory: MainCategory | null,
  selectedInterviewType: InterviewSubCategory | null,
): string => {
  if (showCustomForm) return '어떤 상황을 연습해 보고 싶으신가요?';
  if (!selectedCategory) return '어떤 카테고리를 선택하실 건가요?';
  if (selectedCategory === 'collaboration') return '어떤 협업 상황을 선택하실 건가요?';
  if (selectedInterviewType === 'tech') return '어떤 기술 면접 상황을 선택하실 건가요?';
  return '어떤 면접 상황을 선택하실 건가요?';
};
