import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ articleTitle, ...props }) {
  return (
    <>
      <div className="bg-gray-200 text-black text-sm  py-6 pl-4">
        <sapn className="mr-2">Vous lisez actuellement : </sapn>
        <Link to="/" className="font-bold italic">
          RANPO /{" "}
        </Link>
        <span className="italic"> {articleTitle}</span>
      </div>
    </>
  );
}

export default Breadcrumbs;
