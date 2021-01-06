export default function SearchForm (props) {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <form className="search-form">
          <div className="d-flex align-items-center" role="button">
            <span className="fas fa-search mr-2" style={{ fontSize: '20px' }}></span>
            <input type="text" name="search" id="search" className="form-control" placeholder="Search Here"/>
          </div>
        </form>
      </div>
    </div>
  )
}