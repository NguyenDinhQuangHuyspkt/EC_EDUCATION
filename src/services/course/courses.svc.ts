import { AxiosResponse } from "axios";
import { AxiosInstance } from "../axios-instance.svc";
import { IGetAllCoursesResponse } from "./type";

const API_END_POINTS_COURSES = {
  GET:{
    all: '/EC',
    detail: '/courses/:id' ,
  }
};

export const getAllCourses = async () : Promise<IGetAllCoursesResponse[]>=> {
  const response : AxiosResponse<IGetAllCoursesResponse[]> = await AxiosInstance.get(API_END_POINTS_COURSES.GET.all);
  return response.data;
}

export const getCourseDetail = async (id: string) => {
  const response = await AxiosInstance.get(API_END_POINTS_COURSES.GET.detail.replace(':id', id));
  return response.data;
}
