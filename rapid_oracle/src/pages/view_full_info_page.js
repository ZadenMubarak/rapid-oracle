import React from 'react'
import { useLocation } from 'react-router-dom'

import { Chip } from 'primereact/chip';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';

const ViewFullInfo = () => {
    
    const location = useLocation();
    const data = location.state;
  return (
    <div>
        <div className="bg-bluegray-400 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap ">
        <Image src={data.image} zoomSrc={data.image} alt="Image" width="80" height="60"  />
            <div className="font-bold mr-8">🔥 Popular!</div>
            <div className="align-items-center hidden lg:flex flex flex-wrap gap-2">
                <Chip label="Action" />
                <Chip label="Comedy" />
                <Chip label="Mystery" />
            </div>
        </div>
        

        {data.title}

        <div class="flex flex-wrap gap-1 md:gap-4 xl:gap-25">
        
            <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">
        
 
            </div>
            <div class="border-round w-12rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">2</div>
        </div>

        <div className="flex justify-content flex-wrap gap-2">
            <Card title="Title " className='w-20rem'>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>

            <Card title="Title " className='w-50%'>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    </div>
  )
}

export default ViewFullInfo