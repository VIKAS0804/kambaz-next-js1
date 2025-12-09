import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentsState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }: { payload: Enrollment }) => {
      state.enrollments = [...state.enrollments, enrollment];
    },
    deleteEnrollment: (state, { payload: enrollmentId }: { payload: string }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== enrollmentId
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

