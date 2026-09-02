import { useState } from "react"
import { Link } from "react-router-dom";
import { getCourses } from "../../data/dataManager";


export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);



  const [isOpen, setIsOpen] = useState({
    filter: false,
    sort: false
  });

  const [filterRange, setFilterRange] = useState({
    price: null,
    duration: null
  });
  const [filterResults, setFilterResults] = useState(null);
  
  const courses = getCourses();

  const maxDuration = Math.max(...courses.map(course => Number(course.duration)));
  const minDuration = Math.min(...courses.map(course => Number(course.duration)));

  const maxPrice = Math.max(...courses.map(course => Number(course.price)));
  const minPrice = Math.min(...courses.map(course => Number(course.price)));


  const [sort, setSort] = useState(null);


  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;

  

  function searchItems(items, query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return [];

    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedQuery)
    );
  }

  function handleSearch(e) {
    if (e.key !== "Enter") return;

    const matches = searchItems(courses, search);

    setFilterRange({
      price: null,
      duration: null
    })
    setFilterResults(null);

    setIsOpen({
      filter: false,
      sort: false
    });

    setSearchResults(matches);
    setCurrentPage(1);
  }



  function handleFilter() {
    const matches = courses.filter(course => {
      const matchesDuration =
        filterRange.duration === null ||
        Number(course.duration) <= filterRange.duration;

      const matchesPrice =
        filterRange.price === null ||
        Number(course.price) <= filterRange.price;

      return matchesDuration && matchesPrice;
    });

    setSearchResults(null);
    setSearch("");

    setFilterResults(matches);
    setCurrentPage(1);
  }


  const results = searchResults ?? filterResults ?? courses;

  //IMPORTANTE: SORT MODIFICA EL ARRAY ORIGINAL ASÍ QUE SIEMPRE UNA COPIA
  const sortedResults = sort
    ? [...results].sort((a, b) => {
        if (sort === "price-asc") {
          return Number(a.price) - Number(b.price);
        }

        if (sort === "price-desc") {
          return Number(b.price) - Number(a.price); 
        }

        if (sort === "duration-asc") {
          return Number(a.duration) - Number(b.duration);
        }

        if (sort === "duration-desc") {
          return Number(b.duration) - Number(a.duration);
        }

        return 0;
      })
    : results;



    //PAGINACIÓN
    const totalPages = Math.ceil(sortedResults.length / coursesPerPage);

    const startIndex = (currentPage - 1) * coursesPerPage;

    const paginatedResults = sortedResults.slice(
      startIndex,
      startIndex + coursesPerPage
    );


  return (
    <div className="courses">
      <div className="courses__header">
        <h2>Courses</h2>
        <p></p>

        <div className="courses__header--tools">
          <div className="courses__header--tools-SCH">
            <input
              type="text"
              placeholder="⌕ Search and press Enter"
              aria-label="Press Enter to search."
              value={search}
              onChange={(e) => {
                setSearchResults(null);
                setSearch(e.target.value);
              }} 
              onKeyDown={handleSearch}
            />
          </div>

          <div className="courses__header--tools-FTR">
            <p>Filters</p>
            <button onClick={() => setIsOpen(prev => ({
                filter: !prev.filter,
                sort: false
              }))}
            >
              {isOpen.filter ? (
                <span>▴</span>
              ) : (
                <span>▾</span>
              )}
            </button>

            {isOpen.filter && (
              <div className="courses__header--tools-RNG">
                <div>
                  <p>Duration: Up to {filterRange.duration ?? maxDuration} h</p>
                  <input 
                    type="range"
                    min={minDuration}
                    max={maxDuration}
                    value={filterRange.duration ?? maxDuration}
                    step={0.5}
                    onChange={(e) =>
                      setFilterRange(prev => ({
                        ...prev,
                        duration: Number(e.target.value)
                      }))
                    }
                    onMouseUp={handleFilter}
                  />
                </div>
                
                <div>
                  <p>Price: Up to {filterRange.price ?? maxPrice} €</p>
                  <input 
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={filterRange.price ?? maxPrice}
                    step={1}
                    onChange={(e) =>
                      setFilterRange(prev => ({
                        ...prev,
                        price: Number(e.target.value)
                      }))
                    }
                    onMouseUp={handleFilter}
                  />
                </div>

                <button onClick={() => {
                  setFilterRange({
                    price: null,
                    duration: null
                  })
                  setFilterResults(null);
                  setCurrentPage(1);
                }}>
                  Restart Filters
                </button>
              </div>
            )}
          </div>

          <div className="courses__header--tools-SRT">
            <p>Sort by</p>
            <button onClick={() =>{
              setIsOpen(prev => ({
                filter: false,
                sort: !prev.sort
              }));
            }} 
            >
              {isOpen.sort ? (
                <span>{sort ?? "Select"} ▴</span>
              ) : (
                <span>{sort ?? "Select"} ▾</span>
              )}
            </button>

            {isOpen.sort && (
              <div className="courses__header--tools-SET">
                <select
                  value={sort ?? ""}
                  onChange={e => {
                    setSort(e.target.value || null);
                    setCurrentPage(1);
                  }}
                >
                  <option value="">Nothing</option>
                  <option value="price-asc">Price ↑</option>
                  <option value="price-desc">Price ↓</option>
                  <option value="duration-asc">Duration ↑</option>
                  <option value="duration-desc">Duration ↓</option>  
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="courses__body">
        {paginatedResults.length === 0 ? (
          <div>
            <p><span>🍃</span> No matches were found.</p>
          </div>
        ) : (
          paginatedResults.map(item => (
            <div className="courses__card" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.subname}</p>
              <Link to={`/courses/${item.id}`}>
                <img src={item.img ?? ""} alt={item.name} />
              </Link>
              <div>
                <p>{item.duration}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))
        )}

        {totalPages > 1 && (
          <div className="courses__pagination">
            <button
              onClick={() => setCurrentPage(prev => prev - 1)}
              disabled={currentPage === 1}
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? "is-active" : ""}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
