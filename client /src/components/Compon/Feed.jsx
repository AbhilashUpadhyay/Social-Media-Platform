import React, { useEffect } from 'react'
import ProfileName from './Small-components/ProfileName';
import './Feed.css'
import ProfilePhoto from './Small-components/ProfilePhoto';

function Feed() {

   setInterval(() => {
    let fetchApi = async ()=>{
        let responce = await fetch('https://randomuser.me/api/')
        let data  = await responce.json();     

        let firstName = data.results[0].name.first;
        let lastName = data.results[0].name.last;

        console.log(data)
       
        let feedContainer = document.getElementById('feedContainer');
//    userPost
        let userPost = document.createElement('div');
        userPost.classList.add('userPost');
//    NameTag
        let nameTag = document.createElement('div');
        nameTag.classList.add('nameTag')
        nameTag.innerText = firstName +' ' + lastName;

//  profile-photo 
        let profilePhoto = document.createElement('div');
        profilePhoto.classList.add('profilePhoto');
        profilePhoto.style.background = `url( ${data.results[0].picture.thumbnail}) no-repeat center center/cover`;

//    profile        

    let profile = document.createElement('div');
    profile.classList.add('profile') ;
    profile.appendChild(profilePhoto);
    profile.appendChild(nameTag);
   
    //Post-photo

    let postPhoto = document.createElement('div');
    postPhoto.classList.add('postPhoto');
    postPhoto.style.background = `url( ${data.results[0].picture.large}) no-repeat center center/cover`;
    console.log(data.results[0].picture.large);    

    //attention Box
    let AttentionBox = document.createElement('div');
    AttentionBox.classList.add('attentionBox');
    // Link button
    let LikeButton = document.createElement('button');
    LikeButton.classList.add('button-like');
    

//heart icon
     
    let heartIcon = document.createElement('i');
    heartIcon.classList.add('fa');
    heartIcon.classList.add('fa-heart');
    LikeButton.appendChild(heartIcon)

    //span

    let span = document.createElement('span');
    span.innerText = 'Like';
    LikeButton.addEventListener('click',()=>{
        LikeButton.classList.toggle("liked")
    })
    LikeButton.appendChild(span)



        AttentionBox.appendChild(LikeButton)
        userPost.appendChild(profile);
        userPost.appendChild(postPhoto);
        userPost.appendChild(AttentionBox);

        feedContainer.appendChild(userPost);


         
        }
    
    fetchApi()
   }, 100000000);
        
      
   


  return (
    <>
    {/* <button className="button button-like">

  <span>Posts</span>
</button> */}
   
    <div className="Feed-container w-11/12 flex flex-col-reverse gap-4 rounded-lg  items-center " id='feedContainer'>
    
  

    </div>

    </>
  )
}

export default Feed;