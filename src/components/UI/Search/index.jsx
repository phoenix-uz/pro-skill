import React from "react";
import Input from "../Input";
import "./styles.sass";

const Search = () => {
  return (
    <div className='search'>
      <div className='searchIcon'>
        <i className='icon-Play'></i>
      </div>
      <Input
        className='inputSearch'
        //   value={filter.query}
        //   onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder='search'
      />
    </div>
  );
};

export default Search;
