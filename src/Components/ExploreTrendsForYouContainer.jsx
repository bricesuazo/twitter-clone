import { SettingsOutlined } from '@mui/icons-material'
import './exploreTrendsForYouContainer.css';

const ExploreTrendsForYouContainer = () => {
    return (
        <div className="ExploreTrendsForYouContainer">
            <div className="exploreTrendingContainerWrapper">
                <div className="exploreTrendingHeaderWrapper">
                    <h3>Trends for you</h3>
                    <SettingsOutlined />
                </div>
                <div className="exploreTrendingList">
                    <div className="exploreTrending">
                        <span className="exploreTrendingSpanCountry">Trending in Philippines</span>
                        <span className="exploreTrendingSpanName">Mama mo trending</span>
                        <span className="exploreTrendingSpanNoOfTweet">69K Tweets</span>
                    </div>
                    <div className="exploreTrending">
                        <span className="exploreTrendingSpanCountry">Trending in Philippines</span>
                        <span className="exploreTrendingSpanName">Mama mo trending</span>
                        <span className="exploreTrendingSpanNoOfTweet">69K Tweets</span>
                    </div>
                    <div className="exploreTrending">
                        <span className="exploreTrendingSpanCountry">Trending in Philippines</span>
                        <span className="exploreTrendingSpanName">Mama mo trending</span>
                        <span className="exploreTrendingSpanNoOfTweet">69K Tweets</span>
                    </div>
                    <div className="exploreTrending">
                        <span className="exploreTrendingSpanCountry">Trending in Philippines</span>
                        <span className="exploreTrendingSpanName">Mama mo trending</span>
                        <span className="exploreTrendingSpanNoOfTweet">69K Tweets</span>
                    </div>
                </div>

                <div className="seeMoreWrapper">
                    <span className="seeMore">See More</span>
                </div>
            </div>
        </div>
    )
}

export default ExploreTrendsForYouContainer
