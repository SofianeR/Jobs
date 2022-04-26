import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Job from "./components/Job";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="container">
        <Job
          className={"redBox"}
          title={"Full Time Sales Associate - Sydney Boutique"}
          contractType={"CDI"}
          country={"Australie"}
          city={"Sydney"}
        />
        <Job
          className={"greenBox"}
          title={"Agent de Sécurité - Pantin"}
          contractType={"CDI"}
          country={"France"}
          city={"Pantin"}
        />
        <Job
          className={"yellowBox"}
          title={"Responsable d'Atelier (H/F)"}
          contractType={"CDD"}
          country={"France"}
          city={"Paris"}
        />
        <Job
          className={"blueBox"}
          title={"Chef de Projets"}
          contractType={"CDD"}
          country={"France"}
          city={"Paris"}
        />
        <Job
          className={"pinkBox"}
          title={"Développeur React.js"}
          contractType={"CDI"}
          country={"France"}
          city={"Paris"}
        />
        <Job
          className={"redBox"}
          title={"Sales Associate Stockholm"}
          contractType={"CDI"}
          country={"Suède"}
          city={"Stockholm"}
        />
        <Job
          className={"greenBox"}
          title={"Vendeur/se - Crans Montana"}
          contractType={"CDI"}
          country={"Suisse"}
          city={"Crans-Montana"}
        />
        <Job
          className={"yellowBox"}
          title={"CRM & Data Quality Analyst"}
          contractType={"CDI"}
          country={"USA"}
          city={"New York"}
        />
        <Job
          className={"blueBox"}
          title={"Infirmier (H/F)"}
          contractType={"CDI"}
          country={"France"}
          city={"Pantin"}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
