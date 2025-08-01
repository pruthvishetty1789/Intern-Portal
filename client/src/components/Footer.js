import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #1f1f2e;
  color: #ffffff;
  padding: 25px 20px;
  text-align: center;
  font-size: 15px;
  margin-top: 50px;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SocialIcons = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
  gap: 25px;

  a {
    color: white;
    font-size: 22px;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      color: #2b7cff;
    }
  }
`;

const CopyRight = styled.div`
  margin-top: 10px;
  font-size: 13px;
  color: #aaa;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <h3>Intern Fundraising Portal</h3>
        <p>Connecting efforts with purpose. Track your progress and impact.</p>

        <SocialIcons>
          <a href="https://github.com/pruthvishetty1789" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/pruthvishetty" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:pruthvishetty@example.com">
            <FaEnvelope />
          </a>
        </SocialIcons>

        <CopyRight>© {new Date().getFullYear()} Pruthvi. All rights reserved.</CopyRight>
      </FooterContent>
    </FooterContainer>
  );
}
