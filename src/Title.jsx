function Title() {
  return (
    <>
      {" "}
      <div className="s">
        {" "}
        <video
          className="z-0"
          autoPlay
          muted
          id="video"
          style={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            pointerEvents: "none",
          }}
        >
          <source src="GannuSS_Production.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col gap-4 z-10 h-full text-white px-6 py-10 ">
        {/* <div
          className="text-7xl font-semibold z-50 text-transparent flex flex-col mt-36"
          style={{ WebkitTextStroke: "1px white" }}
        >
          Innovative UI/UX <div> Designer</div>
        </div> */}

        {/* <div className="text-xl w-full font-medium text-pretty ">
          <div className="">
            Crafting Exceptional Degital Experience With a User-Centered
            Approach
          </div>
        </div> */}
        <div className=" flex text-right text-sm font-normal">
          <div className="flex-1"></div>
          {/* <div className="justify-end w-[30%] text-xl text-pretty">
            We combine creativity with a deep understanding of user behavior to
            build digital experiences that engage and inspire.
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Title;
