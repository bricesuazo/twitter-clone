import { SettingsOutlined } from '@mui/icons-material'
import './trendsForYouContainer.css'

const TrendingContainer = () => {
    return (
        <div className="TrendingContainer">
            <div className="trendingContainerWrapper">
                <div className="trendingHeaderWrapper">
                    <h3>Trends for you</h3>
                    <SettingsOutlined />
                </div>
                <div className="trendingList">
                    <div className="trending">
                        <span className="trendingSpanCountry">Trending in Philippines</span>
                        <span className="trendingSpanName">Mama mo trending</span>
                        <span className="trendingSpanNoOfTweet">69K Tweets</span>
                    </div>
                    <div className="trending">
                        <span className="trendingSpanCountry">Trending in Philippines</span>
                        <span className="trendingSpanName">Mama mo trending</span>
                        <span className="trendingSpanNoOfTweet">69K Tweets</span>
                    </div>
                    <div className="trending">
                        <span className="trendingSpanCountry">Trending in Philippines</span>
                        <span className="trendingSpanName">Mama mo trending</span>
                        <span className="trendingSpanNoOfTweet">69K Tweets</span>
                    </div>
                    <div className="trending">
                        <span className="trendingSpanCountry">Trending in Philippines</span>
                        <span className="trendingSpanName">Mama mo trending</span>
                        <span className="trendingSpanNoOfTweet">69K Tweets</span>
                    </div>
                </div>
                <div className="seeMoreWrapper">
                    <span className="seeMore">See More</span>
                </div>
            </div>
        </div>
    )
}

export default TrendingContainer
