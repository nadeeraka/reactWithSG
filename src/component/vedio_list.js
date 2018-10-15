import React from 'react';
import ReactDOM from 'react-dom';

const VedioList =(props)=>
{
    return(
           <ul className='col-md-4 list-group'>
         { props.vedios.map((thumb)=>{return <VedioList_itam vedio={vedio}/>})}
           {props.vedios.length}
           </ul>
    );
}

export default VedioList;