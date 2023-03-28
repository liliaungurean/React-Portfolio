import React from "react";

function Nav(props) {
  return (
    <header>
      <nav>
        <ul className="flex-row" style={{ justifyContent: "flex-end" }}>
          {}
          {/* when map over anything in JSX, outermost element must have key attribute */}
          {/* and return only a single JSX element */}
          {props.categories.map((category) => {
            // SHORT CIRCUIT EXPRESSSION
            return (
              <li key={category.name}>
                {/* callback fx declaration to selectively render, not auto */}
                <a
                  href={"#" + category.name.toLowerCase()}
                  onClick={() => {
                    props.setPage(category.name);
                  }}
                  className={`mx-1 ${
                    props.page === category.name && "navActive"
                  }`}
                >
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
