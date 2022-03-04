import React from 'react'
import NewsCards from "./components/NewsCardSec"

class NewsSection extends React.Component{
  articles = []

  constructor(){
    super() 

    this.state={
      articles: this.articles,
      pageNum:1,
    }

  }

  async componentDidMount(){
    let url = `${this.props.CurrentUrl}&page=${this.state.pageNum}&pageSize=${this.props.articalsPerPage}`
    let fatch = await fetch(url)
    let data =  await fatch.json()

    this.setState({
      articles: data.articles,
      totalRes:data.totalResults,
    })
  }

  NextPageFun = async () =>{
    if(!(this.state.pageNum +1 > Math.ceil(this.state.totalRes/this.state.articalsPerPage))){
      let url = `${this.props.CurrentUrl}&page=${this.state.pageNum + 1}&pageSize=${this.state.articalsPerPage}`
      let fatch = await fetch(url)
      let data =  await fatch.json()

      this.setState({
        pageNum:this.state.pageNum + 1,
        articles: data.articles
      })
    }
    }

  PervPageFun = async () =>{
    let url = `${this.props.CurrentUrl}&page=${this.state.pageNum - 1}&pageSize=${this.state.articalsPerPage}`
    let fatch = await fetch(url)
    let data =  await fatch.json()
    this.setState({
      pageNum:this.state.pageNum - 1,
      articles: data.articles
    })
  }
  
  render(){
    return(
    <React.Fragment>
      <div className='container-fuild'>
        <h1 className='fw-bold my-2 mx-3'>Headlins</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-4">
          
        {
          this.state.articles.map((elm)=>{
            const FordescriptNull = "there is no description of this news click to view this"
            const ForImageNull = "../images/NoImageFounded2.png"
            
            return (
              <NewsCards key={elm.url} title={elm.title.slice(0,40)} description={elm.description ? elm.description.slice(0,90) : FordescriptNull} imageUrl={elm.urlToImage ? elm.urlToImage : ForImageNull} newsUrl={elm.url} Date={elm.publishedAt.slice(0,10)} />
            
            )
      })}
  </div>
</div>

  {/* pagination */}
  <div className='container d-flex my-5 justify-content-center'>
    <button disabled={this.state.pageNum < 2} className='px-3 py-2 Blue1 ColorWhite border-0 rounded-3  mx-3' onClick={this.PervPageFun}>Pervious</button>
   
    <button disabled={this.state.pageNum +1 > Math.ceil(this.state.totalRes/this.state.articalsPerPage)} className='px-3 py-2 Blue1 ColorWhite border-0 rounded-3' onClick={this.NextPageFun}>Next</button>
  </div>
</React.Fragment>
        )
    }
}

export default NewsSection