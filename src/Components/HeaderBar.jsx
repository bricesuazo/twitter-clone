import './headerBar.css';
import { ArrowBackOutlined, EmailOutlined, FlareOutlined, MoreHorizOutlined, PostAddOutlined, SettingsOutlined } from '@mui/icons-material';

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
};

const iconStyles = {
    padding: 1,
    fontSize: 40,
}

const HeaderBar = ({headerTitle}) => {
    const removeBorder = () => {
        if(headerTitle === "Notifications")
           return "none";
    }

    const changeIcon = () => {
        if(headerTitle === "Home"){
            return <FlareOutlined sx={iconStyles} className="headerIconIcon"/>;
        }else if(headerTitle === "Notifications"){
            return <SettingsOutlined sx={iconStyles} className="headerIconIcon"/>;
        }else if(headerTitle === "Messages"){
            return [<SettingsOutlined sx={iconStyles} className="headerIconIcon"/>, <EmailOutlined sx={iconStyles} className="headerIconIcon"/>];
        }else if(headerTitle === "Messages"){
            return [<SettingsOutlined sx={iconStyles} className="headerIconIcon"/>, <EmailOutlined sx={iconStyles} className="headerIconIcon"/>];
        }else if(headerTitle === "Lists"){
            return [<PostAddOutlined sx={iconStyles} className="headerIconIcon"/>, <MoreHorizOutlined sx={iconStyles} className="headerIconIcon"/>];
        }
    }
    // const ProfileHeaderTitle = () => {
    //     if(headerTitle === "Profile"){
    //         return <ArrowBackOutlined />;
    //     }else{
    //         return {headerTitle};
    //     }
    // }

    return (
        <div className="HeaderBar">
            <div onClick={scrollToTop} className="headerWrapper">
                <div style= {{ borderBottom: removeBorder() }} className="header">
                    <h3 className="headerTextSpan">{headerTitle}</h3>
                    <div className="headerIcon">
                        { changeIcon() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar
