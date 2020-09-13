import { LOAD_SPINNER, STUDENT_ID_LIST,STUDENT_BY_ID, LOGIN_STATUS, USER_DETAILS,
  DATA_TO_UPDATE ,DB_UPDATE_DATA, LOGIN_MESSAGE,ALL_STUDENTS_LIST} from '../action';
import { StudentModel } from '../Models/StudentModel';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface HomeState {
  loading: boolean;
  idList:any;
  student:StudentModel;
  userDetails:any;
  loginStatus:boolean;
  dataToUpdate:any;
  dbUpdateData:any;
  allStudentsList:Array<StudentModel>
  showLoginMessage:boolean;//write exact modal objects
}
export const HOME_INIITIALSTATE: HomeState = {
  loading: false,
  idList:[],
  student:new StudentModel(),
  userDetails:null,
  loginStatus:false,
  dataToUpdate:{},
  dbUpdateData:{},
  showLoginMessage:false,
  allStudentsList:[],
};
export function homeReducer(state = HOME_INIITIALSTATE, action) {
  // debugger;
  switch (action.type) {
    case LOAD_SPINNER:
      return { ...state, loading: action.payload }
    case STUDENT_ID_LIST:
      return { ...state, idList: action.payload }
    case STUDENT_BY_ID:
      return { ...state, student: action.payload }
    case USER_DETAILS:
      return { ...state, userDetails: action.payload }

    case LOGIN_STATUS:
      return { ...state, loginStatus: action.payload }

      case DATA_TO_UPDATE:
        return {...state,dataToUpdate:action.payload};

     case DB_UPDATE_DATA:
       return {...state,dbUpdateData:action.payload};

       case LOGIN_MESSAGE:
         return {...state,showLoginMessage:action.payload};

         case ALL_STUDENTS_LIST:
           return {...state,allStudentsList:action.payload};

    default:
      return state
  }
}











///clear user details and token, and reroute to login page
