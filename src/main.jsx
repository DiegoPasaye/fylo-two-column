import React from 'react'
import ReactDOM from 'react-dom/client'
import { Acces } from './Acces'
import { First } from './First'
import { Footer } from './Footer'
import { Nav } from './Nav'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>  
    <Nav />
    <First />
    <Acces />
    <Footer />
  </>
)
