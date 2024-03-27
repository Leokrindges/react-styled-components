import { Fragment } from "react/jsx-runtime";
import { Banner } from "../components/styled-components/Banner";
import { Container } from "../components/styled-components/Container";
import { Row } from "../components/styled-components/Row";
import { Column } from "../components/styled-components/Column";
import { Card } from "../components/functional-components/Card";
import { Section } from "../components/styled-components/Section";
import { Paragraph } from "../components/styled-components/Paragraph";
import { Image } from "../components/styled-components/Image";

export function Home() {
  return (
    <Fragment>
      <header>
        <Banner
          heigth="500px"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          justifyContent="center"
          alignItens="center"
        >
          <div>
            <h1>Minha primeira página com React</h1>
          </div>
        </Banner>
      </header>
      <main>
        <Section backgroundColor="#F8F9FB">
          <Container>
            <Row justifyContent="Center">
              <Column widht="300px" heigth="350px">
                <Card></Card>
              </Column>
              <Column widht="300px" heigth="350px">
                <Card></Card>
              </Column>
              <Column widht="300px" heigth="350px">
                <Card></Card>
              </Column>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row alignItens="Center">
              <Column widht="50%">
                <h3>Loren Ipsun</h3>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit autem illo non maiores cupiditate placeat
                  officia. Dicta, sunt nobis nisi, quis itaque, debitis eius
                  temporibus quidem voluptatem repellat blanditiis. Dolorum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat voluptatum voluptates sit tempore in, modi ut eveniet
                  quod distinctio fugiat magnam ad, ex mollitia dolore fugit
                  recusandae fuga officiis aperiam.
                </Paragraph>
              </Column>
              <Column widht="50%" heigth="300px">
                <Image width="100%" heigth="300px"></Image>
              </Column>
            </Row>
            <Row alignItens="Center">
              <Column widht="54.8%" heigth="300px">
                <Image width="100%" heigth="300px"></Image>
              </Column>
              <Column widht="51%">
                <h3>Loren Ipsun</h3>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit autem illo non maiores cupiditate placeat
                  officia. Dicta, sunt nobis nisi, quis itaque, debitis eius
                  temporibus quidem voluptatem repellat blanditiis. Dolorum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat voluptatum voluptates sit tempore in, modi ut eveniet
                  quod distinctio fugiat magnam ad, ex mollitia dolore fugit
                  recusandae fuga officiis aperiam.
                </Paragraph>
              </Column>
            </Row>
            <Row alignItens="Center">
              <Column widht="50%">
                <h3>Loren Ipsun</h3>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit autem illo non maiores cupiditate placeat
                  officia. Dicta, sunt nobis nisi, quis itaque, debitis eius
                  temporibus quidem voluptatem repellat blanditiis. Dolorum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat voluptatum voluptates sit tempore in, modi ut eveniet
                  quod distinctio fugiat magnam ad, ex mollitia dolore fugit
                  recusandae fuga officiis aperiam.
                </Paragraph>
              </Column>
              <Column widht="50%" heigth="300px">
                <Image width="100%" heigth="300px"></Image>
              </Column>
            </Row>
          </Container>
        </Section>
        <Section>
          <Banner
            heigth="200px"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            alignItens="center"
            justifyContent="center"
          >
            <div>
              <h1>Contato</h1>
            </div>
          </Banner>
        </Section>
      </main>
      <footer>
        <Section>
          <Container>
            <Row
              heigth="200px"
              alignItens="Center"
              justifyContent="space-between"
            >
              <Column>
                <Paragraph color="#047BF5" fontWeight="bolder">
                  Abaut . Contact . Terms of Use . Privacy Police
                </Paragraph>
                <Paragraph paddingTop="10px">
                  Your Website 2024.All Rigths Reserved.
                </Paragraph>
              </Column>
              <Column marginRight="15px">
                <img src="../images/tweets-logo.png" alt="" />
                <img src="../images/facebook-logo.png" alt="" />
                <img src="../images/instagram-logo.png" alt="" />
              </Column>
            </Row>
            <Row>
              <Column></Column>
            </Row>
          </Container>
        </Section>
      </footer>
    </Fragment>
  );
}
