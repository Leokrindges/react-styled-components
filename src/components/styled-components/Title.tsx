import styled from "styled-components";

interface TitleProps{
    titleSize: "H1"| "H2" | "H3" | "H4" | "H5" | "H6"
}

export const Title = styled.h1<TitleProps>`
//h1
${(props)=> props.titleSize}{
    font-size: 2.5rem;
}
//H2
${(props)=> props.titleSize}{
    font-size: 2rem;
}
//H3
${(props)=> props.titleSize}{
    font-size: 1.75;
}
//H4
${(props)=> props.titleSize}{
    font-size: 1.5;
}
//H5
${(props)=> props.titleSize}{
    font-size: 1.25;
}
//H6
${(props)=> props.titleSize}{
    font-size: 1rem;
}
`;