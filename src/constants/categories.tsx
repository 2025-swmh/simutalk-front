import { Paper, People } from '../assets';
import { theme } from '../styles';
import type {
  CategoryItem,
  CollaborationSubCategory,
  InterviewSubCategory,
  MainCategory,
} from '../types';

export const mainCategories: Array<CategoryItem & { id: MainCategory }> = [
  {
    id: 'collaboration',
    isWide: false,
    bgColor: theme.color.orange[600],
    icon: <People />,
    text: '협업 상황',
  },
  {
    id: 'interview',
    isWide: false,
    bgColor: theme.color.orange[400],
    icon: <Paper />,
    text: '면접 상황',
  },
];

export const subCategories: {
  collaboration: Array<CategoryItem & { id: CollaborationSubCategory }>;
  interview: Array<CategoryItem & { id: InterviewSubCategory }>;
} = {
  collaboration: [
    {
      id: 'frontend',
      text: '프론트 개발자와의\n협업',
      isWide: true,
      bgColor: theme.color.orange[500],
      icon: <People />,
    },
    {
      id: 'backend',
      text: '백엔드 개발자와의\n협업',
      isWide: true,
      bgColor: theme.color.orange[600],
      icon: <People />,
    },
    {
      id: 'nondev',
      text: '비 개발자와의 협업',
      isWide: true,
      bgColor: theme.color.orange[400],
      icon: <People />,
    },
  ],
  interview: [
    {
      id: 'personality',
      text: '인성 면접',
      isWide: true,
      bgColor: theme.color.orange[400],
      icon: <Paper />,
    },
    {
      id: 'frontend-tech',
      text: '프론트 기술 면접',
      isWide: true,
      bgColor: theme.color.orange[500],
      icon: <Paper />,
    },
    {
      id: 'backend-tech',
      text: '백엔드 기술 면접',
      isWide: true,
      bgColor: theme.color.orange[600],
      icon: <Paper />,
    },
  ],
};
