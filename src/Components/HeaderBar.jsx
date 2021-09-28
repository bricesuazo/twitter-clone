import './headerBar.css';
import { FlareOutlined } from '@mui/icons-material';

const HeaderBar = () => {
    return (
        <div className="HeaderBar">
            <div className="headerWrapper">
                <div className="header">
                    <h3 className="headerTextSpan">Home</h3>
                    <div className="headerIcon">
                        <FlareOutlined />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar
