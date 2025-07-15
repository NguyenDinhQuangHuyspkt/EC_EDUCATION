export interface IGetAllCoursesResponse {
  id: string;
  title: string;
  price: string;
  imageCourses: string;
  description: string; 
  isLiked: boolean; 
}

export interface IGetCourseDetailResponse {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
}