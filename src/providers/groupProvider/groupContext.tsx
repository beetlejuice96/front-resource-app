import { useContext, createContext } from "react";
import { Group } from "../../interfaces/group";

export interface Context {
  state: {
    groups: Group[];
  };
  actions: {
    handleGroups: () => void;
  };
}

export const GroupContext = createContext({} as Context);
export const useGroup = () => useContext(GroupContext);
