import styled from "styled-components";

interface BannerProps {
  heigth?: string;
  backgroundPosition?: "center";
  backgroundSize?: "cover" | "contain" | "auto";
  backgroundRepeat?: "no-repeat" | "repeat";
  justifyContent?: "center" | "start" | "end";
  alignItens?: "center" | "start" | "end";
}

export const Banner = styled.div<BannerProps>`
  height: ${(props) => props.heigth};
  display: flex;
  background-image: url(https://source.unsplash.com/random?/wallpapers);
  background-position: ${(props) => props.backgroundPosition};
  background-size: ${(props) => props.backgroundSize};
  background-repeat: ${(props) => props.backgroundRepeat};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItens};

  div {
    h1 {
      color: #fff;
    }
  }
`;
