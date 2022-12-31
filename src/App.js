import { createContext, useState } from "react";
import { CompanySelector } from "./containers";
import { Header } from "./components";
import { Home } from "./pages";
import "./App.css";

export const ParametersContext = createContext({});

const App = () => {
  const [company, setCompany] = useState("");

  const [data, setData] = useState({});

  return (
    <div className="App">
      <ParametersContext.Provider value={{ company, data }}>
        <Header>
          <CompanySelector
            setCompany={setCompany}
            company={company}
            setData={setData}
          />
        </Header>
        <Home />
      </ParametersContext.Provider>
    </div>
  );
};

export default App;
