import React, {useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// var apikey = "eec07ba7c2714a5cb15b2cccff2bd3f9";

const News = (props) => {
	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [totalResultes, setTotalResultes] = useState(0)

	const capitalizefunction = (s) => {
		return s.charAt(0).toUpperCase() + s.slice(1);
	};

const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles); // Fix: Use parsedData.articles
    setTotalResultes(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
}
	 useEffect(() => {
	document.title = `${capitalizefunction(props.category)} - News`;

		updateNews();
	}, [])

	const fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
		setPage(page+1)
		let data = await fetch(url);
		let parsedDate = await data.json();
		setArticles(articles.concat(parsedDate.articles))
		setTotalResultes(parsedDate.totalResults)
	};

		return (
			<div className="container mt-5 pt-5">
				<h2 className="text-center mb-5">
					<b>News - Top {capitalizefunction(props.category)} Headline </b>
				</h2>
				{loading && <Spinner/> }

				<InfiniteScroll
					dataLength={articles.length}
					next={fetchMoreData}
					hasMore={articles.length !== totalResultes}
					loader={<Spinner />}>
					<div className="container">
						<div className="row">
							{articles.map((element) => {
								return (
									<div className="col-md-4" key={element.url}>
										<NewsItems
											imageUrl={element.urlToImage}
											title={element.title ? element.title.slice(0, 45) : ""}
											description={element.description ? element.description.slice(0, 88) : ""}
											newsUrl={element.url}
											author={element.author}
											date={element.publishedAt}
											source={element.source.name}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</InfiniteScroll>
				{/* <div className="container d-flex justify-content-between">
            <button disabled={page<=1} className="btn btn-primary" type="button" onClick={this.handlePrevClick}>Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-primary" type="button" onClick={this.handleNextClick}>Next</button>
        </div> */}
			</div>
		);
	
	}
	News.defaultProps = {
		country: 'in',
		pageSize: 6,
	}
	News.propTypes = {
		
		pageSize: PropTypes.number,
	}

export default News;
