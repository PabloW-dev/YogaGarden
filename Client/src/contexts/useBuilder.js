import { useContext, createContext } from "react";

export const BuilderContext = createContext();

export function useBuilder() {
    return useContext(BuilderContext);
}