import { UPDATE_ADMIN_STATUS } from "../constants";

const INIT_STATE = {
  admin: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_ADMIN_STATUS:
      return {
        admin: action.update,
      };
    default:
      return state;
  }
};
