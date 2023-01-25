import './SearchForm.css';

export default function SearchForm() {
  return (
    <form /*action=''*/ /*method="GET"(most likely) or "POST"(if using server)*/> 
      <div class='searchForm'>
        <input id='searchbar' type='search' placeholder='Search Reddit posts...' required />
        <div class='sortBy'>
          <span>Sort by:</span>
          <input name='radio' id='relevance' type ='radio' value='relevance' defaultChecked='checked' />
          <label for='relevance'>Relevance</label>
          <input name='radio' id='latest' type ='radio' value='latest' />
          <label for='latest'>Latest</label>
        </div>
        <div class='numberOfPosts'>
          <label for='numberOfPosts'>Number of posts displayed: </label>
          <select class='selectPostNumber'>
            <option label='25' value='25'></option>
            <option label='50' value='50'></option>
            <option label='75' value='75'></option>
            <option label='100' value='100'></option>
          </select>
        </div>
      </div>
      <div class='searchButtonContainer'>
        <button type='submit' class='searchButton'>Search</button>
      </div>
    </form>
  );
}