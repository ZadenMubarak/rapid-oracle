import React, {useState} from 'react'

import { Editor } from 'primereact/editor';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import Blockies from 'react-blockies'; 

import { My_functions } from '../models/manage_functions_Model';

const ManageSubscriptions = () => {
  return (
    <div>
        <div className="bg-primary-800 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap " style={{height:"12rem", background:`url(https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Ribbons-and-Banners-PNG/Red_Banner_Transparent_PNG_Clipart.png?m=1590479490)`}}>
            {/* <img src={data.image} style={{width:'180px', height:'180px', borderRadius:"20%", position:"relative", top:"45px"}}/> */}

            <div style={{borderRadius:"50%", position:"relative", top:"75px"}}> 
                <Blockies seed={`data.title`} size={25} scale={8} spotColor='#7ED7C1' color='#dfe' />

            </div>
        </div>

        <div style={{height:"132px"}}></div>

        {/* </div> */}
        <div className='flex justify-content-center align-items-center'>
            <Card style={{width:'70%'}}>
                <span className="block text-2xl font-bold mb-1">view your function details and subscriptions </span>
                <div className="card">
                <TabView>
                    <TabPanel header="Listed">
                        <div className="card">
                        <Accordion>
                            {My_functions.map((func, index) => (
                            <AccordionTab key={index} header={func.name}>
                                <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </AccordionTab>
                            ))}
                            <div style={{ height: "200px" }}></div>
                        </Accordion>        
                    </div>
                        
                    </TabPanel>

                    <TabPanel header="Subscribed">
                        <p className="m-0">
                            {`data.usage`}
                        </p>
                        <Accordion >
                                <AccordionTab header="Functions you subscribed to">
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </AccordionTab>
                                <div style={{height:"200px"}}></div>


                            </Accordion>
                        {/* <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} readOnly style={{ height: '220px' }}/> */}
                    </TabPanel>

                </TabView>
            </div>
                <div style={{height:"20px"}}></div>
                {/* <Button  severity='primary' onClick={() => setVisible(true)} style={{position:"relative", left:"80%"}}> subscribe </Button> */}
                </Card>
        </div>
        <div style={{height:"132px"}}></div>
        
    </div>
  )
}

export default ManageSubscriptions;