import Content from "./Content";
import Footer from "./Footer";
import Title from "./Title";
import Header from "./Header";

function Home() {
  return (
    <>
      <div className="h-screen w-full px-16 py-6 ">
        <div className="">
          <Header />
        </div>
        <div className="flex justify-start flex-col mt-10 ">
          <Title />
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
