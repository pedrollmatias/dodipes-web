import { privateApi } from "../services/api";

export const getStoresByUser = ({ userId }) =>
  privateApi.get(`/api/users/${userId}/stores`);

export const checkStorenameAvailability = ({ storename }) =>
  privateApi.get("/api/storenames/availability", { params: { storename } });

export const getAddressByZipCode = ({ zipCode }) =>
  privateApi.get(`/api/addresses/${zipCode}`);

export const addStore = ({ body, userId }) =>
  privateApi.post(`/api/users/${userId}/stores`, body);
