import { createContext, useState, useContext, useEffect } from "react";

export const CauseContext = createContext();

export const CauseProvider = ({ children }) => {
  const [causes, setCauses] = useState(null);

  useEffect(() => {
    fetch("/causes").then((r) => {
      if (r.ok) {
        r.json().then((causes) => setCauses(causes))
      }
    });
  }, []);

  console.log(causes)

  return (
    <CauseContext.Provider value={[causes, setCauses]}>
      {children}
    </CauseContext.Provider>
  );
};

export const useCauses = () => {
  return useContext(CauseContext);
};

