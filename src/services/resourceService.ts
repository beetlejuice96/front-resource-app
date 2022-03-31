// /**
//  * @packageDocumentation
//  * @module Services/Resource
//  * Interacts with the Resource service.
//  */
import { AxiosResponse } from "axios";
import axiosHelper, { axiosError, axiosResponse } from "../utils/axiosHelper";
import { ResourceByIdRequest, Resource } from "../interfaces/resource";
import { APIClient } from "../services/commonService";
import { Group } from "../interfaces/group";
/**
 * API Client to interact with the service.
 */
const URL = `/resource`;
class ResourceService {
  async getResource(
    r: ResourceByIdRequest
  ): Promise<axiosResponse<Resource> | axiosError> {
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

  async getAllResources(
    group: Group
  ): Promise<axiosResponse<Resource[]> | axiosError> {
    let response: AxiosResponse;
    let result;
    console.log(group);
    try {
      response = await APIClient.get(`${URL}/${group["_id"]}`);
      result = axiosHelper.handleResponse(response);
    } catch (err: any) {
      result = axiosHelper.handleError(err);
    }
    return result;
  }

  async createResource(
    r: Resource
  ): Promise<axiosResponse<Resource> | axiosError> {
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
export default new ResourceService();
