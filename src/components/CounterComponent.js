import React,{useState,useEffect}from 'react'

function CounterComponent() {
    // const [count,setCount] = useState(0)
     // Load counter value from LocalStorage or default to 0
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("counter")) || 0;
  });

  // Update LocalStorage whenever counter changes
  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);
  return (
    <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-12 col-md-6">
            <div className='border bg-light p-4'>
              <h1 className='p-4'>Counter App</h1>
              <div className='p-4'><h1>{count}</h1></div>
              <div className='row my-5'>
                 <div className='col-4 text-end'>
                    {/* <button className='bg-secondary-subtle rounded-circle'><h2>+</h2></button> */}
                    <svg onClick={()=>setCount(count+1)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg>
                 </div>
                <div className='col-4 text-center'>
                <svg onClick={()=>setCount(0)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="orange" className="bi bi-0-circle-fill" viewBox="0 0 16 16">
  <path d="M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.012 4.158c1.858 0 2.96-1.582 2.96-3.99V7.84c0-2.426-1.079-3.996-2.936-3.996-1.864 0-2.965 1.588-2.965 3.996v.328c0 2.42 1.09 3.99 2.941 3.99"/>
</svg>

                </div>
                <div className='col-4 text-start'>
                 <svg onClick={()=>{count>0 && setCount(count-1)}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
</svg>
                 </div>
              </div>
              </div>

            </div>
        </div>
    </div>

  )
}

export default CounterComponent