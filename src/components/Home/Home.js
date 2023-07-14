import React from "react";
import "./home.css";
// import { useLocation } from "react-router-dom";

export const Home = (props) => {
     const data = JSON.parse(localStorage.getItem('data')) 
     
  return (
    <div className="parents">
      <table>
        <tr>
          <th>Name</th>
          <th>username</th>
          <th>surname</th>
          <th>email</th>
          <th>mobileNumber</th>
          <th>gender</th>
          <th>Project Id</th>
          <th>Project Name</th>
          <th>project Subject</th>
          <th>Role Id</th>
          <th>Role Name</th>
          <th>Department Id</th>
          <th>Department Name</th>
        </tr>
        <tr>
            <td>
                {data.id}
            </td>
            <td>
                {data.token}
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
            <td>
                hi
            </td>
        </tr>
      </table>
    </div>
  );
};
