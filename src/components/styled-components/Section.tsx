import styled from "styled-components";

interface BackgroundProps {
  backgroundColor?: string;
}

export const Section = styled.section<BackgroundProps>`
  background-color: ${(props) => props.backgroundColor};
  width: auto;
  height: auto;
`;
