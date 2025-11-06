import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo';
import * as S from './style';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <S.HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <S.NavLinks>
        <S.NavLink href="/main" isActive={pathname === '/main'}>
          홈
        </S.NavLink>
        <S.NavLink href="/report" isActive={pathname === '/report'}>
          보고서
        </S.NavLink>
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default Header;
