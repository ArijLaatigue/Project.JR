import { useState } from "react";
import products from "../fakedata.js";
var BarSearch = () => {
  const [searchTerm, setSearch] = useState("");
  return (
    <div className="BarSearch">
      <input
      id="search"
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {products
        .filter((value) => {
          if (searchTerm === "") {
            return ;
          } else if (
            value.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .map((element, index) => {
          var link =  "#"+element.name.replace(/\s+/g, '-').toLowerCase()
          return (
            <div className="search-product">
              <a href={link}>{element.name}</a>
            </div>
          );
        })}
    </div>
  );
};

export default BarSearch;
