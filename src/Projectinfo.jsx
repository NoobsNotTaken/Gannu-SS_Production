const Projectinfo = ({ projects, title }) => {
  return (
    <>
      <div className="border-2 px-2 rounded-xl border-[#7a7a7a] my-5">
        <div className="text-4xl px-2 py-1 my-4 ">{title}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-60 object-cover hover:transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <a
                  href={project.link}
                  className="text-[#44cf35] hover:text-[#337a28] font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projectinfo;
