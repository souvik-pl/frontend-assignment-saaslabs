import React, { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import TableView from "./components/TableView";
import Pagination from "./components/Pagination/Pagination";

const URL =
  "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

const App = () => {
  const PAGE_SIZE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const { data: projectList, loading, error } = useFetch(URL);

  const offset = (currentPage - 1) * PAGE_SIZE;
  const limit = offset + PAGE_SIZE;
  const slicedProjectList = projectList?.slice(offset, limit);
  const totalPages = Math.ceil(projectList?.length / PAGE_SIZE);

  return (
    <div className="app_container">
      <h2>Highly-rated kickstarter projects details</h2>
      <div className="table_container">
        {loading && <div className="loader"></div>}
        {error && <div className="error">Error: {error.message}</div>}
        {projectList && (
          <div className="table_wrapper">
            <TableView projectList={slicedProjectList} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onChange={(newPage) => setCurrentPage(newPage)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
