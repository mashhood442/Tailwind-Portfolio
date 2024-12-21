
const Home = () => {
  return (
    <div className="home-section bg-gray-50 min-h-screen text-gray-800">
      {/* Intro Section */}
      <section className="text-center py-20 bg-blue-50 shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello, I'm Mashhood</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to my portfolio. I'm an aspiring industrial engineer with a focus on data analysis,
          supply chain management, and operations research.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700">Projects & Achievements</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto space-y-4 text-gray-600">
          <li>Led an internship and took initiatives during that duration.</li>
          <li>Developed a basic React calculator and built a Resume Builder.</li>
          <li>
            Active in roles within university organizations, enhancing team collaboration and project
            outcomes.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
