import React from "react";
import { articles } from "../../utils/constants";
import NewsCard from "./NewsCard";

function LatestNews() {
    return (
        <section className="section-2">
            <h3>Latest news</h3>

            <div className="box-center news-card-container">
                {articles?.map((article, index) => (
                    <NewsCard
                        key={index}
                        {...article}
                    />
                ))}
            </div>

            <div className="flex justify-center">
                <button>Load more</button>
            </div>
        </section>
    )
}

export default LatestNews