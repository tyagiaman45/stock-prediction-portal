import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'> This stock prediction application utilize machine learning techniques,specially employing keras and LSTM models,integrated with django framework.It forcast future stock prices by analyzing 100 days and 200 days moving averages.</p>
        <Button text="login" class="btn-outline-warning"/> 
      </div>
    </div>
    </>
  )
}

export default Main
// import React from 'react'

// const Main = () => {
//   return (
//     <div>Main</div>
//   )
// }

// export default Main