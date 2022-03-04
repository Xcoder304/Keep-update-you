import React from 'react'
import NewsCards from "./components/NewsCardSec"
class MainSection extends React.Component{
  articles = []
  constructor(){
    super() 
    this.state={
      articles: this.articles
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=03543da1eaaf430391b929bd52e910fa"
    let fatch = await fetch(url)
    let data =  await fatch.json()
    this.setState({articles: data.articles})
  }

  render(){
        return(
<div className='container-fuild'>
    <h1 className='fw-bold my-2 mx-3'>Headlins</h1>
  <div className="row row-cols-1 row-cols-md-3 g-4 mx-4">
   {this.state.articles.map((elm)=>{
    console.log(elm)
     const FordescriptNull = "there is no description of this news click to view this"
     const ForImageNull = "../images/NoImageFounded2.png"

     return (
      <NewsCards key={elm.url} title={elm.title.slice(0,40)} description={elm.description ? elm.description.slice(0,90) : FordescriptNull} imageUrl={elm.urlToImage ? elm.urlToImage : ForImageNull} newsUrl={elm.url} Date={elm.publishedAt.slice(0,10)} />
     )
   })}
   
  </div>
</div>
        )
    }
}

export default MainSection