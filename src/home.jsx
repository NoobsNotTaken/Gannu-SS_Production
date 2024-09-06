import Content from "./Content";
import Footer from "./Footer";
import Title from "./Title";
import Header from "./Header";
import ProjectsGrid from "./ProjectsGrid";
import { projects } from "./Projects";

function Home() {
  return (
    <>
      <div className=" relative    text-white">
        <div className="h-screen ">
          <div className=" ">
            <Header />
          </div>
          <div className="flex justify-start flex-col z-50 pb-5 h-[88vh] border-b-2 border-gray-900">
            <Title />
          </div>
        </div>
        <div>
          <ProjectsGrid projects={projects} />
        </div>
        <div className="flex-col flex mb-10 mt-5 overflow-x-auto border-2 border-gray-900 py-7 px-5 bg-[#040406] ">
          <Content />
        </div>
      </div>
      <div className="flex justify-center items-center border-t-2 border-gray-900">
        <Footer />
      </div>
    </>
  );
}

export default Home;
