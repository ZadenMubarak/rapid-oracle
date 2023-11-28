import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'

import { Chip } from 'primereact/chip';
import { Rating } from "primereact/rating";
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const ViewFullInfo = () => {
    
    const location = useLocation();
    const data = location.state;

    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button className='w-full' label="submit" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

  return (
    <div>
        <div className="bg-primary-800 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap ">
        <img src={data.image} style={{width:'80px', height:'80px', borderRadius:"20%", position:"relative", top:"45px"}}/>
            <span className="block text-2xl font-bold mb-1">🔥 Banner</span>
        </div>   

        <div style={{height:"42px"}}></div>

        <div className="flex flex-wrap gap-1 md:gap-4 xl:gap-25">
            <Card title="number of subscribers " className='w-20rem'>
                <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            
                            <span>Rating  </span>  :<Rating value={5} readOnly cancel={false} />
                        </li>
                    </ul>
            </Card>

            <Card style={{width:'70%'}}>
            <span className="block text-2xl font-bold mb-1">Name</span>
            <span className="block text-2xl font-bold mb-1">Author: {data.author}</span>
            <div className="card">
            <TabView>
                <TabPanel header="Details">
                    <p className="m-0">
                        {data.long_details}
                    </p>
                </TabPanel>
                <TabPanel header="Usage">
                    <p className="m-0">
                        {data.usage}
                    </p>
                </TabPanel>

            </TabView>
        </div>
            <div style={{height:"20px"}}></div>
            <Button  severity='primary' onClick={() => setVisible(true)} style={{position:"relative", left:"80%"}}> subscribe </Button>
            </Card>
        </div>
        <Dialog header="Insert your contract address" draggable={false} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
            <InputText placeholder="Enter Address here" style={{position:"relative", left:"25%"}} />
            

        </Dialog>
    </div>
  )
}

export default ViewFullInfo