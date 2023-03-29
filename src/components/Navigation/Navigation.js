import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: rgb(61, 121, 161);
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    color: white;
    margin-right: 8px;
        
    &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">My phonebook</StyledLink>}
    </nav>
  );
};
