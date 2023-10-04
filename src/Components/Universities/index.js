/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const url = "http://universities.hipolabs.com/search?country=United+States";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data.slice(0, 20);
        setUniversities(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div class='table-container'>
      <table class='table'>
        <thead>
          <tr>
            <th>University Name</th>
            <th>Country</th>
            <th>Alpha Two Code</th>
            <th>Number of Domains</th>
          </tr>
        </thead>
        <tbody id='universities'>
          {universities.map((university, index) => (
            <tr key={index}>
              <td>{university.name}</td>
              <td>{university.country}</td>
              <td>{university.alpha_two_code}</td>
              <td>{university.domains.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Universities;
