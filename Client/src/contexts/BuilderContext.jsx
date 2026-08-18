import { useCallback, useState } from "react";
import { BuilderContext} from "./useBuilder";


export function BuilderProvider({ children }) {
    const [step, setStep] = useState(1);

    const [seedData, setSeedData] = useState({
        name: "",
        date: "",
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

    const resetBuilder = useCallback(() => {
        setStep(1);

        setSeedData({
            name: "",
            date: "",
            objective: "",
            duration: 15,
            level: "beginner"
        });

        setOutbreakData({
            sections: []
        });

        setBranchData({
            sections: {}
        });
    }, [])

    return (
        <BuilderContext.Provider value={{
            step,
            setStep,
            seedData,
            setSeedData,
            outbreakData,
            setOutbreakData,
            branchData,
            setBranchData,
            resetBuilder
        }}>
            {children}
        </BuilderContext.Provider>
    );
}