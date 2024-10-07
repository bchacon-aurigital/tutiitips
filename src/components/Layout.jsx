import React from "react";
import NavbarBlog from "./NavbarBlog";
import Contacto from "./Contacto";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarBlog className="relative"/>
      <main className="flex-grow">{children}</main>
      <Contacto />
    </div>
  );
};

export default Layout;
