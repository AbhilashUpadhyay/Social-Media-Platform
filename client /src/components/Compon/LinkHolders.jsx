import React  from 'react'
import ProfileLink from './Small-components/ProfileLink'
import Data from '../DATA/Data';
import ProfileName from './Small-components/ProfileName';
import { contextData } from '../DATA/Context';
function LinkHolders() {

  // console.log(Data)
  


  return (

  <>
  <div className="link-holder-left w-full h-5/6  grid grid-row-6  ">

    {Data.map((e)=>{
      return(

       
        <contextData.Provider  value={e}>
         <ProfileLink >   </ProfileLink>
         </contextData.Provider>
       
        
       
       
      )
    })}
  </div>

  </>
 
  )
}


export {contextData};
export default LinkHolders;

