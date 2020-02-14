import styled from "@emotion/styled";
import tw from "tailwind.macro";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import github from "../images/github.svg";

const logos = [
  {
    name: "gatsby",
    logo: require("../images/gatsby.svg"),
  },
  {
    name: "tailwind",
    logo: require("../images/tailwind.svg"),
  },
];

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`;

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`;

const Text = tw.p`
  text-xl text-gray-700
`;

const Logos = tw.div`
  flex items-center justify-around mb-6 px-16
`;

const Icon = tw.img`
  h-10
`;

const Footer = styled.footer`
  ${tw`w-100 mt-6 flex justify-around text-gray-700`}
`;

const SmallIcon = tw.img`
  inline-block h-6
`;

export default ({ data }) => (
  <Wrapper>
    <SEO title="Home" />
    <Main>
      <Logos>
        {logos &&
          logos.map(({ name, logo }, index) => (
            <Icon src={logo} alt={`${name} Logo`} key={index} />
          ))}
        <Img fixed={data.file.childImageSharp.fixed} />
      </Logos>
      <Heading>Hello, world!</Heading>
      <Text>Welcome to the Gatsby Tailwind CSS + Emotion Starter.</Text>
      <Footer>
        <a
          href="https://github.com/pinutz/gatsby-tailwind-emotion-starter-extended"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SmallIcon src={github} alt="Github Icon" />
        </a>
        extends
        <a
          href="https://github.com/pauloelias/gatsby-tailwind-emotion-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SmallIcon src={github} alt="Github Icon" />
        </a>
      </Footer>
    </Main>
  </Wrapper>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "emotion.png" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
