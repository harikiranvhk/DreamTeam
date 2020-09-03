import { LOAD_SPINNER, STUDENT_ID_LIST } from '../action';

export interface HomeState {
  loading: boolean;
  idList:any;
}
export const HOME_INIITIALSTATE: HomeState = {
  loading: false,
  idList:[]
};
export function homeReducer(state = HOME_INIITIALSTATE, action) {
  // debugger;
  switch (action.type) {
    case LOAD_SPINNER:
      return { ...state, loading: action.payload };
      break;
      case STUDENT_ID_LIST:
      return { ...state, idList: action.payload };
      break;

    default:
      return state;
      break;
  }
}