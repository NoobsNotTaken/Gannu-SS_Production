import Card from "./Card";

function Content() {
  return (
    <>
      <div className="mt-5">
        <div className="flex gap-2">
          {/* card holder */}
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Content;
