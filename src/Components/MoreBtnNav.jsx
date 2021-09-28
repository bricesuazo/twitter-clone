import './moreBtnNav.css';
import { AccessibilityNewOutlined, BarChartOutlined, BrushOutlined, FlashOnOutlined, HelpOutlineOutlined, InsertCommentOutlined, OpenInNewOutlined, SettingsOutlined, StickyNote2Outlined } from '@mui/icons-material';

const MoreBtnNav = () => {
    return (
        <div className="MoreBtnNav">
            <div className="ProfilePopUp">
                <div className="ProfilePopUpWrapper">
                    <div className="ProfilePopUpUpperPartWrapper">
                        <div className="ProfilePopBtn">
                            <span className="ProfilePopIcon"><InsertCommentOutlined /></span>
                            <span className="ProfilePopSpan">Topics</span>
                        </div>
                        <div className="ProfilePopBtn">
                            <span className="ProfilePopIcon"><FlashOnOutlined /></span>
                            <span className="ProfilePopSpan">Moments</span>
                        </div>
                        <div className="ProfilePopBtn">
                            <span className="ProfilePopIcon"><StickyNote2Outlined /></span>
                            <span className="ProfilePopSpan">Newsletter</span>
                        </div>
                        <div className="ProfilePopBtn">
                            <span className="ProfilePopIcon"><OpenInNewOutlined /></span>
                            <span className="ProfilePopSpan">Twitter Ads</span>
                        </div>
                        <div className="ProfilePopBtn">
                            <span className="ProfilePopIcon"><BarChartOutlined /></span>
                            <span className="ProfilePopSpan">Analytics</span>
                        </div>
                    </div>
                    <div className="ProfilePopUpLowerPartWrapper">
                        <div className="ProfilePopBtn">
                            <span className="ProfilePopIcon"><SettingsOutlined /></span>
                            <span className="ProfilePopSpan">Settings and Privacy</span>
                        </div>
                        <div className="ProfilePopBtn">
                            <span className="ProfilePopIcon"><HelpOutlineOutlined /></span>
                            <span className="ProfilePopSpan">Help Center</span>
                        </div>
                        <div className="ProfilePopBtn">
                            <span className="ProfilePopIcon"><BrushOutlined /></span>
                            <span className="ProfilePopSpan">Display</span>
                        </div>
                        <div className="ProfilePopBtn">
                            <span className="ProfilePopIcon"><AccessibilityNewOutlined /></span>
                            <span className="ProfilePopSpan">Keyboard Shortcut</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreBtnNav
