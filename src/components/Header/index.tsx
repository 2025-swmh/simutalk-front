import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo';
import * as S from './style';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const sessionId = localStorage.getItem('sessionId'); // or useRecoilValue(...);

  const handleReportClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname.startsWith('/report/')) {
      navigate('/report', { state: { sessionId } });
    }
  };

  return (
    <S.HeaderContainer>
      <S.NavLink to="/" isActive={pathname === '/'}>
        <Logo />
      </S.NavLink>
      <S.NavLinks>
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
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default Header;
