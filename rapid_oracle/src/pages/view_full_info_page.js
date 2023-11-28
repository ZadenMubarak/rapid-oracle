import React from 'react'
import { useLocation } from 'react-router-dom'

import { Chip } from 'primereact/chip';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';

const ViewFullInfo = () => {
    
    const location = useLocation();
    const data = location.state;
  return (
    <div>
        <div className="bg-bluegray-400 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap ">
        <Image src={data.image} zoomSrc={data.image} alt="Image" width="80" height="60" />
            <div className="font-bold mr-8">🔥 Popular!</div>
            <div className="align-items-center hidden lg:flex flex flex-wrap gap-2">
                <Chip label="Action" />
                <Chip label="Comedy" />
                <Chip label="Mystery" />
            </div>
        </div>   
        <div style={{height:"12px"}}></div>
        <div className="flex flex-wrap gap-1 md:gap-4 xl:gap-25">
            <Card title="currently used by: " className='w-20rem'>

                <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Adress</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Adress</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Adress</span>
                        </li>
                    </ul>
            </Card>

            <Card style={{width:'70%'}}>
            <span className="block text-2xl font-bold mb-1">Name</span>
            <span className="block text-2xl font-bold mb-1">Author: {data.author}</span>
            <div class="flex flex-row flex-wrap">
                    <div class="flex align-items-center justify-content-center w-20rem h-4rem  font-bold border-round m-2">
                        <p className="m-0">
                            details:  {data.long_details}
                        </p>
                    </div>
                    <div class="flex align-items-center justify-content-center w-20rem h-4rem font-bold border-round m-2">
                        <p className="m-0">
                            usage:
                        </p>
                    </div>
                    <Divider/>                    
            </div>

            <div style={{height:"20px"}}></div>

            <Button  severity='primary'>
                subscribe
            </Button>

            </Card>
        </div>
    </div>
  )
}

export default ViewFullInfo