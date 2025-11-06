import { useQuery } from '@tanstack/react-query';
import { reportApi } from '../lib/api';
import type { ReportDetail } from '../types';

interface UseReportDetailParams {
  reportId: string | undefined;
}

export const useReportDetail = ({ reportId }: UseReportDetailParams) => {
  const { data, isLoading, isError } = useQuery<ReportDetail>({
    queryKey: ['reportDetail', reportId],
    queryFn: async () => {
      return await reportApi.getReportDetail(reportId!);
    },
    enabled: !!reportId,
  });

  return {
    report: data,
    isLoading,
    isError,
  };
};
