import { GET_ALL_DATA,GET_ALL_STUDENTS} from '../action';
import { StudentModel } from '../Models/StudentModel';

export interface StaffState{
    studentData:Array<string>;
    studentsList:Array<StudentModel>
}

export const STAFF_INITIAL_STATE:StaffState={
studentData:[],
studentsList:[]
}
export function staffReducer(state = STAFF_INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_DATA:
      return { ...state, studentData: action.payload };
      break;

    case GET_ALL_STUDENTS:
      return { ...state, studentsList: action.payload };
      break;

    default:
      return state;
      break;
  }
}