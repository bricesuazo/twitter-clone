import './headerBar.css';
import { FlareOutlined } from '@mui/icons-material';

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
};

const HeaderBar = ({headerTitle}) => {
    return (
        <div className="HeaderBar">
            <div onClick={scrollToTop} className="headerWrapper">
                <div className="header">
                    <h3 className="headerTextSpan">{headerTitle}</h3>
                    <div className="headerIcon">
                        <FlareOutlined />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar
