import { AboutPage, getAboutPageData } from '../modules/about';
// import AboutPage from '../modules/about/AboutPage';

const AboutPro = (props) => {
  return <AboutPage {...props} />;
};

export const getStaticProps = () => {
  const data = getAboutPageData();
  return { props: {} };
};

export default AboutPro;
