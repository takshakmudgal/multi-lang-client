import { IoNotifications } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const updateUnderline = (element) => {
    if (element) {
      const width = element.offsetWidth;
      const left = element.offsetLeft;
      setUnderlineStyle({
        width: `${width}px`,
        left: `${left}px`,
      });
    }
  };

  const updateActiveUnderline = () => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(".active");
      updateUnderline(activeLink);
    }
  };

  useEffect(() => {
    updateActiveUnderline();
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(updateActiveUnderline, 100);
    return () => clearTimeout(timer);
  }, []);

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
          isActive
            ? "text-violet-700 dark:text-violet-300 active"
            : "text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-300"
        }`
      }
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="bg-white shadow dark:bg-gray-800 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl sm:text-3xl text-violet-800 dark:text-violet-300 font-bold uppercase"
            >
              multi lang
            </a>
          </div>

          <div className="hidden md:block">
            <div className="relative flex space-x-6" ref={navRef}>
              <div
                className="absolute -bottom-4 h-0.5 bg-violet-700 dark:bg-violet-300 transition-all duration-300"
                style={underlineStyle}
              />
              <NavItem to="/">Overview</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/billing">Billing</NavItem>
              <NavItem to="/settings">Settings</NavItem>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
              <IoNotifications size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
              <MdOutlineQuestionMark size={20} />
            </button>

            <img
              src="https://images.unsplash.com/photo-1576158114131-f211996e9137?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-violet-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-violet-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500"
            >
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem to="/">Overview</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/billing">Billing</NavItem>
            <NavItem to="/settings">Settings</NavItem>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5 space-x-3">
              <img
                src="https://images.unsplash.com/photo-1576158114131-f211996e9137?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                  John Doe
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  john@example.com
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
                <IoNotifications size={20} />
              </button>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200">
                <MdOutlineQuestionMark size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
