import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getFetchData } from "./Fetch";

import { SearchBar } from "./Search";
import Pagination from "./Pagination";

const COURSES_ON_PAGE = 8;
const FIRST_PAGE_NUMBER = 1;

export function FirstPage() {
  const { dataResponse, error, setParamsQuery } = getFetchData();

  const results =
    dataResponse && dataResponse.results ? dataResponse.results : [];
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE_NUMBER);
  const [coursesPerPage] = useState(COURSES_ON_PAGE);

  const compareName = (a, b) => (a.name < b.name ? -1 : 1);
  results.sort(compareName);

  const lastIndex = currentPage * coursesPerPage;
  const firstIndex = lastIndex - coursesPerPage;
  const current =
    results.length === 0 ? [] : results.slice(firstIndex, lastIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <SearchBar setParamsQuery={setParamsQuery} />
        {error ? (
          NetworkError(error)
        ) : (
          <ul className="item" >
            {current.map((item, index) => (
              <li className="list" key={item.id}>
                <NavLink to={"/character/" + item.id} className="link">
                  <img className="images" src={item.image} alt="" />
                  <div className="title">
                    <h1 className="name">{item.name}</h1>
                    <p className="species">{item.species}</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Pagination
        coursesPerPage={coursesPerPage}
        totalCourses={results.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
