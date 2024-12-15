import React from "react";
import "./TableView.css";

const TableView = ({ projectList }) => {
  return (
    <div className="table_view_container">
      <table className="table" role="table" aria-label="Funding data table">
        <thead>
          <tr>
            <th scope="col" className="table_cell">
              S.No.
            </th>
            <th scope="col" className="table_cell">
              Percentage Funded
            </th>
            <th scope="col" className="table_cell">
              Amount Pledged
            </th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((item) => (
            <tr key={item["s.no"]}>
              <td className="table_cell">{item["s.no"]}</td>
              <td className="table_cell">{item["percentage.funded"]}</td>
              <td className="table_cell">{item["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
