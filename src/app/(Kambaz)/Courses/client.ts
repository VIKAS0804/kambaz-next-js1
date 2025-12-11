import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

const COURSES_API = `${HTTP_SERVER}/api/courses`;

const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

const USERS_API = `${HTTP_SERVER}/api/users`;

const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

// Course functions

export const findAllCourses = async () => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}`
  );
  return response.data;
};

export const findCourseById = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}`
  );
  return response.data;
};

export const findMyCourses = async () => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );
  return response.data;
};

export const createCourse = async (course: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}`,
    course
  );
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${COURSES_API}/${courseId}`
  );
  return response.data;
};

export const updateCourse = async (course: any) => {
  const response = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course
  );
  return response.data;
};

// Assignment functions

export const findAssignmentsForCourse = async (courseId: string) => {
  console.log("CLIENT: findAssignmentsForCourse called with courseId:", courseId);
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  console.log("CLIENT: findAssignmentsForCourse response:", response.data);
  return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  console.log("CLIENT: createAssignmentForCourse called");
  console.log("  courseId:", courseId);
  console.log("  assignment data:", assignment);
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  console.log("CLIENT: createAssignmentForCourse response:", response.data);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  console.log("CLIENT: updateAssignment called");
  console.log("  assignment:", assignment);
  console.log("  assignment._id:", assignment._id);
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  console.log("CLIENT: updateAssignment response:", response.data);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  console.log("CLIENT: deleteAssignment called with id:", assignmentId);
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  console.log("CLIENT: deleteAssignment response:", response.data);
  return response.data;
};

// Module functions

export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/modules`
  );
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const updateModule = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.put(
    `${COURSES_API}/${courseId}/modules/${module._id}`,
    module
  );
  return response.data;
};

export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axiosWithCredentials.delete(
    `${COURSES_API}/${courseId}/modules/${moduleId}`
  );
  return response.data;
};

// Enrollment functions

export const findMyEnrollments = async () => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/current/enrollments`
  );
  return response.data;
};

export const enrollInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${ENROLLMENTS_API}/current/${courseId}`
  );
  return response.data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/current/${courseId}`
  );
  return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/users`
  );
  return response.data;
};

