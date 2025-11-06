export interface ReportListItem {
  id: number;
  title: string;
  typeKorean: string;
  scoreRelationship: string;
  scoreProblem: string;
}

export interface ReportDetail {
  id: number;
  title: string;
  evaluationJson: string;
  typeKorean: string | null;
  scoreRelationship: string | null;
  scoreProblem: string | null;
}

export interface EvaluationData {
  session_id: string;
  title: string;
  template_type: string;
  collaboration_profile: {
    type_korean: string;
    type_english: string;
    description_summary: string;
    analysis_scores: {
      relationship_contribution: string;
      problem_leadership: string;
    };
  };
  feedback: {
    good_points: { area: string; detail: string }[];
    improvement_points: { area: string; detail: string; action_plan: string }[];
  };
  appeal_recommendation: {
    core_keywords: string[];
    example_statements: { category: string; statement: string }[];
  };
}
