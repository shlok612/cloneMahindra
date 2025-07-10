import Footer from './footer';
import './App.css';
import { useEffect, useState } from "react";
function App() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timer for the glowing intro
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Loader screen
  if (loading) {
    return (
      <div className="intro-loader">
        <h1 className="glow-logo">Mahindra × Shlok </h1>
        <p>..........</p>
        <img src="/loadf.jpg" alt="AutoClub Logo" className="logo-glow" />
      </div>
    );
  }

  return (
    <>
    
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <header className="navbar">
          
          <h1 className="site-title">MAHINDRA <i> × </i> SHLOK</h1>
          <ul className="nav-links">...</ul>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#cars">Cars</a></li>
            <li><a href="#testdrive">Test Drive</a></li>
            <li>    </li>
          </ul>
        </header>
        <div className="hero-content">
          <h1>The Brand New THAR</h1>
          <p><b>Model 2025 —</b> <span className="price-tag"><b>₹22 L</b></span></p>
          <a 
  href="https://auto.mahindra.com/suv/thar/THRN.html" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="test-drive-btn"
>
  Explore
</a>
        </div>
      </section>

        <section className="car-grid-section" id="cars">
          <h2>We Are Mahindra Automotive</h2>
          
          <p>We make authentic SUVs that help you explore the impossible.<br></br> 
            Experience the best in tech, design, safety and 
            comfort in our range of products<br></br> made in India 🇮🇳, for the world.</p>
            <img src="/log.png" alt="AutoClub Logo" className="section-logo" />
          <div className="car-grid">
            {/* Car Cards... */}
          </div>
        </section>

        <section className="stats-section">
  <div className="stats-container">
    <div className="stat-card">
      <h2>941K+</h2>
      <p>Units sold in FY 25</p>
    </div>
    <div className="stat-card">
      <h2>2.6M+</h2>
      <p>Active Customers</p>
    </div>
    <div className="stat-card">
      <h2>10k+</h2>
      <p>Workforce</p>
    </div>
    <div className="stat-card">
      <h2>70+</h2>
      <p>Years of legacy</p>
    </div>
  </div>
</section>

        

       

      {/* THAR ROXX Section */}
      <section className="car-section">
        <div className="car-container">
          <img src="/thar.png" alt="Thar Roxx" className="car-image" />
          <div className="car-info">
            <h2>THAR ROXX</h2>
            <p>Ex. showroom price ₹12.99L – ₹23.39L</p>
            <div className="car-buttons">
              <a 
  href="https://auto.mahindra.com/suv/thar-roxx/TH5D.html" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="test-drive-btn"
>
  Explore
</a>

        <button onClick={() => {
  const section = document.getElementById("testdrive");
  section?.scrollIntoView({ behavior: "smooth" });
}} className="test-drive-btn">
  Book Test Drive
</button>
            </div>
          </div>
          
        </div>
        <p><br></br> <b><nbsp></nbsp>
        <nbsp></nbsp><nbsp></nbsp>(i)</b> <i>the explore button redirects 
          to official site.</i></p>
      </section>
      <section className="car-grid-section">
  <h2>Explore More Cars</h2>
  <div className="car-grid">
    {/* Car 1 */}
    <div className="car-card">
      <img src="/sco.jpg" alt="Scorpio" />
      <h3>Mahindra Scorpio</h3>
      <p><b>Starting ₹14.99L</b></p>
      <div className="car-buttons">
        <a 
  href="https://auto.mahindra.com/suv/scorpio-n/SCN.html" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="test-drive-btn"
>
  Explore
</a>

        <button onClick={() => {
  const section = document.getElementById("testdrive");
  section?.scrollIntoView({ behavior: "smooth" });
}} className="test-drive-btn">
  Book Test Drive
</button>

      </div>
    </div>

    {/* Car 2 */}
    <div className="car-card">
      <img src="/sbmg.jpg" alt="XUV 700" />
      <h3>Mahinra THAR</h3>
      <p><b>Starting ₹15.49L</b></p>
      <div className="car-buttons">
        <a 
  href="https://auto.mahindra.com/suv/thar/THRN.html" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="test-drive-btn"
>
  Explore
</a>

        <button onClick={() => {
  const section = document.getElementById("testdrive");
  section?.scrollIntoView({ behavior: "smooth" });
}} className="test-drive-btn">
  Book Test Drive
</button>

      </div>
    </div>

    {/* Car 3 */}
    <div className="car-card">
      <img src="/bolero.jpg" alt="Fortuner" />
      <h3>Mahindra Bolero</h3>
      <p><b>Starting ₹13L</b></p>
      <div className="car-buttons">
        <a 
  href="https://auto.mahindra.com/suv/bolero/BOL.html" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="test-drive-btn"
>
  Explore
</a>

        <button onClick={() => {
  const section = document.getElementById("testdrive");
  section?.scrollIntoView({ behavior: "smooth" });
}} className="test-drive-btn">
  Book Test Drive
</button>

      </div>
    </div>
        <div className="car-card">
      <img src="/xuv.jpg" alt="XUV 700" />
      <h3>Mahindra XUV 700</h3>
      <p><b>Starting ₹18.49 Lakh</b></p>
      <div className="car-buttons">
        <a 
  href="https://auto.mahindra.com/suv/xuv700/X700.html" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="test-drive-btn"
>
  Explore
</a>

        <button onClick={() => {
  const section = document.getElementById("testdrive");
  section?.scrollIntoView({ behavior: "smooth" });
}} className="test-drive-btn">
  Book Test Drive
</button>

      </div>
    </div>
    <div className="car-card">
      <img src="/xuv40.jpg" alt="Tata Harrier" />
      <h3>Mahindra XUV 400</h3>
      <p><b>Starting ₹15.00 Lakh</b></p>
      <div className="car-buttons">
        <a 
  href="https://auto.mahindra.com/suv/xuv3xo/X3XO.html" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="test-drive-btn"
>
  Explore
</a>

        <button onClick={() => {
  const section = document.getElementById("testdrive");
  section?.scrollIntoView({ behavior: "smooth" });
}} className="test-drive-btn">
  Book Test Drive
</button>

      </div>
    </div>
    <div className="car-card">
      <img src="/xev.jpg" alt="Tata Safari" />
      <h3>Mahindra XEV 9e</h3>
      <p><b>Starting ₹11.19 Lakh</b></p>
      <div className="car-buttons">
        <a 
  href="https://www.mahindraelectricsuv.com/esuv/xev-9e/MXV9.html" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="test-drive-btn"
>
  Explore
</a>

        <button onClick={() => {
  const section = document.getElementById("testdrive");
  section?.scrollIntoView({ behavior: "smooth" });
}} className="test-drive-btn">
  Book Test Drive
</button>

      </div>
    </div>

  </div>
</section>
<section className="test-drive-section" id="testdrive">
  <h2>Book a Test Drive</h2>
  <form className="test-drive-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Email Address" required />
    <select required>
      <option value="">Select Car</option>
      <option value="scorpio">Mahindra Scorpio Classic</option>
      <option value="xuv700">Mahindra Scorpio N</option>
      <option value="fortuner">Mahindra Bolero</option>
      <option value="thar">Mahindra XUV 400</option>
      <option value="thar">Mahindra XUV 700</option>
      <option value="thar">Mahindra XEV 9e</option>
      <option value="thar">Mahindra THAR</option>
      <option value="thar">Mahindra THAR ROXX</option>
    </select>
    <button type="submit">Request Test Drive</button>
  </form>
</section>
<Footer />

    </>
  );
}

export default App;
