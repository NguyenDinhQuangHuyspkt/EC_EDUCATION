import React, { useEffect, useState } from 'react'
import { CardCourse } from '../../cards/card-course'
import { getAllCourses } from '../../../services/course/courses.svc'
import { IGetAllCoursesResponse } from '../../../services/course/type'

const ListCourses = () => {
  const [courses, setCourses] = useState<IGetAllCoursesResponse[]>()

  const fetchCourses = async () => {
    try {
      const response = await getAllCourses()
      setCourses(response)
    } catch (error) {
      console.error('Error fetching courses:', error)     
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {Array.isArray(courses) && courses.map((course) => (
        <CardCourse
          key={course.id}
          title={course.title}
          price={course.price}
          image={course.imageCourses}
          description={course.description}
          onLike={() => console.log('Liked', course.id)}
          onViewDetail={() => console.log('View details for', course.id)}
          isLiked={course.isLiked} 
        />
      ))}
    </div>
  )
}

export default ListCourses
