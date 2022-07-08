import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export default class Nwws extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1,
            pageSize: 12,
            language: "en",

        }
    }
    async getData() {
        this.setState({ page: 1 })
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&language=${this.state.language}&apiKey=7bff9e43e705450cb6f5195d70d243a6`)
        var data = await rawdata.json()
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults
        })
        console.log(data);
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&language=${this.state.language}&apiKey=7bff9e43e705450cb6f5195d70d243a6`)
        var data = await rawdata.json()
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults
        })

    }
    componentDidMount() {
        this.getData()
    }
    componentDidUpdate(old) {
        if (this.props.category != old.category)
            this.getData()
    }
    changeLanguage(e){
        this.setState({language:e.target.value})
        this.getData()
    }
    changePageSize(e){
        this.setState({PageSize:e.target.value})
        this.getData()
    }

    render() {
        return (
            <>

               
                <h5 className='background text-light text-center p-2 mt-1'>{this.props.category} Latest News</h5>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<Spinner />}
                >
                    <div className='row'>
                        {
                            this.state.articles.map((item, index) => {
                                return <div key={index} className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                                    <Newsitem

                                        title={item.title}
                                        description={item.description}
                                        url={item.url}
                                        pic={item.urlToImage}


                                    />
                                </div>
                            })
                        }
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
