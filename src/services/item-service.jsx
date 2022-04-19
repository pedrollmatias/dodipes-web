import { privateApi } from "../services/api";

export const addItem = ({ body, storeId, categoryId }) =>
  privateApi.post(
    `/api/stores/${storeId}/categories/${categoryId}/items`,
    body
  );
