import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'

import { Editor } from 'primereact/editor';
import { Rating } from "primereact/rating";
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import Blockies from 'react-blockies'; 

import { AddressArray } from '../models/subscriber_address_model';

const ViewFullInfo = () => {
    
    const location = useLocation();
    const data = location.state;

    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button className='w-full' label="submit" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const [text, setText] = useState('');

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-code" aria-label="Code"></button>
            </span>
        );
    };

    const header = renderHeader();

  return (
    <div>
        <div className="bg-primary-800 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap " style={{height:"12rem", background:`url(https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Ribbons-and-Banners-PNG/Red_Banner_Transparent_PNG_Clipart.png?m=1590479490)`}}>
            {/* <img src={data.image} style={{width:'180px', height:'180px', borderRadius:"20%", position:"relative", top:"45px"}}/> */}
            <div style={{borderRadius:"50%", position:"relative", top:"75px"}}> 
                <Blockies seed={`${data.title}`} size={25} scale={8} spotColor='#7ED7C1' color='#dfe' />
            </div>
        </div>   

        <div style={{height:"32px"}}></div>

        <div className="flex justify-content-end flex-wrap">
            <div className="flex align-items-center justify-content-center w-14rem h-4rem font-bold border-round m-2">
            <Button icon="pi pi-circle-fill " rounded text severity="success" aria-label="Search" disabled/>
            Live
            </div>
        </div>
        <div style={{height:"52px"}}></div>

        <div className="flex flex-wrap gap-1 md:gap-4 xl:gap-25">
            <Card title="number of subscribers " className='w-20rem' style={{height:"420px"}}>
                <ul className="list-none p-0 m-0 flex-grow-1">
                <li className="flex align-items-center mb-3">
                        <i className="pi pi-eye text-primary-500 mr-2"></i>
                        <span>{AddressArray.length} developes have subscribed</span>
                    </li>
                    <Divider />
                            
                    {AddressArray.map((address, index) => (
                        <li key={index} className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>{address.address}</span>
                        </li>
                    ))}
                            
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
                    <span>Rating  </span>  :<Rating value={5} readOnly cancel={false} />
                </TabPanel>
                <TabPanel header="Usage">
                    <p className="m-0">
                        {data.usage}
                    </p>
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} readOnly style={{ height: '220px' }}/>
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