import { SearchOutlined } from '@mui/icons-material'
import './searchBar.css'

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="searchBarWrapper">
                <SearchOutlined className="searchBarIcon"/>
                <input type="text" placeholder="Search Twitter" className="searchBarInput"/>
            </div>
        </div>
    )
}

export default SearchBar
