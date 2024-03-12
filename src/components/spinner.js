import React from 'react';
import loading from './loading.gif'

const spinner =()=> {

    return (
      <div className='spinnerbody'>
        <div className="spinnerbg text-center">
        <img src={loading} alt="loading" />
        </div>
      </div>
    )
  
}

export default spinner
