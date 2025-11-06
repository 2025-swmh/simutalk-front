import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ERROR_MESSAGES } from '../constants';
import { sessionApi } from '../lib/api';
import { sessionStorage } from '../utils';

export const useSession = () => {
  const navigate = useNavigate();

  const createSessionMutation = useMutation({
    mutationFn: sessionApi.createSession,
    onSuccess: (data) => {
      if (data?.sessionId) {
        sessionStorage.setSessionId(data.sessionId);
        navigate('/main');
      }
    },
    onError: (error) => {
      console.error('Session creation failed:', error);
      toast.error(ERROR_MESSAGES.SESSION_CREATE_FAILED);
    },
  });

  const handleStartSession = () => {
    createSessionMutation.mutate();
  };

  return {
    handleStartSession,
    isCreating: createSessionMutation.isPending,
  };
};
