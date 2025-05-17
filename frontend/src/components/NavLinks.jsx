import { Link } from "react-router-dom";

const NavLinks = ({ navLinks, categories }) => (
  <>
    {navLinks.map((navItem) =>
      navItem.label === "Categories" ? (
        <div className="relative group" key={navItem.link}>
          <Link to={navItem.link} className="px-4 py-2 hover:text-pink-600">
            {navItem.label}
          </Link>
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-lg hidden group-hover:block z-50">

            {categories.map((category) => (
              <Link key={category.link} to={category.link} className="block px-4 py-2 hover:bg-pink-100">
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link key={navItem.link} to={navItem.link} className="px-4 py-2 hover:text-pink-600">
          {navItem.label}
        </Link>
      )
    )}
  </>
);

export default NavLinks;
