import React from 'react'

class NewsCards extends React.Component{
    render(){
        return(
            <div className="col">
            <div className="card">
              <img src="../images/img.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button className='px-3 py-2 Blue1 ColorWhite border-0 rounded-3'>Read More</button>
              </div>
            </div>
          </div>   
        )
    }
}

export default NewsCards 