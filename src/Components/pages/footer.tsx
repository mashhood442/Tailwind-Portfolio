const Footer = () => {
  return (
    <footer>
      <div className="text-center space-y-1">
        <p className="text-sm text-gray-600">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:mashhood.y4@gmail.com"
            className="text-blue-500 hover:underline"
          >
            mashhood.y4@gmail.com
          </a>
          <br />
        <a
  href="https://www.linkedin.com/in/mashhood-ul-haq-81aa7726b"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:underline"
  aria-label="Visit my LinkedIn profile"
>
  LinkedIn
</a>

        </p>
        <p className="text-xs text-gray-500">
          © 2024 My Portfolio. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
