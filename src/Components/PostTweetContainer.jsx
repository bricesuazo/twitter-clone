import './postTweetContainer.css';
import { BarChartOutlined, DateRangeOutlined, GifOutlined, InsertPhotoOutlined, SentimentSatisfiedOutlined } from '@mui/icons-material';

const PostTweetContainer = () => {
    return (
        <div className="postTweetContainer">
            <img src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX8610vZ&_nc_ht=scontent.fmnl25-1.fna&oh=f9cf9e8c84f17234b92b6c2c9c1be268&oe=6174FF0E" alt="" className="postProfilePic"/>
            <div className="postInput">
                <input type="text" placeholder="What's happening sa imong tanan?" className="postInputTextBar"/>

                <div className="postBtnsWrapper">
                    <div className="postBtns">
                        <InsertPhotoOutlined className="postBtnIcon"/>
                        <GifOutlined className="postBtnIcon"/>
                        <BarChartOutlined className="postBtnIcon"/>
                        <SentimentSatisfiedOutlined className="postBtnIcon"/>
                        <DateRangeOutlined className="postBtnIcon"/>
                    </div>
                    <button className="postBtnTweet">Tweet</button>
                </div>
            </div>

        </div>
    )
}

export default PostTweetContainer
