import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // !we will use the useLoaderData hook to get the data of the api
    const data = useLoaderData();

    // //! to store data we use the useState hook
    // const [data, setData] = useState([]);

    // // !to get the followers we call api of github to get the followers 
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Arvindchoudhary21')
    //         .then(Response => Response.json())
    //         .then(data => {
    //             // console.log(data); for debugging
    //             setData(data);
    //         })
    // }, [])

    return (
        <div className=' text-center bg-gray-500 m-4 text-white p-4 text-3xl'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

// !also we can create a different section for the api call and when we hover on the github section on page then the api calling will start and it will result in better performance so you can use this and also a hook is needed called useLoaderData hook so this is the example

export const githubInfoLoader = async () => {
    const Response = await fetch('https://api.github.com/users/Arvindchoudhary21')
    return Response.json();
}
