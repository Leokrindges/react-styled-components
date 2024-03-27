import { Card as CardStyled } from "../styled-components/Card";
import { Paragraph } from "../styled-components/Paragraph";

export function Card() {
  return (
    <CardStyled>
      <img src="https://source.unsplash.com/random?/wallpapers" alt="" />
      <h3>Facíl aproveitamento</h3>
      <Paragraph>Estamos no caminho</Paragraph>
    </CardStyled>
  );
}
