// actions/userActions.js
export const saveUserData = userData => ({
  type: 'SAVE_USER_DATA',
  payload: userData,
});
// actions/userActions.js
export const updateUserData = userData => ({
  type: 'UPDATE_USER_DATA',
  payload: userData,
});
export const saveCompanyUserData = userData => ({
  type: 'SAVE_COMPANY_USER_DATA',
  payload: userData,
});
export const updateCompanyUserData = userData => ({
  type: 'UPDATE_COMPANY_USER_DATA',
  payload: userData,
});
// reducers/userReducer.js
const initialState = {
  userData: null,
  companyUserData: null,
};

// reducers/userReducer.js
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'UPDATE_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'SAVE_COMPANY_USER_DATA':
      return {
        ...state,
        companyUserData: action.payload,
      };
    case 'UPDATE_COMPANY_USER_DATA':
      return {
        ...state,
        companyUserData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
