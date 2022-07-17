import * as S from '@components/common/LoadingSpinner/LoadingSpinner.style';
import { SPINNER_SIZE } from '@components/common/LoadingSpinner/constants';

interface LoadingSpinnerPropsType {
  spinnerSize?: string;
}

const LoadingSpinner = ({ spinnerSize = SPINNER_SIZE.SMALL }: LoadingSpinnerPropsType) => {
  return <S.LoadingSpinner size={spinnerSize} />;
};

export default LoadingSpinner;
