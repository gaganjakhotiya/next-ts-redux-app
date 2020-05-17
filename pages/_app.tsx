import App from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import React from "react";
import withRedux from "next-redux-wrapper";
import store from "../store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return {
      pageProps
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <BasicHTML>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </BasicHTML>
    );
  }
}

const BasicHTML = ({ children }) => (
  <>
    <Head>
      <title>Demo Site</title>
      <meta {...({ charSet: "UTF-8" } as any)} />
      <meta name="description" content="Bootstrap Site Project" />
      <meta name="keywords" content="Nextjs, React, Redux, TypeScript" />
      <meta name="author" content="Gagan Jakhotiya" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {children}
  </>
);

// Change callback to customize store for every request
export default withRedux(() => store)(MyApp);
