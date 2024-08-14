import React from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";

function PageNav() {
  return (
    <nav className="mx-auto my-0 max-w-[1200px] px-[15px] py-0">
      <div className="flex items-center justify-between">
        <Logo />
        <ul className="flex gap-4 text-gray-900">
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/girls">Girls</NavLink>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li>
            <Link>
              <FaRegHeart />
            </Link>
          </li>
          <li>
            <Link>
              <CgShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PageNav;
