import { useContext, createContext } from "react";
import { Group } from "../../interfaces/group";
import { Resource } from "../../interfaces/resource";

export interface Context {
  state: {
    resources: Resource[];
  };
  actions: {
    handleResources: (group: Group) => void;
    clearResources: () => void;
  };
}

export const ResourceContext = createContext({} as Context);
export const useResource = () => useContext(ResourceContext);
