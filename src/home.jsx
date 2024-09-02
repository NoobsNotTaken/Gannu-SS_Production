import Content from "./Content";
import Footer from "./Footer";
import Title from "./Title";
import Header from "./Header";

function Home() {
  return (
    <>
      <div className=" relative ">
        <div className=" ">
          <div className="">
            <Header />
          </div>

          <div className="flex justify-start flex-col z-50  px-5 pb-5 h-[80vh] bg-vi ">
            <Title />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Content />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Footer />
      </div>
    </>
  );
}

export default Home;
