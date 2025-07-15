import React from 'react'
import { Banner } from '../../components/banner'
import { ListCourses } from '../../features/list/list-courses'
import { getImagesAssets } from '../../utils/images.utils'


const Home = () => {
  return (
    <div className='bg-gray-100 font-quickSand'>
      <Banner 
        className='sticky top-0 z-10'
        image={getImagesAssets('img01.png', 'banner')} 
        title='Hãy lựa chọn khóa học mà bạn yêu thích'
        description='Chúng tôi cung cấp các khóa học chất lượng cao với giảng viên hàng đầu' 
      />

      <div className='flex items-center justify-center'>
        <ListCourses />
      </div>
    </div>
  )
}


export default Home
