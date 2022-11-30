import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'Home.jsx',
    path: '/',
    icon: '1_react_icon.svg',
  },
  {
    name: 'Projects.js',
    path: '/projects',
    icon: '2_javascript_icon.svg',
  },
  /*{
    name: 'LinkedIn.ts',
    path: 'https://www.linkedin.com/in/claireyurev/',
    icon: '3_typescript_icon.svg',
  },*/
  {
    name: 'GitHub.md',
    path: 'https://github.com/claireyurev',
    icon: '4_github_icon.svg',
  },
  {
    name: 'BitBucket.ai',
    path: 'https://bitbucket.org/claireyurev/',
    icon: '5_bitbucket_icon.svg',
  },
  /*{
    name: 'Resume.pdf',
    path: '/Claire_Y._Yurev_-_Resume.pdf',
    icon: '6_pdf_icon.svg',
  },*/
  {
    name: 'About.html',
    path: '/about',
    icon: '7_git_icon.svg',
  },
  {
    name: 'Contact.css',
    path: '/contact',
    icon: '8_html_icon.svg',
  }
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
