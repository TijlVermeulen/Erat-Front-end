
import LecturerService from "@services/LecturerService";
import CourseService from "@services/CourseService";
import { Course, Lecturer } from "@types";
import { useState } from "react";

type PageProps = {};

type DataResult = {};

// fetch data for the page
// use LecturerService.getLecturerById and CourseService.getCourseById
const getData = async (lecturerId: string, courseId: string) => {};

const CreateSchedulePage = async () => {
  return (
    <>
      <h1>Hello from a dynamic route</h1>
    </>
  );
};

export default CreateSchedulePage;
