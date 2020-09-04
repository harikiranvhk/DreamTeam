import { LOAD_SPINNER, STUDENT_ID_LIST,STUDENT_BY_ID } from '../action';

export interface HomeState {
  loading: boolean;
  idList:any;
  student:any;
}
export const HOME_INIITIALSTATE: HomeState = {
  loading: false,
  idList:[],
  student:{}
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
      case STUDENT_BY_ID:
        return { ...state, student: action.payload };
        break;
  

    default:
      return state;
      break;
  }
}