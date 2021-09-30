import './notificationAll.css';
import { Cached, Favorite, Person } from '@mui/icons-material';


const typeOfNotif = (param) => {
    switch(param) {
      case("liked"):
        return <Favorite fontSize="large"/>
       case("followed"):
        return <Person fontSize="large"/>
       case("retweeted"):
        return <Cached fontSize="large"/>
        default:
        return ""
    }
}

const NotificationAll = ({type}) => {
    return (
        <div className="NotificationAll">
            <div className="notificationContainerWrapper">
                <div className="notifContainerLeftWrapper">{typeOfNotif(type)}</div>
                <div className="notifContainerRightWrapper">
                    <div className="notifContainerRightProfilePicWrapper">
                        <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX9l5Tj8&_nc_ht=scontent.fmnl4-2.fna&oh=bbed85e22f04113d816446bac78a9e70&oe=6178F38E" alt="" className="notifContainerRightProfilePic"/>
                        <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX9l5Tj8&_nc_ht=scontent.fmnl4-2.fna&oh=bbed85e22f04113d816446bac78a9e70&oe=6178F38E" alt="" className="notifContainerRightProfilePic"/>
                        <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX9l5Tj8&_nc_ht=scontent.fmnl4-2.fna&oh=bbed85e22f04113d816446bac78a9e70&oe=6178F38E" alt="" className="notifContainerRightProfilePic"/>
                        <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX9l5Tj8&_nc_ht=scontent.fmnl4-2.fna&oh=bbed85e22f04113d816446bac78a9e70&oe=6178F38E" alt="" className="notifContainerRightProfilePic"/>
                    </div>
                    <div className="notifContainerRightHeaderTextWrapper">
                        <span className="notifContainerRightHeaderTextUsername">brice</span>
                        <span className="notifContainerRightHeaderTextStatus"> liked your Tweet</span>
                    </div>
                    <div className="notifContainerRightTweetWrapper">
                        <div className="notifContainerRightTweetCaption">test lamang po ito</div>
                        <div className="notifContainerRightTweetLink">pic.twitter.com/YM42BrS8FJ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationAll
