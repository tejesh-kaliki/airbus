// PartsPage.js
import React from "react";
import Navbar from "./NavBar";
import PartInformation from "./PartInfo";

function PartsPage() {
  return (
    <div>
      <div className="main pb-5 background-image">
        {Navbar()}
        <div
          className="container-lg p-4 mt-5 bg-white rounded-5 border border-success border-4 backdrop"
          style={{ "--bs-bg-opacity": "0.7" }}
        >
          <div className="parts-list row">
            {PartInformation({
              partName: "Part Name",
              materialComp: "Alluminum Alloy",
              age: "5 years",
              condition: "Good",
              secondOption: "Buy/Repurpose",
            })}
            {PartInformation({
              partName: "Another Part Name",
              materialComp: "Carbon fiber reinforced polymer",
              age: "3 years",
              condition: "Like new",
              secondOption: "Buy/Repurpose",
            })}
            {PartInformation({
              partName: "Part Name",
              materialComp: "",
              age: "",
              condition: "",
              secondOption: "Buy/Repurpose",
            })}
            {PartInformation({
              partName: "Part Name",
              materialComp: "",
              age: "",
              condition: "",
              secondOption: "Buy/Repurpose",
            })}
            {PartInformation({
              partName: "Part Name",
              materialComp: "",
              age: "",
              condition: "",
              secondOption: "Buy/Repurpose",
            })}
          </div>
        </div>
      </div>

      <footer>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            123 fffff <br />
            fffffffff ffffff <br />
            Phone: 555-555-5555 <br />
            Email: info@airbusaerothon.com
          </p>
        </div>
        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#">Dashboard Overview</a>
            </li>
            <li>
              <a href="#">Aircraft Parts Database</a>
            </li>
            <li>
              <a href="#">Manufacturers and Airlines Section</a>
            </li>
            <li>
              <a href="#">Recycling Facilities Section</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Aircraft Sustainability. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PartsPage;
