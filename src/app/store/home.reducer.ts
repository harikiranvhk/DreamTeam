import { LOAD_SPINNER, STUDENT_ID_LIST,STUDENT_BY_ID, LOGIN_STATUS, USER_DETAILS,DATA_TO_UPDATE ,DB_UPDATE_DATA} from '../action';

export interface HomeState {
  loading: boolean;
  idList:any;
  student:any;
  userDetails:any;
  loginStatus:boolean;
  dataToUpdate:any;
  dbUpdateData:any
}
export const HOME_INIITIALSTATE: HomeState = {
  loading: false,
  idList:[],
  student:{},
  userDetails:null,
  loginStatus:false,
  dataToUpdate:{},
  dbUpdateData:{},
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
    case USER_DETAILS:
      return { ...state, userDetails: action.payload };
      break;

    case LOGIN_STATUS:
      return { ...state, loginStatus: action.payload };
      break;

      case DATA_TO_UPDATE:
        return {...state,dataToUpdate:action.payload};
        break;

     case DB_UPDATE_DATA:
       return {...state,dbUpdateData:action.payload};
    default:
      return state;
      break;
  }
}











///clear user details and token, and reroute to login page
