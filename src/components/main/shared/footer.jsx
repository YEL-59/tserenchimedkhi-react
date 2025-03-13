import { Link } from 'react-router';

const Footer = () => {
  const navitems = [
    { title: 'About us', url: 'about' },
    { title: 'Contact us', url: '/#' },
    { title: 'Help', url: '#' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'Disclaimer', url: '#' },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">EasyRate</h1>
        </div>
        <div className="max-w-2xl mt-5 lg:mt-0">
          <h2 className="text-xl md:text-2xl font-normal mb-3 md:mb-5">
            EasyMigrate - Migration AI Platform
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Welcome to EasyMigrate, your all-in-one AI-powered migration
            platform designed to revolutionize the way you plan, manage, and
            execute your relocation. With a focus on simplicity and efficiency,
            EasyMigrate empowers individuals and organizations to navigate their
            migration journey seamlessly.
          </p>
        </div>
      </div>
      <div className="border border-b mt-5 mb-5"></div>
      <div className="flex flex-col xl:flex-row justify-between items-center text-center md:text-left gap-5">
        <ul className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-10 text-black font-montserrat text-sm md:text-base font-normal">
          {navitems.map((item, index) => (
            <li key={index} className="hover:text-gray-700 transition">
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="">
          <p className="text-sm md:text-base">Copyright © 2024 • Company.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
