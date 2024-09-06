const ProjectsGrid = ({ projects }) => {
  return (
    <section className="py-12  border-2 border-gray-900 border-x-0 border-b-0 bg-[#040406] ">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold  mb-8 ">Our Work</h2>
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
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
