import Card from "./Card";

function Content() {
  return (
    <>
      <div className="text-6xl mb-5 px-10 font-bold py-1  ">Our Team</div>
      <div className="flex gap-2 ">
        {/* card holder */}
        <Card Name="Aunty" Position="Owner, Founder" />
        <Card Name="Uncle" Position="Designer, Founder" />
        <Card Name="Meta bhai" Position="Founder" />
      </div>
    </>
  );
}

export default Content;
