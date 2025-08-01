import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #2b7cff, #00c6ff);
`;

const LoginBox = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 360px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 25px;
  color: #2b7cff;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #2b7cff;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 8px 0;
  font-size: 14px;
  color: #555;
  justify-content: space-between;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 12px;
  background-color: #2b7cff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
`;

const ErrorMsg = styled.p`
  color: red;
  margin-top: 15px;
`;

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      onLogin(res.data);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container>
      <LoginBox
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Title>Intern Login</Title>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Label>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </CheckboxLabel>
        </Label>

        <Button
          onClick={handleLogin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </Button>

        {error && <ErrorMsg>{error}</ErrorMsg>}
      </LoginBox>
    </Container>
  );
}
