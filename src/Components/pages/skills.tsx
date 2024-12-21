const Skills = () => {
  return (
    <div className="skills-section bg-gray-50 min-h-screen text-gray-800 py-16 px-6">
      {/* Skills Title */}
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Skills</h2>

      {/* Technical Skills Section */}
      <section className="technical-skills mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Technical Skills</h3>
        <ul className="space-y-4 list-disc list-inside pl-6 text-gray-600">
          <li>
            <strong>Computer-Aided Design (CAD):</strong> Familiar with software tools for design and drafting.
          </li>
          <li>
            <strong>Data Analysis and Visualization:</strong> Proficient in Excel for data analysis, including pivot tables and statistical functions.
          </li>
          <li>
            <strong>Industrial Statistics:</strong> Basic understanding of statistical process control (SPC) and quality control principles.
          </li>
          <li>
            <strong>Manufacturing Processes:</strong> Knowledge of introductory manufacturing techniques and production workflows.
          </li>
          <li>
            <strong>Programming Skills:</strong> Basic knowledge of programming languages, such as Python, for data analysis and automation.
          </li>
          <li>
            <strong>Operations Research:</strong> Foundational knowledge in optimization techniques and decision-making models.
          </li>
          <li>
            <strong>Supply Chain and Inventory Management:</strong> Familiar with principles of supply chain optimization and inventory control.
          </li>
        </ul>
      </section>

      {/* Soft Skills Section */}
      <section className="soft-skills">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Soft Skills</h3>
        <ul className="space-y-4 list-disc list-inside pl-6 text-gray-600">
          <li>
            <strong>Analytical Thinking:</strong> Skilled in breaking down complex problems and identifying optimal solutions.
          </li>
          <li>
            <strong>Effective Communication:</strong> Capable of presenting technical concepts clearly to both technical and non-technical audiences.
          </li>
          <li>
            <strong>Teamwork and Collaboration:</strong> Experience working in cross-functional teams to achieve project goals.
          </li>
          <li>
            <strong>Time Management and Organization:</strong> Ability to prioritize tasks and meet deadlines effectively.
          </li>
          <li>
            <strong>Leadership and Initiative:</strong> Active in leading projects and organizing events within university societies.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
