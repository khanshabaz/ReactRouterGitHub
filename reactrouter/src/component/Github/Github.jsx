import { useLoaderData } from 'react-router-dom';

function Github() {
  const data=useLoaderData()
  
  return (
    <div className='text-center text-3xl text-white p-4 bg-gray-600'>
      Github: {data.followers}
      <img src={data.avatar_url} alt='Github profile' width={300}/>
    </div>
  )
}

export default Github;

export const githubInfoLoader=async()=>{
  const response=await(fetch('https://api.github.com/users/khanshabaz'))
  return response.json()
}