import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: rgb(61, 121, 161);
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: white;
    margin-right: 8px;
        
    &.active {
    color: orange;
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};
