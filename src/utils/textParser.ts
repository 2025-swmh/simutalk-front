/**
 * 텍스트를 마침표로 분리하여 배열로 반환합니다.
 * @param text - 분리할 텍스트
 * @returns 마침표로 분리된 문자열 배열
 */
export const splitByDot = (text: string): string[] => {
  return text
    .split('.')
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => t + '.');
};

/**
 * 평가 데이터의 피드백을 마침표 단위로 분리합니다.
 */
export const parseFeedbackDetails = (feedbackItems: Array<{ detail: string }>): string[] => {
  return feedbackItems.flatMap((item) => splitByDot(item.detail));
};

/**
 * 개선 방안의 액션 플랜을 마침표 단위로 분리합니다.
 */
export const parseActionPlans = (improvementItems: Array<{ action_plan: string }>): string[] => {
  return improvementItems.flatMap((item) => splitByDot(item.action_plan));
};

/**
 * 어필 추천의 예시 문구를 마침표 단위로 분리합니다.
 */
export const parseExampleStatements = (statements: Array<{ statement: string }>): string[] => {
  return statements.flatMap((item) => splitByDot(item.statement));
};
