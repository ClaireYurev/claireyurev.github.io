import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Claire is a Software Engineer."
      />
      <meta
        name="keywords"
        content="claire, software engineer, software developer, data scientist, claire software engineer, portfolio, portfolio project, full stack, vscode portfolio, vscode website, vscode browser"
      />
      <meta property="og:title" content="Claire | Portfolio" />
      <meta
        property="og:description"
        content="Software Engineer."
      />
      <meta property="og:image" content="https://i.imgur.com/OvIt9Np.jpg" />
      <meta property="og:url" content="https://claireyurev.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Claire Y.',
};
