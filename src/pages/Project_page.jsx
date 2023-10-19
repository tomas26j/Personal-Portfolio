
// import component

import Complete_apps from "../components/complete-apps/Complete_apps";
import Small_projects from "../components/small_projects/Small_projects";
import Navbar from "../components/navbar/Navbar";

const Project_page = () => {
  return (
    <>
      <Navbar/>
      <Complete_apps />
      <Small_projects />
    </>
  );
};
export default Project_page;
