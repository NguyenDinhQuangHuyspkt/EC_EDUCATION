import React from 'react'
import { CardCourse } from '../../cards/card-course'

const ListCourses = () => {
  return (
    <CardCourse
      title="Lập trình React từ A-Z"
      price="499.000đ"
      image="/images/react-course.jpg"
      description="Khóa học giúp bạn nắm vững React và xây dựng dự án thực tế."
      onLike={() => console.log('Liked!')}
      onViewDetail={() => console.log('Go to detail')}
      isLiked={true}
    />
  )
}

export default ListCourses
