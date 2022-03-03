import React from 'react'
import NewsCards from "./components/NewsCardSec"
class MainSection extends React.Component{
    render(){
        return(
<div className='container-fuild'>
    <h1 className='fw-bold my-2 mx-3'>Headlins</h1>
  <div className="row row-cols-1 row-cols-md-3 g-4 mx-4">
    <NewsCards />
  </div>
</div>
        )
    }
}

export default MainSection