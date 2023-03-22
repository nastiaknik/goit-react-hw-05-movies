import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

export const StyledSkeleton = styled(Skeleton)`
  border-radius: 2px;
  /*   flex-basis: calc((100% - 16px) / 3); */
  :not(:nth-of-type(4n + 4)) {
    margin-right: 15px;
  }
  :not(:nth-of-type(n + 16)) {
    margin-bottom: 15px;
  }
`;
