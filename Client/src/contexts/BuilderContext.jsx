import { useState } from "react";
import { BuilderContext} from "./useBuilder";


export function BuilderProvider({ children }) {
    const [step, setStep] = useState(1);

    const [seedData, setSeedData] = useState({
        name: "",
        objective: "",
        duration: 15,
        level: "beginner"
    });

    const [outbreakData, setOutbreakData] = useState({
        sections: []
    });

    const [branchData, setBranchData] = useState({
        sections: {},
    });

    return (
        <BuilderContext.Provider value={{
            step,
            setStep,
            seedData,
            setSeedData,
            outbreakData,
            setOutbreakData,
            branchData,
            setBranchData
        }}>
            {children}
        </BuilderContext.Provider>
    );
}