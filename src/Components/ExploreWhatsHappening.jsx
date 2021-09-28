import './exploreWhatsHappening.css';

const ExploreWhatsHappening = () => {
    return (
        <div className="ExploreWhatsHappening">
            <div className="exploreWhatsHappeningContainerWrapper">
                <div className="exploreWhatsHappeningHeaderWrapper">
                    <h3>What's happening</h3>
                </div>
                <div className="exploreWhatsHappeningContainer">
                    <div className="exploreWhatsHappeningArticle">
                        <div className="exploreWhatsHappeningArticleText">
                            <span className="exploreWhatsHappeningArticleCategory">NBA • LIVE</span>
                            <span className="exploreWhatsHappeningArticleTitle">2021 NBA Media Week tips off</span>
                        </div>
                        <img src="https://pbs.twimg.com/semantic_core_img/1442512309482450950/9Wj6f2EU?format=jpg&name=small" alt="" className="exploreWhatsHappeningArticleImg"/>
                    </div>
                    <div className="exploreWhatsHappeningArticle">
                        <div className="exploreWhatsHappeningArticleText">
                            <span className="exploreWhatsHappeningArticleCategory">World news • LIVE</span>
                            <span className="exploreWhatsHappeningArticleTitle">The latest news and updates from Afghanistan under Taliban control</span>
                        </div>
                        <img src="https://pbs.twimg.com/semantic_core_img/1434587165590122496/_p4PoR-g?format=jpg&name=240x240" alt="" className="exploreWhatsHappeningArticleImg"/>
                    </div>
                    <div className="exploreWhatsHappeningArticle">
                        <div className="exploreWhatsHappeningArticleText">
                            <span className="exploreWhatsHappeningArticleCategory">COVID-19 • LIVE</span>
                            <span className="exploreWhatsHappeningArticleTitle">Ivermectin is not authorised for treatment of COVID-19, according to US health authorities</span>
                        </div>
                        <img src="https://pbs.twimg.com/semantic_core_img/1432407551623122944/fK4k91sq?format=jpg&name=240x240" alt="" className="exploreWhatsHappeningArticleImg"/>
                    </div>
                </div>
                
                <div className="seeMoreWrapper">
                    <span className="seeMore">See More</span>
                </div>
            </div>
        </div>
    )
}

export default ExploreWhatsHappening
