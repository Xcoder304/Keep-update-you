import React from 'react'
import NewsCards from "./components/NewsCardSec"
import PropTypes from 'prop-types'

class NewsSection extends React.Component{
  static defaultProps = {
    Country : "us",
    articalsPerPage:6,
    categroy:"business",
  }

  static propTypes = {
    Country : PropTypes.string,
    articalsPerPage: PropTypes.number,
    categroy: PropTypes.string,
  }

  constructor(){
    super() 

    this.state={
      articles: [],
      pageNum:1,
    }
  }

  UpdateThePage = async () =>{
    let url = `${this.props.CurrentUrl}&country=${this.props.Country}&category=${this.props.categroy}&page=${this.state.pageNum}&pageSize=${this.props.articalsPerPage}`
    let fatch = await fetch(url)
    let data =  await fatch.json()
    this.setState({
      articles: data.articles,
      totalRes:data.totalResults,
    })
  }

  // fatching the data from api 
  componentDidMount(){
    this.UpdateThePage()
  }

  // ******** next button *********
  NextPageFun = async () =>{
    // checking if the next page is available if it is then change the current page to next page
      this.UpdateThePage()
      this.setState({ pageNum:this.state.pageNum + 1, })
    }

  // ******** pervious button *********
  PervPageFun = async () =>{
    this.UpdateThePage()
    this.setState({ pageNum:this.state.pageNum - 1, })
  }
  
  render(){
    return(
    <React.Fragment>
      <div className='container-fuild'>
        <h1 className='fw-bold my-2 mx-3'>Headlins</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-4">
          
        {
          // map the all data from artical array to get the all articals
          this.state.articles.map((elm)=>{
            // in api some description are null if the description is null then show this in description
            const FordescriptNull = "there is no description of this news click to view this"

            // in api some images are null if the image is null then show this images
            const ForImageNull = "../images/NoImageFounded2.png"

            return (
              <NewsCards 
                key={elm.url} 
                title={elm.title.slice(0,40)} 
                description={elm.description ? elm.description.slice(0,90) : FordescriptNull} 
                imageUrl={elm.urlToImage ? elm.urlToImage : ForImageNull} 
                newsUrl={elm.url} 
                articalDate={elm.publishedAt} 
                authorName={elm.author ? elm.author.slice(0,18) : "unkown"}
              />
            
            )
      })}
  </div>
</div>

  {/* pagination */}
  <div className='container d-flex my-5 justify-content-center'>
    <button disabled={this.state.pageNum < 2} className='px-3 py-2 Blue1 ColorWhite border-0 rounded-3  mx-3' onClick={this.PervPageFun}>Pervious</button>

    {/* // why math.ceil? beause its return the higger value number/intiger */}
    <button disabled={this.state.pageNum +1 > Math.ceil(this.state.totalRes/this.props.articalsPerPage)} className='px-3 py-2 Blue1 ColorWhite border-0 rounded-3' onClick={this.NextPageFun}>Next</button>
  </div>
</React.Fragment>
        )
    }
}

export default NewsSection