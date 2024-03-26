import styled from "styled-components";

interface ImageProps {
  width?: string;
  heigth?: string;
}

export const Image = styled.div<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-image: url(https://source.unsplash.com/random?/wallpapers);
  align-content: center;


`;
