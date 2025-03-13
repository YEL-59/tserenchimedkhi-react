import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import MobileSidebar from './mobile-sidebar';

const Navbar = () => {
  const navItems = [
    { title: 'Home', url: '/' },
    { title: 'Features', url: '/#' },
    { title: 'Pricing', url: '/pricing' },
    { title: 'Support', url: '/about' },
  ];

  return (
    <nav className="bg-[#FFFCFC] py-4 h-[90px] flex items-center sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link to="/">
          <h1 className="font-bold text-3xl">EasyMigrate</h1>
        </Link>

        <ul className="hidden lg:flex gap-10 text-black font-montserrat text-base not-italic font-normal leading-normal">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-gray-700 transition">
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <Button className="hidden lg:inline">Sign Up</Button>
        <div className="lg:hidden">
          <MobileSidebar />
        </div>
      </div>

      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
