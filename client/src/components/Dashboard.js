import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; 

const DashboardContainer = styled(motion.div)`  
  padding: 40px;
  text-align: center;
  background: linear-gradient(to right, #f2fcfe, #6d87ecff);
  min-height: 100vh;
  color: #333;
  font-family: "Segoe UI", sans-serif;
`;

const Heading = styled(motion.h1)` 
  color: #1c3faa;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Info = styled(motion.p)` 
  font-size: 18px;
  margin: 10px 0;
`;

const Highlight = styled.strong`
  background-color: #e1f0ff;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 600;
`;

const RewardsBox = styled(motion.div)` 
  margin-top: 40px;
  background-color: white;
  border-radius: 16px;
  padding: 25px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;

const RewardsTitle = styled.h3`
  color: #1c3faa;
  margin-bottom: 20px;
`;

const RewardList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RewardItem = styled(motion.li)` 
  font-size: 16px;
  background: #f0f7ff;
  margin: 10px 0;
  padding: 12px;
  border-radius: 8px;
  transition: 0.3s;
  &:hover {
    background-color: #e1f0ff;
  }
`;

export default function Dashboard({ user }) {
  return (
    <DashboardContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Heading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Welcome, {user.name}
      </Heading>

      <Info
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Referral Code: <Highlight>{user.referralCode}</Highlight>
      </Info>

      <Info
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Total Donations Raised: <Highlight>₹{user.donations}</Highlight>
      </Info>

      <RewardsBox
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <RewardsTitle>🎁 Rewards / Unlockables</RewardsTitle>
        <RewardList>
          {[
            "🎉 ₹500 - Certificate of Appreciation",
            "🏆 ₹1000 - Early Access to Events",
            "🚀 ₹1500 - Internship Spotlight",
          ].map((reward, index) => (
            <RewardItem
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.2 }}
            >
              {reward}
            </RewardItem>
          ))}
        </RewardList>
      </RewardsBox>
    </DashboardContainer>
  );
}
