import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Chip } from 'primereact/chip'
import { InputText } from 'primereact/inputtext'

import { market_card } from '../models/market_card_model';

const ViewCards = () => {
    const navigate = useNavigate();
  const cardTemplate = (card) => {
    const data = {
        title: card.title,
        image: card.image,
        short_details: card.short_details,
        long_details: card.long_details
    }
    return (
        <div className='flex flex-wrap gap-0.05'>
      <Divider/>  
      <Card title={card.title}>
      <Divider/>
        <img src={card.image} alt={card.title} />
        <Divider/>
        <div>{card.short_details}</div>
        <Divider/>
        <Button label='open' severity='primary' size='medium' onClick={() => {navigate('/view-functions-fully', {state: data})}}/>
        <div style={{height:"30px"}}></div>
      </Card>
      <Divider/>
      </div>
    );
  };

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="p-grid p-justify-center">
    
        <div className="bg-bluegray-400 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap ">
            <div className="font-bold mr-8">🔥 Popular functions !</div>
            <div className="align-items-center hidden lg:flex flex flex-wrap gap-2">
                <Chip label="Action" />
                <Chip label="Comedy" />
                <Chip label="Mystery" />
            </div>
        </div>

        <div className="text-3xl font-medium text-900 mb-3">Available funtions</div>

        <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center h-4rem  font-bold border-round m-2">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>
            </div>
        </div>

     
    

        <div style={{height:"20px"}}></div>
      <div className="p-col-12 p-md-8">
        <Carousel
          value={market_card}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={cardTemplate}
        />
      </div>
    </div>
  );
};

export default ViewCards;