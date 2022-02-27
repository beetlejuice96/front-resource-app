import { AxiosResponse } from "axios";
import axiosHelper, { axiosError, axiosResponse } from "../utils/axiosHelper";
import { APIClient } from "../services/commonService";
import { Group, GroupByIdRequest } from "../interfaces/group";
import { Resource } from "../interfaces/resource";

/**
 * API Client to interact with the service.
 */

const URL = "/group";

class GroupService {
  async gerGroupService(
    r: GroupByIdRequest
  ): Promise<axiosResponse<Group> | axiosError> {
    let response: AxiosResponse;
    let result;
    try {
      response = await APIClient.get(URL, { params: { id: r.id } });
      result = axiosHelper.handleResponse(response);
    } catch (err: any) {
      result = axiosHelper.handleError(err);
    }
    return result;
  }

  async createGroup(r: Group): Promise<axiosResponse<Resource> | axiosError> {
    let response: AxiosResponse;
    let result;
    try {
      response = await APIClient.post(URL, r);
      result = axiosHelper.handleResponse(response);
    } catch (err: any) {
      result = axiosHelper.handleError(err);
    }
    return result;
  }
}

export default new GroupService();
