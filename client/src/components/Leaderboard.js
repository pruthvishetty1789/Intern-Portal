import React from "react";
import styled, { keyframes } from "styled-components";


const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #dbe6f6, #8ba3ef);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const LeaderboardContainer = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 40px 30px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  font-family: "Segoe UI", sans-serif;
  animation: ${fadeInUp} 0.8s ease forwards;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  color: #1c3faa;
  margin-bottom: 35px;
  letter-spacing: 1px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`;

const ListItem = styled.li`
  background: ${({ index }) =>
    index === 0
      ? "#ffe57f"
      : index === 1
      ? "#d3d3d3"
      : index === 2
      ? "#e1a77e"
      : "#f7f9fc"};
  color: ${({ index }) => (index < 3 ? "#000" : "#333")};
  padding: 16px 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Medal = styled.span`
  font-size: 1.4rem;
  margin-right: 10px;
`;

// Bonus section
const CTA = styled.div`
  text-align: center;
  font-size: 1rem;
  margin-top: 20px;
  color: #444;
  font-weight: 500;
`;

export default function Leaderboard() {
  const leaderboard = [
    { name: "Pruthvi", donations: 1500 },
    { name: "Aarav", donations: 1200 },
    { name: "Neha", donations: 1000 },
    { name: "Riya", donations: 900 },
    { name: "Dev", donations: 850 },
  ];

  const getMedal = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return "🎖️";
  };

  return (
    <PageWrapper>
      <LeaderboardContainer>
        <Title>🏆 Top Fundraisers</Title>
        <List>
          {leaderboard.map((user, index) => (
            <ListItem key={index} index={index}>
              <span>
                <Medal>{getMedal(index)}</Medal> {user.name}
              </span>
              <span>₹{user.donations}</span>
            </ListItem>
          ))}
        </List>
        <CTA>
          Keep up the great work! Your efforts are making a difference. 💪🌟
        </CTA>
      </LeaderboardContainer>
    </PageWrapper>
  );
}
