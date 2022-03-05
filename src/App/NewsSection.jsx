import React from 'react'
import NewsCards from "./components/NewsCardSec"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";// use the InfinteScroll package for infirte scroll 


class NewsSection extends React.Component{
  // defining the default value of props
  static defaultProps = {
    Country : "us",
    articalsPerPage:6,
    categroy:"business",
  }
  // defining the type of props
  static propTypes = {
    Country : PropTypes.string,
    articalsPerPage: PropTypes.number,
    categroy: PropTypes.string,
  }
  
  constructor(props){
    super(props) 
    this.state={
      articles: [],// to storing the all articals data
      pageNum:1,// using the pageNum for chnage the page number in api for more data/page
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

  // using this funtion to get more data/pages in the infinite scroll
  fetchMoreData = async () =>{
    let url = `${this.props.CurrentUrl}&country=${this.props.Country}&category=${this.props.categroy}&page=${this.state.pageNum}&pageSize=${this.props.articalsPerPage}`
    let fatch = await fetch(url)
    let data =  await fatch.json()
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalRes:data.totalResults,
    })
  }
  
  render(){
    return(
    <React.Fragment>
      <div className='container-fuild'>
        <h2 className='fw-bold my-3 mx-3 text-center text-capitalize'>Top {this.props.categroy} Headlines</h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalRes}
          loader={<h4>Loading...</h4>}
        > 
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
       </InfiniteScroll>
</div>
</React.Fragment>
        )
    }
}

export default NewsSection