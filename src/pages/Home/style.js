import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 60px;
  background: #00280e;
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 700;
  color: #fff;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 48px;
  font-weight: 400;
  color: #fff;
`;

export const Section = styled.section`
  display: flex;
  gap: 20px;
`;
