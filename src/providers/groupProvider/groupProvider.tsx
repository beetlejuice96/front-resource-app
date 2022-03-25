import React, { useEffect, useState } from "react";
import { Group } from "../../interfaces/group";
import groupService from "../../services/groupService";
import { useError } from "../errorProvider/ErrorContext";
import { Context, GroupContext } from "./groupContext";

const GroupProvider: React.FC = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const { actions: actionsError } = useError();

  const handleGroups = async () => {
    try {
      let results = await groupService.getAllGroups();
      if (results.success) {
        setGroups(results.payload);
      } else {
        actionsError.openToastError("NO SE PUDIOERON OBTENER LOS GRUPOS!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGroups();
  }, []);

  let state: Context["state"] = { groups };
  let actions: Context["actions"] = { handleGroups };

  return (
    <GroupContext.Provider value={{ state, actions }}>
      {children}
    </GroupContext.Provider>
  );
};

export default GroupProvider;
