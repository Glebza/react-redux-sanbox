import React from 'react';
import icon from './rick-error.png';

const ErrorIndicator = ({errorMessage}) =>{

   return (<div>
       <img src={icon} alt='error-icon'/>
       <p>{errorMessage}</p>
   </div>);

} ;
export default ErrorIndicator;