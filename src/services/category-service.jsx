import { privateApi } from "../services/api";

export const addCategory = ({ body, storeId }) =>
  privateApi.post(`/api/stores/${storeId}/categories`, body);

export const getStoreCategoriesWithItems = ({ storeId }) =>
  privateApi.get(`/api/stores/${storeId}/categories`);
