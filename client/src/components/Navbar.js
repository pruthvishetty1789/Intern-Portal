import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2b7cff;
  padding: 15px 30px;
  color: white;
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
`;

const Brand = styled.div`
  font-weight: bold;
  font-size: 20px;
  z-index: 1001;
`;

const Toggle = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #2b7cff;
    width: 100%;
    padding: 20px;
    gap: 15px;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-500px)")};
    z-index: 1000;
  }
`;

const NavLink = styled.li`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  font-size: 16px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: ${(props) => (props.active ? "100%" : "0%")};
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }

  &.logout {
    color: red;
    font-weight: bold;

    &:hover {
      color: #ff4d4d;
    }
  }
`;

export default function NavBar({ onLogout, currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <Nav>
      <Brand>Intern Portal</Brand>
      <Toggle onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Toggle>
      <Links open={menuOpen}>
        <NavLink
          active={currentPage === "dashboard"}
          onClick={() => handleLinkClick("dashboard")}
        >
          Dashboard
        </NavLink>
        <NavLink
          active={currentPage === "leaderboard"}
          onClick={() => handleLinkClick("leaderboard")}
        >
          Leaderboard
        </NavLink>
        <NavLink className="logout" onClick={onLogout}>
          Logout
        </NavLink>
      </Links>
    </Nav>
  );
}
