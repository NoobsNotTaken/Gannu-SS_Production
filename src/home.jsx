import Content from "./Content";
import Footer from "./Footer";
import Title from "./Title";
import Header from "./Header";

function Home() {
  return (
    <>
      <div className=" relative  bg-black text-white">
        <div className=" ">
          <div className=" ">
            <Header />
          </div>

          <div className="flex justify-start flex-col z-50 pb-5 h-[88vh] bg-vi mt-16 ">
            <Title />
          </div>
        </div>
        <div className="flex justify-center items-center mb-10">
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
