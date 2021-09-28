import { SearchOutlined } from '@mui/icons-material'
import './searchBar.css'

const SearchBar = () => {
    return (
        <div>
            <div className="SearchBar">
                <div className="searchBarWrapper">
                    <SearchOutlined className="searchBarIcon"/>
                    <input type="text" placeholder="Search Twitter" className="searchBarInput"/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
