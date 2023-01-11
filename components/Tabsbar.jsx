import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/1_react_icon.svg" filename="Home.jsx" path="/" />
      <Tab icon="/2_javascript_icon.svg" filename="Projects.js" path="/projects" />
      <Tab icon="/3_typescript_icon.svg" filename="LinkedIn.ts" path="https://www.linkedin.com/in/claireyurev/" />
      <Tab icon="/4_github_icon.svg" filename="GitHub.md" path="https://github.com/claireyurev" />
      <Tab icon="/5_bitbucket_icon.svg" filename="BitBucket.ai" path="https://bitbucket.org/claireyurev/" />
      {/* <Tab icon="/json_icon.svg" filename="articles.json" path="/articles" /> */}
      {/*<Tab icon="/6_pdf_icon.svg" filename="Resume.pdf" path="/Claire_Y._Yurev_-_Resume.pdf" target="_blank" />*/}
      <Tab icon="/7_git_icon.svg" filename="About.html" path="/about" />
      <Tab icon="/8_html_icon.svg" filename="Contact.css" path="/contact" />
    </div>
  );
};

export default Tabsbar;
