import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'GitHub',
    link: 'claireyurev',
    href: 'https://github.com/claireyurev',
  },
  {
    social: 'LinkedIn',
    link: 'claireyurev',
    href: 'https://www.linkedin.com/in/claireyurev',
  },
  {
    social: 'BitBucket',
    link: 'claireyurev',
    href: 'https://bitbucket.org/claireyurev',
  },
  {
    social: 'Website',
    link: 'claireyurev.com',
    href: 'https://claireyurev.com',
  },
  {
    social: 'email',
    link: 'claire@opencortex.ai',
    href: 'mailto:claire@opencortex.ai',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.contactClaire</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
