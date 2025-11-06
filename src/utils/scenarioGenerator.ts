import type { CollaborationSubCategory, TechInterviewSubCategory } from '../types';

export const scenarioGenerator = {
  collaboration: (userRole: string, subCategory: CollaborationSubCategory): string => {
    const role = userRole || '개발자';
    const scenarios: Record<CollaborationSubCategory, string> = {
      frontend: `사용자는 ${role} 역할입니다. 당신은 주니어 프론트엔드 개발자 역할입니다. 사용자와 간단한 API 연동 작업에 대해 협업하려고 합니다. 어떤 데이터가 필요한지, API 주소는 어떻게 되는지 등 기본적인 것들을 쉽게 물어봐주세요. 처음 API를 사용할 때 궁금한 점들을 자연스럽게 질문해주세요.`,
      backend: `사용자는 ${role} 역할입니다. 당신은 주니어 백엔드 개발자 역할입니다. 사용자와 간단한 API 개발에 대해 협업하려고 합니다. 어떤 기능이 필요한지, 데이터를 어떻게 저장할지 등 기본적인 내용을 쉽게 물어봐주세요. 복잡한 용어는 피하고 이해하기 쉬운 질문들로 대화를 진행해주세요.`,
      nondev: `사용자는 ${role} 역할입니다. 당신은 기획자 또는 디자이너 역할입니다. 사용자와 프로젝트 기능에 대해 협업하려고 합니다. 사용자가 어떤 기능을 만들고 싶은지, 언제까지 가능한지 등 기본적인 것들을 물어봐주세요. 어려운 기술 용어는 쓰지 말고 일상적인 대화처럼 편하게 이야기해주세요.`,
    };
    return scenarios[subCategory];
  },

  custom: (role: string, title: string, description: string): string => {
    return `사용자는 ${role} 역할입니다. 상황 제목: ${title}. 상황 설명: ${description}. 당신은 주니어 개발자 수준으로 쉽고 편하게 대화해주세요. 어려운 용어는 피하고, 기본적인 내용 위주로 자연스럽게 질문하고 답변해주세요.`;
  },
};

export const templateMapper = {
  collaboration: () => 'cooperation' as const,
  interview: {
    personality: () => 'tenacity' as const,
    tech: (category: TechInterviewSubCategory) => category,
  },
};
