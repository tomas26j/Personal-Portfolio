import About from "../components/about_page_about_section/About";
import DevTimeline from "../components/timeline/DevTimeline.jsx";
import Skills from "../components/skills_about_page/skills";
import Navbar from "../components/navbar/Navbar";

const About_page = () => {
  // in this video i will continue to create About page
  return <>
    <Navbar/>
    <About />
    <Skills/>
    <DevTimeline/>
  </>;
};
export default About_page;
