import React from "react";
import { Table } from "react-bootstrap";
import style from "./TablesDashboardStyle.module.css";

const UserDashboard = () => {
  return (
    <div className={style.allContentTable}>
      <Table
        responsive
        className={`table table-bordered table-hover table-light ${style["my-custom-table-style"]}`}
      >
        <thead>
          <tr>
            <th>#id</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Birth Day</th>
            <th>Address</th>
            <th>Password</th>
            <th>Phone Number</th>
            <th>Image</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
            <td>Table Cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UserDashboard;
