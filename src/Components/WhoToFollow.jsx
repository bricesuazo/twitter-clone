import './whoToFollow.css';
import VerifiedIcon from '@mui/icons-material/Verified';

const WhoToFollow = () => {
    return (
        <div className="WhoToFollow">
            <div className="whoToFollowWrapper">
                <h3 className="whoToFollowHeader">Who to follow</h3>

                <div className="whoToFollowAccountWrapper">
                    <div className="whoToFollowAccount">
                        <img src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX8610vZ&_nc_ht=scontent.fmnl25-1.fna&oh=f9cf9e8c84f17234b92b6c2c9c1be268&oe=6174FF0E" alt="" className="whoToFollowAccountProfilePic"/>
                        <div className="whoToFollowAccountInfo">
                            <div className="whoToFollowAccountNameWrapper">
                                <span className="whoToFollowAccountName">Brice Suazo</span>
                                <VerifiedIcon className="whoToFollowAccountIsVerified" fontSize='small'/>
                            </div>
                            <span className="whoToFollowAccountUsername">@brice_suazo</span>
                        </div>
                    </div>
                    <span className="whoToFollowAccountFollowBtn">Follow</span>
                </div>
                
                <div className="whoToFollowAccountWrapper">
                    <div className="whoToFollowAccount">
                        <img src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX8610vZ&_nc_ht=scontent.fmnl25-1.fna&oh=f9cf9e8c84f17234b92b6c2c9c1be268&oe=6174FF0E" alt="" className="whoToFollowAccountProfilePic"/>
                        <div className="whoToFollowAccountInfo">
                            <div className="whoToFollowAccountNameWrapper">
                                <span className="whoToFollowAccountName">Brice Suazo</span>
                                <VerifiedIcon className="whoToFollowAccountIsVerified" fontSize='small'/>
                            </div>
                            <span className="whoToFollowAccountUsername">@brice_suazo</span>
                        </div>
                    </div>
                    <span className="whoToFollowAccountFollowBtn">Follow</span>
                </div>


                <div className="seeMoreWrapper">
                        <span className="seeMore">See More</span>
                    </div>
            </div>
            

        </div>
    )
}

export default WhoToFollow
