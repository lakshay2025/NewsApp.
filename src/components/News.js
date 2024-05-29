import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps = {
        country: "in",
        pagesize: 12,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }
    
    constructor(){
        super();
        this.state={
              articles:[],
              loading: false,
              page: 1,
              totalResults: 0
        }
    }
    // async update(){

    // }
    async componentDidMount(){

        this.props.setprogress(10);
        this.setState({loading:true});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47fc5b6b90c04f7691b99adbd92c0205&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.props.setprogress(30);
        let data = await fetch(url);
        let parseddata = await data.json();
        this.props.setprogress(50);
        this.setState({articles:parseddata.articles, 
            totalResults:parseddata.totalResults,
            loading:false});
            this.setState({loading:false});
            this.props.setprogress(100);
        }
        
    // handlenext = async () =>{
    
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47fc5b6b90c04f7691b99adbd92c0205&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    //         this.setState({loading:true});
    //         let data = await fetch(url);
    //     let parseddata = await data.json();
        
    //     this.setState({page:this.state.page+1,
    //         articles:parseddata.articles,
    //         loading:false})
          
    //     }
        

    // handleprev = async () =>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47fc5b6b90c04f7691b99adbd92c0205&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parseddata = await data.json();
       
    //     this.setState({page:this.state.page-1,
    //         articles:parseddata.articles,
    //         loading:false})

    // }
    fetchMoreData = async () =>{
        this.setState({page: this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47fc5b6b90c04f7691b99adbd92c0205&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
       
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({articles:this.state.articles.concat(parseddata.articles), 
                        totalResults:parseddata.totalResults,
                    });
    }

  render() {
    return (
        <>
        <h1 className="text-center my-3">Apna News</h1>
   
         {this.state.loading && <Spinner/>}
         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="container">

            <div className="row">
        {/* {!this.state.loading && this.state.articles.map((element) => { */}

        {this.state.articles.map((element) => {
            return  <div className="col-md-3" key={element.url}>
                <NewsItems title={element.title} desc={element.description} imgurl={element.urlToImage} url={element.url} source={element.source.name} date={element.publishedAt} author={element.author} />
                    </div>
        })}
        </div>
        </div>
        </InfiniteScroll>


        {/* <div className="d-flex justify-content-between my-3">
        <button type="button" disabled={this.state.page<=1} onClick={this.handleprev} className="btn btn-sm btn-dark"> &larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalresults/this.props.size)} onClick={this.handlenext} className="btn btn-sm btn-dark"> Next &rarr; </button>
        </div>
     */}
        </>
    )
  }
}

export default News
