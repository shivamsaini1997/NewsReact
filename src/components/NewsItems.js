import React, { Component } from "react";

const NewsItems = (props) => {

		let { title, description, imageUrl, newsUrl, author, date , source} =
			props;
		return (
			<div>
				<div className="card mb-3" style={{ minHeight: 500, position: 'relative'}}>
					<a href={newsUrl}>
						<img
							style={{
								height: 260,
								objectFit: "cover",
							}}
							src={
								!imageUrl
									? "https://www.reuters.com/resizer/gzU0xHSE_aHLMpnvG5b6OkLXFkc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SBJZOAGOB5PUFJJY72Q3YOWFGI.jpg"
									: imageUrl
							}
							className="card-img-top"
							alt={title}
						/>
					</a>
					<div className="card-body">
						<span className="position-absolute top-0  badge rounded-pill bg-danger" style={{right: -5}}>
							{source}
							<span className="visually-hidden">unread messages</span>
						</span>
						<h5 className="card-title">{title}...</h5>
						<p className="card-text">{description}...</p>
						<p className="card-text">
							<small className="text-body-secondary">
								By {!author ? "Unkwon" : author} on{" "}
								{new Date(date).toDateString()}
							</small>
						</p>

						<a href={newsUrl} className="btn btn-primary">
							Read More
						</a>
						</div>
				</div>
			</div>
		);
	}


export default NewsItems;
