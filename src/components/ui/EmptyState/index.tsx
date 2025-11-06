import React from 'react';
import { Box, Flex } from '..';
import * as S from './style';

// Import Box and Flex from the same ui barrel

interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
}

const EmptyState = ({ message, icon }: EmptyStateProps) => {
  return (
    <S.EmptyStateWrapper>
      {icon && <Box marginBottom={16}>{icon}</Box>}
      <Flex>{message}</Flex>
    </S.EmptyStateWrapper>
  );
};

export default EmptyState;
