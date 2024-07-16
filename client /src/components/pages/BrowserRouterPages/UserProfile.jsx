import React from 'react'
import './UserProfile.css'
import Feed from '../../Compon/Feed'
import Left from '../Left'
import ImgDd from '../../../images/pexels-eberhardgross-1612353.jpg'
import Right from '../Right'

function UserProfile() {

    let BackImg = {
        background :`url(${ImgDd}) no-repeat center center/cover`
    }
  return (
    <>
    <div class="padding text-sm flex justify-between ">
        <Left></Left>
        
    <div class="col-md-8 mt-5 ">
       
        <div class="card  "> <div className="card-img-top w-full h-full" style={BackImg} />
            <div class="card-body little-profile ">
                 <div class="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user"/></div> 
                  <h3 class="m-b-0 text-lg">Abhilash Upadhyay</h3>
                <p>Web Designer &amp; Developer</p> 
                <div class="row flex text-center gap-5 m-t-5">
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">10434</h3><small>Articles</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">434K</h3><small>Followers</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">5454</h3><small>Following</small>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
<div class=" w-screen text-sm gap-0 flex justify-evenly mt-6">
    <div className=" w-72 h-6"></div>
    <div className="FeedContainer w-2/5  rounded-lg">
     <Feed></Feed>
 </div>
 <Right/>
 

</div>

    </>
  )
}

export default UserProfile;