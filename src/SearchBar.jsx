import { useState, useContext, useEffect } from "react";
import CartContext from "./context/CartContext";
const SearchBar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const { allProducts } = useContext(CartContext);
  
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(`${searchItem}`.toLowerCase())
    );
  
    function handleSearch(e) {
      setSearchItem(e.target.value);
      setIsDropdownVisible(true);
    }
    useEffect(() => {
      const handleClickOutside = (event) => {
        // If the clicked element is outside the search input or dropdown, clear the input
        if (!event.target.closest('.search-bar') && !event.target.closest('.dropdown')) {
          setSearchItem('');  // Clear the search input
          setIsDropdownVisible(false);  // Hide the dropdown
        }
      };
    
      // Attach the event listener to the document
      document.addEventListener('click', handleClickOutside);
    
      // Cleanup the event listener on component unmount
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
    return (
      <div style={{ position: "relative", width: "fit-content" }}>
        <input className="search-bar"
          value={searchItem}
          onChange={handleSearch}
          placeholder="search ..."
          style={{ width: "100%" }}
        ></input>
        {isDropdownVisible && searchItem.length > 0 && (
          <div className="dropdown"
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              width: "100%",
              height: "200px",
              overflowY: "auto",
              background: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              zIndex: 999,
            }}
          >
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.title} style={{ cursor: "pointer" }}>
                  {product.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  export default SearchBar