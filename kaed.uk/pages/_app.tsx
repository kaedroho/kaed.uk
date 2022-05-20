import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from "@markdoc/next.js";
import Head from 'next/head'
import React from 'react';
import styled from 'styled-components'

import '../styles/globals.css'

const Wrapper = styled.div`
  max-width: 900px;
  padding: 20px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  ul {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.1em;
    padding-left: 1em;

    > li::marker {
      color: #d4d4d4;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
  color: #f5cb73;
`;

const MarkDocWrapper = styled.div``;


function MarkDoc({ markdoc, children }: React.PropsWithChildren<MarkdocNextJsPageProps>) {
  return (
      <MarkDocWrapper>
        <Head>
          <title>{markdoc.frontmatter.title} | Karl Hobley</title>
        </Head>
        <main>
            {children}
        </main>
      </MarkDocWrapper>

  );
}

function MyApp({ Component, pageProps }: AppProps) {
  let component = <Component {...pageProps} />;

  if ("markdoc" in pageProps) {
      component = <MarkDoc markdoc={pageProps.markdoc}>{component}</MarkDoc>;
  }

  return <Wrapper>
    <header>
          <Title>
            Karl Hobley
          </Title>
      </header>
      {component}
  </Wrapper>;
}

export default MyApp
