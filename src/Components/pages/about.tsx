const About = () => {
  return (
    <div className="about-section bg-gray-50 min-h-screen text-gray-800 py-16 px-6">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">About Me</h2>

      {/* Education Section */}
      <section className="education-section mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Education</h3>
        <div className="space-y-4">
          <p>
            <span className="font-bold">Bachelor’s in Industrial Engineering and Management: </span>
            Dawood University, Karachi (2022 – 2026)
          </p>
          <p>
            <span className="font-bold">Intermediate in Pre-Engineering: </span>
            Government Superior Science College, Karachi (2020 – 2022, Grade A)
          </p>
          <p>
            <span className="font-bold">Matriculation in Science: </span>
            C.A.A Model School No.2, Karachi (2020, Grade A)
          </p>
        </div>
      </section>

      {/* Interests and Hobbies Section */}
      <section className="hobbies-section">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Interests and Hobbies</h3>
        <div className="space-y-4 text-gray-600">
          <p>
            <span className="font-bold">Process Optimization: </span>
            Passionate about analyzing and improving manufacturing and business processes to enhance efficiency and productivity.
          </p>
          <p>
            <span className="font-bold">Continuous Learning: </span>
            Dedicated to expanding knowledge in areas like supply chain management, lean manufacturing, and operations research.
          </p>
          <p>
            <span className="font-bold">Problem-Solving: </span>
            Enjoys tackling complex engineering problems with analytical thinking and strategic planning.
          </p>
          <p>
            <span className="font-bold">Project Management: </span>
            Interested in developing skills in project planning, team collaboration, and effective resource management.
          </p>
          <p>
            <span className="font-bold">Technical Content Creation: </span>
            Creates and shares educational content on engineering topics, aimed at helping peers and junior students understand complex concepts.
          </p>
          <p>
            <span className="font-bold">Student Society Leadership: </span>
            Actively participates in university societies, focusing on organizing technical workshops and industry networking events.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
