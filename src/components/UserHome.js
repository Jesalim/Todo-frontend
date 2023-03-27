import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserHome() {

  const redirect = useNavigate()
  const userInfo = localStorage.getItem('userInfo')
  const userLastName = localStorage.getItem('userLastName')

 
  console.log(userInfo)
  return (
    <>
    <div className='homeContainer'>
    <div className='currentJob'>
    {userInfo ? (<h1> <span style={{color:'Green'}}>{userInfo}</span>, <br />the todo Picaso</h1>):(<><h1>Be manager of <br /> the Todo App <span className='access' onClick={()=>redirect('/auth')}>Get started</span></h1> 
    
    </>
    )}
        
    </div>
    <div  className='userSummary'>
        
        <p style={{marginTop:'80px'}}>With Todo, you can conquer your tasks<br /> with ease and embrace a more productive tomorrow </p>
        {userInfo ?(<h1><span style={{color:'green'}}>{userInfo}</span> <br /> {userLastName}</h1>):(<h1>Todo <br /> Application</h1>)}
        
    </div>
    </div>
    </>
  )
}

export default UserHome