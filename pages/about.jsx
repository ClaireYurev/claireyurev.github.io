const AboutPage = () => {
  return (
    <>
      <img src="https://imgur.com/x8PljRW.gif" alt="loading..." /> 
      <br></br>
      <br></br>
      <h3>About Claire</h3>
      <br></br>
      <p>📚 Creative and enthusiastic learner with a passion for building out new ideas using new technologies.</p>
      <p>✔️ Experienced Support Engineer and Data Scientist with a track record of working in financial and tech industry.</p>
      <p>☕️ Languages: Java, Python, Dart, C++, TypeScript, JavaScript, C#, Go, PHP, SQL, MATLAB, R.</p>
      <p>💻 Frameworks & Databases: Flutter, React, NodeJS, Tkinter, SciKit, TensorFlow, NumPy, Django, MySQL, PostgreSQL, NoSQL.</p>
      <p>🔨 Tools: Git, Scrum Agile, REST, JSON, YAML, Ansile, AWS, GCP, Kubernetes, Docker, Jenkins, Jupyter, Shell Scripting.</p>

      <br></br>
      <br></br>
      <br></br>

      <h3>Technology Behind This Portal</h3>
      <br></br>
      <p>🌄 This is a responsive server-side rendered (SSR) portfolio website built with Next.js.</p>
      <p>📦 Containerized via Docker with Alpine Linux and deployed to Google Cloud Run as a serverless microservice.</p>
      <p>💬 Why serverless: the app runs without concerns about provisioning machines, configuring clusters, or autoscaling.</p>
      <p>☁️ Why Cloud Run: the app is maintained in a fully-managed compute environment for deploying and scaling serverless HTTP containers.</p>
      <p>🚀 In other words, quick deployment of a serverless container as a private microservice with custom RESTful web APIs.</p>
      
      <br></br>
      <br></br>
      <br></br>

      <h3>Credits</h3>
      <br></br>
      <p> </p>
      <p>🙏🏼 A huge thank-you to my mentor, Nitin Ranganath for his original work on the Next.js implementation.</p>
      <p>💎 Nitin (github.com/itsnitinr) is a brilliant developer and this website would not have been what it is without him!</p>
      <p>🌿 Massive gratitude to Vivek Patel for the inspiration with his Ubuntu Portal (vivek9patel.github.io).</p>
      <p>🌟 We stand on the shoulders of giants!</p>
      <p>🌎 Deployed with MIT license.</p>

         
    
    
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
