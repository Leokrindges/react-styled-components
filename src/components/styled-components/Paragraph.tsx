import styled from "styled-components";

interface ParagraphProps {
  color?: string;
  fontWeight?: "bolder" | "bold" | "ligther";
  paddingTop?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  color: ${(props) => props.color ?? "#252629"};
  font-weight: ${(props) => props.fontWeight};
  padding-top: ${(pros) => pros.paddingTop};
`;
