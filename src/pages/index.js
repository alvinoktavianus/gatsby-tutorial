import React from 'react'
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'

const Test = styled.div`
  background-color: green;
  height: 300px;
  width: 300px;
`

// markup
const IndexPage = () => {
  return (
    <>
      <div className='top-bar bg-dark'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
              <div className='top-bar-left text-white'>
                <span>Address</span>
              </div>
            </div>
            <div className='col-lg-4 ml-lg-auto col-md-6'></div>
          </div>
        </div>
      </div>
      <Test>
        <h1>Hello world</h1>
      </Test>
      <TextField id='filled-basic' label='Filled' variant='filled' />
    </>
  )
}

export default IndexPage
