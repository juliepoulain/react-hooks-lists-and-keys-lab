import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((linkName) => {
    return <a key={linkName} href={"#"+linkName}>{linkName}</a>
  })
  return <nav>
    {linkElements}
    </nav>;
}

export default NavBar;
