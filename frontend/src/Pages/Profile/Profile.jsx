import React from 'react'

const Profile = () => {
    const service =new service();
    const getdata=()=>{
        const response=service.get("user/me");
        console.log(response);
    }
    React.useEffect(()=>{
        getdata();
    },[])
  return (
    <div>Profile</div>
  )
}

export default Profile