import jumbotronImg  from "../../assets/imgs/jumbotron-img.png"
import authorImg from "../../assets/imgs/author-3.png"

function Jumbotron() {
    return(
        <section className="section-1 w-full">
            <h4>Blog</h4>
            <h1>Thoughts and words</h1>
            <div className="sub-container flex flex-row flex-wrap">
                <img className="article-img" src={jumbotronImg} alt="" />
                <div className="article-text">
                    <div className="flex category">
                        <p className="text-1">Category</p>
                        <p className="text-2">November 22, 2021</p>
                    </div>
                    <h2>Pitch termsheet backing validation focus release.</h2>
                    <div className="flex items-center gap-x-3 author">
                        <img src={authorImg} alt="" />
                        <p>Chandler Bing</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Jumbotron;