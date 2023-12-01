import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { Divider } from 'primereact/divider';

import { AppStateService } from '../Appstate-sevice/AppState.service';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const service = new AppStateService();

    function handelWalletConnectEvent(){
        if (service.connected){
            console.log('connected');
        }else{
            service.connectToMetaMask()

        }
    }


    const startContent = (
        <React.Fragment>
            <Button icon="pi pi-bars p-toolbar-separator mr-2" className="p-button mr-2" onClick={() => setVisible(true)} severity="secondary" text/>
            <Button label="Rapid.Oracle" text disabled severity='info' />

            <Sidebar title='Side Bar' visible={visible} onHide={() => setVisible(false)} >
                <Divider />
                <Button label='Home' size='large' text raised style={{width:"100%"}} icon='pi pi-home' onClick={() => {navigate('/'); setVisible(false)}}/>
                <div style={{height:'5px'}}></div>
                <Button label='Docs' size='large' text raised style={{width:"100%"}} icon='pi pi-folder-open' onClick={() => {navigate('/documentation'); setVisible(false)}}/>
                <div style={{height:'5px'}}></div>
                <Button label='Tutorials' size='large' text raised style={{width:"100%"}} icon='pi pi-desktop' onClick={() => {navigate('/tutorials'); setVisible(false)}}/>
                <div style={{height:'5px'}}></div>
                <Button label='List function' size='large' text raised style={{width:"100%"}} icon='pi pi-plus' onClick={() => {navigate('/list-function'); setVisible(false)}}/>
                <div style={{height:'5px'}}></div> 
                <Button label='View functions' size='large' text raised style={{width:"100%"}} icon='pi pi-eye' onClick={() => {navigate('/view-functions-cards'); setVisible(false)}}/>
                <div style={{height:'5px'}}></div> 
                <Button label='Manage subscriptions' size='large' text raised style={{width:"100%"}} icon='pi pi-wrench' onClick={() => {navigate('/manage-subscriptions'); setVisible(false)}}/>
            </Sidebar>
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <Button label='Connect wallet' icon="pi pi-id-card" className="p-button-warning mr-2" onClick={service.connectToMetaMask}/>
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar start={startContent} end={endContent} />
        </div>
    );
}

export default Navbar;