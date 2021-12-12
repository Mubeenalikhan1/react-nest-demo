import InputField from '../component/InputField';
import Button from '../component/Button';

const SearchRecord = ({ value, handleChange, handleSearch }) => {
  return(
    <div className="card">
      <h1>Search Record</h1>         
      <InputField 
        value={value}
        className="search-bar"
        handleChange={handleChange} 
        type="number"
      />
      <Button 
        handleSearch={handleSearch}
        className="search-button"
      />
    </div>
  )
}
export default SearchRecord