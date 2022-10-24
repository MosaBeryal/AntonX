import React from 'react'
import { Button } from 'semantic-ui-react'
import './Task4.css'
const Button1 = (LoadData) => (
  <div>
     <Button size='large' className='center' onClick={LoadData}>FetchData</Button>
  </div>
)

export default Button1