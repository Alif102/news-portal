import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import CategoryComponent from './CategoryComponent/CategoryComponent';

const Binodon = () => {


 

  return (
    <div>

      <CategoryComponent categoryName="বাণিজ্য" />
      

    </div>
  )
}

export default Binodon


{/* <div className='col-span-4'>
          <div className="flex items-center justify-center w-[100%] h-[350px]  font-bold bg-[#D9D9D9]">ADD</div>
        </div> */}