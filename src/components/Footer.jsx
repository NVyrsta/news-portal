import { VscGithub } from 'react-icons/vsc';

const Footer = () => {
  return (
    <footer
      className="footer container-fluid bg-light text-center"
      style={{ height: '80px', marginTop: '20px' }}
    >
      <a
        href="https://github.com/NVyrsta"
        target="_blank"
        className="text-dark d-flex justify-content-center align-items-center"
        style={{ height: '100%' }}
      >
        <VscGithub className="mr-1" /> Nataliia Vyrsta
      </a>
    </footer>
  );
};

export default Footer;
