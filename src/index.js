import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Hi() {
  return (
    <div>
      <h1>Muhammad Ahmed Imran </h1>
      <p className="firstheadingnum">Cell # 0092 (340) 4001628</p>

      <div className="container">
        <h3 className="heading">
          Personal <br /> Profile{" "}
        </h3>
        <div>
          Father’s Name : Muhammad Imran Shahid
          <br />
          Date of Birth : Sep 27, 2000
          <br />
          C. N.I. C # : 34601-2860284-9
          <br />
          Religion : Muslim
          <br />
          Gender : Male
          <br />
          Marital Status : Single
          <br />
          Domicile : Sialkot (Punjab)
          <br />
          Nationality : Pakistani
          <br />
          Address :Sambrial, Sialkot
          <br />
        </div>
      </div>
      <div className="container">
        <h3 className="heading">Objective</h3>
        <div>
          To achieve excellent results in life through extra ordinary hard work,
          honest, dedication to duty and enhance goals of my organization
          through my abilities.
          <br /> Want to work in a Challenging environment where I can get the
          chance of growth.
        </div>
      </div>
      <div className="container">
        <h3 className="heading">Education</h3>
        <table  cellSpacing={5} border={2}>
          <td>
            <th>Qualification</th>
            <th>Year</th>
            <th>Board/University</th>
          </td>
          <tr>
            <td>BS (Computer Science) </td>
            <td>Continue… </td>
            <td>VU Islamabad </td>
          </tr>
          <tr>
            <td> DAE (Electrical)</td>
            <td> 2020 </td>
            <td>PBTE Lahore</td>
          </tr>

          <tr>
            <td> Matriculation (Science)</td>
            <td> 2017 |</td>
            <td>BISE | Gujranwala |</td>
          </tr>
        </table>
      </div>
      <div className="container">
        <h3 className="heading-adju">Skills </h3>
        <ul>
          <li>Computer Basics</li>
          <li>MS Office</li>
          <li>Programming Language (HTML, CSS, JavaScript, C++)</li>
          <li>Confident Communicator </li>
        </ul>
      </div>

      <div className="container">
        <h3 className="heading-adju1">Interests </h3>
        <div>
          <ul>
            <li>Computer</li>
            <li>Travelling </li>
            <li>Hockey </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <h3 className="heading-adju2">Languages </h3>

        <div>
          <ul>
            <li>English</li>
            <li>Urdu</li>
            <li>Punjabi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
