import './profileContainer.css';

const ProfileContainer = () => {
    return (
        <div className="ProfileContainer">
            <img src="https://pbs.twimg.com/profile_banners/1363534550123483136/1625560137/600x200" alt="" className="profileHeaderImg"/>
            
            <div className="profileContainerImgWrapper">
                <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX9l5Tj8&_nc_ht=scontent.fmnl4-2.fna&oh=bbed85e22f04113d816446bac78a9e70&oe=6178F38E" alt="" className="profilePictureImg"/>

                <div className="editProfileBtn">Edit Profile</div>
            </div>
        </div>
    )
}

export default ProfileContainer
