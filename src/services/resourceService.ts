// /**
//  * @packageDocumentation
//  * @module Services/Resource
//  * Interacts with the Resource service.
//  */
import axios, { AxiosResponse } from "axios";
import axiosHelper, { axiosError, axiosResponse } from "../utils/axiosHelper";
import { ResourceByIdRequest, Resource } from "../interfaces/resource";
import { APIClient } from "../services/commonService";
/**
 * API Client to interact with the service.
 */

class ResourceService {
  async createResource(
    r: ResourceByIdRequest
  ): Promise<axiosResponse<Resource> | axiosError> {
    const url = `/resource`;
    let response: AxiosResponse;
    let result;
    try {
      response = await APIClient.get(url, { params: { id: r.id } });
      result = axiosHelper.handleResponse(response);
    } catch (err: any) {
      result = axiosHelper.handleError(err);
    }
    return result;
  }
}
