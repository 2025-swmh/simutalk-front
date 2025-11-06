import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo';
import { sessionStorage } from '../../utils';
import * as S from './style';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleReportClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const sessionId = sessionStorage.getSessionId();

    if (pathname.startsWith('/report/')) {
      navigate('/report', { state: { sessionId } });
    } else if (pathname !== '/report') {
      navigate('/report', { state: { sessionId } });
    }
  };

  return (
    <S.HeaderContainer>
      <S.NavLink to="/" isActive={pathname === '/'}>
        <Logo />
      </S.NavLink>
      <S.NavWrapper>
        <S.NavLink to="/main" isActive={pathname === '/main'}>
          홈
        </S.NavLink>
        <S.NavLink
          to="/report"
          isActive={pathname.startsWith('/report')}
          onClick={handleReportClick}
        >
          보고서
        </S.NavLink>
      </S.NavWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
