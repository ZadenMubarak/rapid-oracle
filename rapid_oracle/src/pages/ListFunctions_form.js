import React, { useState, useRef } from "react";

import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import { Toast } from 'primereact/toast';

const ListFunctions = () => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [usage, setUsage] = useState('');

    const toast = useRef(null);

    const hndleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const hndleNameChange = (event) => {
        setName(event.target.value)
    }

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-code" aria-label="Code"></button>
            </span>
        );
    };

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Form successfully submitted', life: 3000});
    }

    const header = renderHeader();



  return (
    <div>
        <Toast ref={toast} />
        <div style={{"height":"20px"}}></div>
        <div className="card flex align-items-center justify-content-center">
            <Card title="List Your Function"  style={{width:"50%"}}>
  
                <div className="">
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Function title</label>
                    <InputText placeholder='Title' className="w-full mb-3"/>

                    <label htmlFor="email" className="block text-900 font-medium mb-2">Name</label>
                    <InputText placeholder='Name' className="w-full mb-3"/>

                    <label htmlFor="email" className="block text-900 font-medium mb-2">Author</label>

                    <InputText placeholder='Author' className="w-full mb-3"/>

                    <label htmlFor="email" className="block text-900 font-medium mb-2">Imagge url</label>
                    <InputText placeholder='Image' className="w-full mb-3"/>

                    <label htmlFor="email" className="block text-900 font-medium mb-2">Short description</label>
                    <InputTextarea placeholder='Short details' className="w-full mb-3"/>


                    <label htmlFor="email" className="block text-900 font-medium mb-2">long description</label>
                    <InputTextarea placeholder='long details' className="w-full mb-3"/>

                    <label htmlFor="email" className="block text-900 font-medium mb-2">Usage</label>
                    <Editor placeholder="Put in a little code snippet to show the usage" value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
                </div>

                <Divider/>

                <Button label="Submit" severity="primary" className="w-full" onClick={showSuccess} />
                    
            </Card>
        </div>
    </div>
  )
}

export default ListFunctions
