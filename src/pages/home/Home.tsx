import React from 'react'
import { Banner } from '../../components/banner'
import { imagesData } from '../../data/images.data'
import { ListCourses } from '../../features/list/list-courses'

const Home = () => {
  return (
    <div className='bg-gray-100 font-quickSand'>
      <Banner 
        className='sticky top-0 z-10'
        image={imagesData.banner} 
        title='Hãy lựa chọn khóa học mà bạn yêu thích'
        description='Chúng tôi cung cấp các khóa học chất lượng cao với giảng viên hàng đầu' 
      />

      <div className='h-screen flex items-center justify-center'>
        <ListCourses />
      </div>
    </div>
  )
}


export default Home
