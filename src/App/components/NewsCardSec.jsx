import React from 'react'

class NewsCards extends React.Component{
    render(){
      let {title,description,imageUrl,newsUrl,articalDate,authorName} = this.props
        return(
            <div className="col">
              <a href={newsUrl} target="_blank" style={{textDecoration:"none"}}>
            <div className="card">
              <img src={imageUrl} style={{width:"100%",height:"200px",objectFit:"cover"}} className="card-img-top" alt="NewsImage" />
              <div className="card-body">
                <h5 className="card-title ColorBlack">{title}...</h5>
                <p className="card-text text-capitalize ColorLightBlack">{description}...</p>
                <p className="card-text text-capitalize ColorLightBlack">published By: <span className='ColorRed fw-bold'>{authorName}</span></p>
                <p className="card-text text-capitalize ColorLightBlack">Date: <span className='ColorBlue1'>{new Date(articalDate).toUTCString()}</span></p>
                <p className="card-text text-capitalize ColorLightBlack">In Your Time: <span className='ColorBlue1'>{new Date(articalDate).toLocaleTimeString()}</span></p>
                <span href={newsUrl} target="_blank"><button className='px-3 py-2 Blue1 ColorWhite border-0 rounded-3'>Read More</button></span>
              </div>
            </div>

              </a>
          </div>    
        )
    }
}

export default NewsCards 