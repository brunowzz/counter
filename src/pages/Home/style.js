import styled from "styled-components";
import { device } from "../../devices";

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

  @media ${device.tablet} {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 48px;
  font-weight: 400;
  color: #fff;

  @media ${device.tablet} {
    font-size: 32px;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 40px;
  gap: 20px;
`;
