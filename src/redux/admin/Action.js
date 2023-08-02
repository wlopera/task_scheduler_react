import { UPDATE_ADMIN_STATUS } from "../constants";

export const updateLogin = (update) => {
  return {
    type: UPDATE_ADMIN_STATUS,
    update,
  };
};