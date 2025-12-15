import "./App.css";

import Card from "./components/Card.tsx";

function App() {
  return (
    <>
      <div className="main-content">
        <div className="cards">
          <Card name="James Alexander Smith" location="New York" position="Software Engineer" age={28} height={1.78} sex='M' isEmployed={true} />
          <Card name="Emily Rose Johnson" location="Los Angeles" position="Product Manager" age={34} height={1.65} sex='F' isEmployed={false} />
          <Card name="Michael Andrew Brown" location="Chicago" position="Data Analyst" age={22} height={1.83} sex='M' isEmployed={true} />
          <Card name="Sarah Elizabeth Wilson" location="Houston" position="UX Designer" age={28} height={1.78} sex='F' isEmployed={false} />
          <Card name="Daniel Christopher Miller" location="Phoenix" position="DevOps Engineer" age={45} height={1.72} sex='M' isEmployed={true} />
          <Card name="Olivia Grace Taylor" location="San Antonio" position="Marketing Specialist" age={30} height={1.59} sex='F' isEmployed={true} />
          <Card name="Matthew Ryan Anderson" location="San Diego" position="HR Coordinator" age={27} height={1.64} sex='M' isEmployed={true} />
          <Card name="David Benjamin Harris" location="Dallas" position="Software Engineer" age={36} height={1.53} sex='M' isEmployed={false} />
        </div>
      </div>
    </>
  );
}

export default App;
