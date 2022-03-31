import React, { useEffect, useState } from "react";
import { Resource } from "../../interfaces/resource";
import { Group } from "../../interfaces/group";

import resourceService from "../../services/resourceService";
import { useError } from "../errorProvider/ErrorContext";
import { ResourceContext, Context } from "./resourceContext";

const ResourceProvider: React.FC = ({ children }) => {
  const [resources, setResources] = useState<Resource[]>([]);
  const { actions: actionsError } = useError();

  const handleResources = async (group: Group) => {
    setResources([]);
    try {
      let results = await resourceService.getAllResources(group);
      if (results.success) {
        setResources(results.payload);
      } else {
        actionsError.openToastError("NO SE PUDIOERON OBTENER LOS RECURSOS!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const clearResources = () => {
    setResources([]);
  };

  // useEffect(() => {
  //   handleResources();
  // }, []);

  let state: Context["state"] = { resources };
  let actions: Context["actions"] = { handleResources, clearResources };

  return (
    <ResourceContext.Provider value={{ state, actions }}>
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceProvider;
