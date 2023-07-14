import React from "react";
import "./home.css";
// import { useLocation } from "react-router-dom";

export const Home = (props) => {
     const data = JSON.parse(localStorage.getItem('data')) 
     console.log(data)
     const permissions = (data?.userData?.projectRoles?.map((mp) => mp.permissions));
     console.log(permissions[1]?.name)
    //  const newvalue = permissions.pop()
    //  console.log(newvalue)
  return (
    <div className="parents">
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>username</th>
          <th>surname</th>
          <th>email</th>
          <th>mobileNumber</th>
          <th>gender</th>
          <th>BirthDate</th>
          <th>Project Name</th>
          <th>project Subject</th>
          <th>Role Id</th>
          <th>Role Name</th>
          <th>Permission.name.2ndchild</th>
          <th>Organization Name</th>
        </tr>
        <tr>
            <td>
                {data?.userData?.name}
            </td>
            <td>
                {data.username}
            </td>
            <td>
               {data?.userData?.surname}
            </td>
            <td>
                {data?.userData?.email}
            </td>
            <td>
                {data?.userData?.mobileNumber}
            </td>
            <td>
                {data?.userData?.gender}
            </td>
            <td>
                {data?.userData?.birthDate}
            </td>
            <td>
                {data?.userData?.projectRoles?.map((mp)=>mp.name)}
            </td>
            <td>
                {data?.userData?.projectRoles?.map((mp=>mp.project?.name))}
            </td>
            <td>
                {data?.userData?.projectRoles?.map((mp=>mp.project?.subject))}
            </td>
            <td>
                {data?.userData?.projectRoles?.map((mp)=>mp.role?.name)}
            </td>
            <td>
                {data?.userData?.projectRoles?.map((mp)=>mp.scope)}
            </td>
            <td>
                {data?.userData?.departmentRoles?.map((mp)=>mp.department?.organisation?.name)}
            </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
