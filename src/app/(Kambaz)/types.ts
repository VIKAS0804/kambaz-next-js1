export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
  role: "STUDENT" | "FACULTY" | "TA" | "ADMIN" | "USER";
  loginId: string;
  sis_id: string;
  dob?: string;
}

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  image: string;
  author?: string;
}

export interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

export interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
  editing?: boolean;
}

export interface RootState {
  accountReducer: {
    currentUser: User | null;
  };
  coursesReducer: {
    courses: Course[];
  };
  modulesReducer: {
    modules: Module[];
  };
  enrollmentsReducer: {
    enrollments: {
      _id: string;
      user: string;
      course: string;
    }[];
  };
}