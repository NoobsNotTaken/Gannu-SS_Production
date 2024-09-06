import Card from "./Card";

function Content() {
  return (
    <>
      <div className="text-6xl mx-10 font-bold py-1 m-5 bg-gradient-to-r from-[#ff2301] to-[#feba00] bg-clip-text text-transparent  ">
        Our Team
      </div>
      <div className="flex gap-2 ">
        {/* card holder */}
        <Card Name="Aunty" Position="Owner, Founder" />
        <Card Name="Uncle" Position="Designer, Founder" />
        <Card Name="Meta bhai" Position="Founder" />
        <Card Name="Aaryan bhai" Position="lol" />
      </div>
    </>
  );
}

export default Content;
