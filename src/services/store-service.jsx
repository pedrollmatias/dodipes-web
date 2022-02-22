import { privateApi } from "../services/api";

export const getStoresByUser = ({ userId }) =>
  privateApi.get(`/api/users/${userId}/stores`);

export const checkStorenameAvailability = ({ storename }) =>
  privateApi.post(`/api/stores/storename-availability`, { storename });
