import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { Divider } from 'primereact/divider';

import { AppStateService } from '../Appstate-sevice/AppState.service';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Connect your wallet');
    const service = new AppStateService();
    const navigate = useNavigate();

    if (service.connected === false){
        setButtonLabel(service.walletAddress)
    }

    const startContent = (
        <React.Fragment>
            <Button icon="pi pi-bars p-toolbar-separator mr-2" className="p-button mr-2" onClick={() => setVisible(true)} />
            <div className="mb-3 font-bold text-1xl">
                <span className="text-blue-600">Rapid.Oracle</span>
            </div>
            <Sidebar title='Side Bar' visible={visible} onHide={() => setVisible(false)} >
                <Divider />
                <Button label='Home' size='large' text raised style={{width:"100%"}} icon='pi pi-home'onClick={() => {navigate('/'); setVisible(false)}}/>
                <div style={{height:'5px'}}></div>
                <Button label='Docs' size='large' text raised style={{width:"100%"}} />
                <div style={{height:'5px'}}></div>
                <Button label='Tutorials' size='large' text raised style={{width:"100%"}}/>
                <div style={{height:'5px'}}></div>
                <Button label='List function' size='large' text raised style={{width:"100%"}}/>
                <div style={{height:'5px'}}></div> 
                <Button label='View functions' size='large' text raised style={{width:"100%"}} onClick={() => {navigate('/view-functions-cards'); setVisible(false)}}/>
            </Sidebar>
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <Button label='Connect your wallet' icon="pi pi-id-card" className="p-button-success mr-2" />
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar start={startContent} end={endContent} />
        </div>
    );
}

export default Navbar;