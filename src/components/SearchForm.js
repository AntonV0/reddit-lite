import './SearchForm.css';

export default function SearchForm() {
  return (
    <form /*action=''*/ /*method="GET"(most likely) or "POST"(if using server)*/> 
      <div className='searchForm'>
        <input id='searchbar' type='search' placeholder='Search Reddit posts...' required />
        <div className='sortBy'>
          <span>Sort by:</span>
          <input name='radio' id='relevance' type ='radio' value='relevance' defaultChecked='checked' />
          <label for='relevance'>Relevance</label>
          <input name='radio' id='latest' type ='radio' value='latest' />
          <label for='latest'>Latest</label>
        </div>
        <div className='numberOfPosts'>
          <label for='numberOfPosts'>Posts displayed: </label>
          <select className='selectPostNumber'>
            <option label='25' value='25'></option>
            <option label='50' value='50'></option>
            <option label='75' value='75'></option>
            <option label='100' value='100'></option>
          </select>
        </div>
      </div>
      <div className='searchButtonContainer'>
        <button type='submit' className='searchButton'>Search</button>
      </div>
    </form>
  );
}