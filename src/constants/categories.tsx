import { Code, Paper, People } from '../assets';
import Pencil from '../assets/Pencil';
import { theme } from '../styles';
import type {
  CategoryItem,
  CollaborationSubCategory,
  InterviewSubCategory,
  MainCategory,
  TechInterviewSubCategory,
} from '../types';

export const mainCategories: Array<CategoryItem & { id: MainCategory }> = [
  {
    id: 'collaboration',
    bgColor: theme.color.orange[600],
    icon: <People />,
    text: '협업 상황',
  },
  {
    id: 'interview',
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
      bgColor: theme.color.orange[500],
      icon: <Code />,
    },
    {
      id: 'backend',
      text: '백엔드 개발자와의\n협업',
      bgColor: theme.color.orange[600],
      icon: <Code />,
    },
    {
      id: 'nondev',
      text: '비 개발자와의 협업',
      bgColor: theme.color.orange[400],
      icon: <Pencil />,
    },
  ],
  interview: [
    {
      id: 'personality',
      text: '인성 면접',
      bgColor: theme.color.orange[600],
      icon: <Paper />,
    },
    {
      id: 'tech',
      text: '기술 면접',
      bgColor: theme.color.orange[500],
      icon: <Paper />,
    },
  ],
};

export const techInterviewCategories: Array<CategoryItem & { id: TechInterviewSubCategory }> = [
  {
    id: 'frontend',
    text: '프론트 면접',
    bgColor: theme.color.orange[600],
    icon: <Code />,
  },
  {
    id: 'backend',
    text: '백엔드 면접',
    bgColor: theme.color.orange[500],
    icon: <Code />,
  },
  {
    id: 'design',
    text: '디자인 면접',
    bgColor: theme.color.orange[400],
    icon: <Pencil />,
  },
  {
    id: 'planning',
    text: '기획 면접',
    bgColor: theme.color.orange[300],
    icon: <Paper />,
  },
];
