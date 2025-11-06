export const ERROR_MESSAGES = {
  SESSION_NOT_FOUND: '세션을 찾을 수 없습니다. 다시 시작해주세요.',
  SESSION_CREATE_FAILED: '세션 생성에 실패했습니다. 다시 시도해주세요.',
  CHAT_START_FAILED: '채팅을 시작하는 중 오류가 발생했습니다.',
  MESSAGE_SEND_FAILED: '메시지를 전송하는 중 오류가 발생했습니다.',
  CHAT_END_FAILED: '채팅 종료 중 오류가 발생했습니다.',
  REPORT_FETCH_FAILED: '보고서를 불러오는 중 오류가 발생했습니다.',
  INVALID_ACCESS: '잘못된 접근입니다. 메인 페이지에서 시작해주세요.',
  REQUEST_FAILED: '요청 중 오류가 발생했습니다. 다시 시도해주세요.',
} as const;

export const SUCCESS_MESSAGES = {
  CHAT_ENDED: '채팅이 종료되었습니다. 평가 페이지로 이동합니다.',
} as const;

export const INFO_MESSAGES = {
  RESTART_REQUIRED: '다시 시작해주세요.',
  MIN_MESSAGE_REQUIRED: (current: number, required: number) =>
    `최소 ${required}개의 메시지를 보내야 채팅을 종료할 수 있습니다. (현재: ${current}개)`,
} as const;

export const LOADING_MESSAGES = {
  CHAT_STARTING: '채팅을 시작하는 중...',
  AI_GENERATING: '답변을 생성하는 중...',
  LOADING: '불러오는 중...',
} as const;
