import React, { useEffect, useState } from "react";
import Input from "../Input";
import "./styles.sass";
import { useDispatch } from "react-redux";
import { fetchSearchData } from "../../../store/searchSlice";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchData(searchQuery));
  }, [searchQuery]);
  return (
    <div className='search'>
      <div className='searchIcon'>
        <i className='icon-search'></i>
      </div>
      <Input
        className='inputSearch'
        type='search'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Поиск'
      />
    </div>
  );
};

export default Search;
