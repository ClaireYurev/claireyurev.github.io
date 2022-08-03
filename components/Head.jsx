import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Claire Yaroslav Yurev is a Software Engineer and Data Scientist currently working in California."
      />
      <meta
        name="keywords"
        content="claire y. yurev, claire yaroslav yurev, claire, yaroslav, yurev, software engineer, software developer, data scientist, claire software engineer, portfolio, portfolio project, full stack, vscode portfolio, vscode website, vscode browser"
      />
      <meta property="og:title" content="Claire Yurev | Portfolio" />
      <meta
        property="og:description"
        content="Software Engineer currently working in the Bay Area, California."
      />
      <meta property="og:image" content="https://i.imgur.com/OvIt9Np.jpg" />
      <meta property="og:url" content="https://claireyurev.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Claire Y. Yurev',
};
