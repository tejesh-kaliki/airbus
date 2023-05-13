import React from "react";
import Navbar from "./NavBar";
import PartInformation from "./PartInfo";

function HomePage() {
  return (
    <div>
      <div className="main pb-5 background-image">
        {Navbar()}
        <div
          className="container-lg p-4 mt-5 bg-white rounded-5 border border-success border-4 backdrop"
          style={{ "--bs-bg-opacity": "0.7" }}
        >
          <div className="dashboard-section">
            <h2>Dashboard Overview</h2>
            <p>
              Overview of recycled and repurposed materials <br />
              Environmental impact metrics <br />
              Performance metrics
            </p>
          </div>

          <div className="parts-section mt-3">
            <h2>Aircraft Parts Database</h2>
            <div className="row">
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search parts..."
                />
              </div>
              <div className="col-2">
                <select className="form-select">
                  <option value="all">All categories</option>
                  <option value="engines">Engines</option>
                  <option value="wings">Wings</option>
                  <option value="landing-gear">Landing Gear</option>
                </select>
              </div>
              <div className="col">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
            <div className="parts-list row">
              {PartInformation({
                partName: "Part Name",
                materialComp: "Alluminium Alloy",
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
            </div>
          </div>

          <section className="dashboard mt-4">
            <h2>Dashboard Overview</h2>

            <div className="search-filter"></div>

            <div className="parts-list row">
              {PartInformation({
                partName: "Part Name",
                materialComp: "",
                age: "",
                condition: "",
                secondOption: "Identify for Repurposing or Recycling",
              })}
            </div>
          </section>

          <section className="manufacturers mt-4">
            <h2>Manufacturers and Airlines Section</h2>

            <div className="parts-list row">
              {PartInformation({
                partName: "Part Name",
                materialComp: "",
                age: "",
                condition: "",
                secondOption: "Arrange for Repurposing or Recycling",
              })}
            </div>
          </section>
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

export default HomePage;
