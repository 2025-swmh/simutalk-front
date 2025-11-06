import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ERROR_MESSAGES } from '../constants';
import { reportApi } from '../lib/api';
import type { ReportListItem } from '../types';

interface UseReportListParams {
  sessionId: string | null;
}

export const useReportList = ({ sessionId }: UseReportListParams) => {
  const navigate = useNavigate();

  // Validate session
  useEffect(() => {
    if (!sessionId) {
      toast.error(ERROR_MESSAGES.INVALID_ACCESS);
      navigate('/main');
    }
  }, [sessionId, navigate]);

  // Fetch report list
  const { data, isLoading, isError, error } = useQuery<ReportListItem[]>({
    queryKey: ['reports', sessionId],
    queryFn: async () => {
      return await reportApi.getReportList(sessionId!);
    },
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: !!sessionId,
  });

  // Handle error
  useEffect(() => {
    if (isError) {
      toast.error(ERROR_MESSAGES.REPORT_FETCH_FAILED);
      console.error(error);
    }
  }, [isError, error]);

  return {
    reports: data,
    isLoading,
    isError,
  };
};
