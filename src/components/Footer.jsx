import { NavLink } from "react-router-dom";
import { facebook, footerData, instagram, twitter } from "../helpers/data";

const Footer = () => {
  const icon = [facebook, instagram, twitter, footerData];

  return (
    <footer className="bg-[#D5D5D5] px-5">
      <div className="border-b border-white pt-8 sm:flex sm:items-center sm:justify-between pb-4">
        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          {footerData.map((item, index) => (
            <li key={index}>
              <NavLink to="" className="text-black transition hover:opacity-75">
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
          {icon.map((item, index) => (
            <li key={index}>
              <NavLink
                to=""
                className="text-gray-700 transition hover:opacity-75"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center text-sm text-black sm:text-right py-4">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
