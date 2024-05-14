import React, { useEffect, useState } from "react";
import { fetchLibraryWithItemsData } from "../../store/libraryWithItemsSlice";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import PagesIntro from "../../components/UI/PagesIntro";
import Quote from "../../components/UI/Quote";
import Button from "../../components/UI/Button";
import DropdownWithSelect from "../../components/UI/Dropdown";
import Search from "../../components/UI/Search";
import LibraryCard from "../../components/UI/LibraryCard";
import LibraryImage from "../../assets/images/library.png";
import "./styles.sass";
import { fetchProfileData } from "../../store/profileSlice";
import { fetchSearchData } from "../../store/searchSlice";

const LibraryPage = () => {
  const dispatch = useDispatch();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const libraryPageData = useSelector((state) => state?.libraryWithItems?.data);
  const status = useSelector((state) => state.libraryWithItems.status);
  const error = useSelector((state) => state.libraryWithItems.error);
  const isLogined = useSelector((state) => state.auth.isLogined);
  const profileData = useSelector((state) => state?.profile?.profileData);
  const searchData = useSelector((state) => state?.search?.data);
  const [filterResult, setFilterResult] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  console.log(libraryPageData);

  const filterByBookName = (index) => {
    const filtered = libraryPageData[index].items;
    setFilteredItems(filtered);
  };

  console.log(filteredItems);

  useEffect(() => {
    filterData();
  }, [selectedOptions]);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLibraryWithItemsData());
      dispatch(fetchProfileData());
      dispatch(fetchSearchData());
    }
  }, [status, dispatch]);

  function filterData() {
    let result = [];

    libraryPageData.forEach((typeItem) => {
      selectedOptions.forEach((option) => {
        const borders = option.split(",");
        result = result.concat(typeItem.items.filter((book) => book.price >= borders[0] && book.price <= borders[1]));
      });
    });
    setFilterResult(result);
  }

  function renderBooks(books) {
    return (
      <div className='libraryBooksContainer'>
        <div className='libraryItems'>
          {books.map((item, index) => (
            <LibraryCard
              key={index}
              image={!item.photoUrl ? LibraryImage : "http://185.217.131.110:5000/" + item.photoUrl}
              alt={item.text}
              contentText={item.title}
              totalIcon='icon-Folder-With-Files'
              totalNumber={`${item.length} sahifalar`}
              btnText={!isLogined ? "Kutubhonaga otish" : `${item.price} ball`}
              infoTitle={item.author}
              infoText={item.subtitle}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='libraryPage'>
      <div className='container'>
        <div className='libraryPageContainer'>
          <PagesIntro
            introIcon='icon-Notebook'
            introTitle='Kutubhona'
            introText='We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please do not hesitate to reach out to us using any of the following contact methods'
          >
            <Quote />
          </PagesIntro>
          <div className='libraryHeader'>
            <div className='btnGroup'>
              {libraryPageData?.map((item, index) => (
                <Button
                  className='secondary'
                  onClick={() => filterByBookName(index)}
                >
                  {item?.name}
                </Button>
              ))}
            </div>
            <div>
              {isLogined ? (
                <DropdownWithSelect
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              ) : (
                <></>
              )}
            </div>
            <div>
              <Search />
            </div>
          </div>
          <div className='libraryBox'>
            {searchData.length > 0
              ? renderBooks(searchData)
              : filteredItems.length > 0
              ? renderBooks(filteredItems)
              : filterResult.length > 0
              ? renderBooks(filterResult)
              : libraryPageData.map((typeItem, index) => (
                  <div
                    className='libraryBooksContainer'
                    key={index}
                  >
                    <div className='libraryItems'>
                      {typeItem?.items?.slice(0, 4).map((item, index) => (
                        <LibraryCard
                          key={index}
                          image={!item.photoUrl ? LibraryImage : "http://185.217.131.110:5000/" + item.photoUrl}
                          alt={item.text}
                          contentText={item.title}
                          totalIcon='icon-Folder-With-Files'
                          totalNumber={`${item.length} sahifalar`}
                          btnText={!isLogined ? "Kutubhonaga otish" : `${item.price} ball`}
                          infoTitle={item.author}
                          infoText={item.subtitle}
                        />
                      ))}
                    </div>
                    {typeItem?.items?.length > 4 && (
                      <div className='libraryBtn'>
                        <Button onClick={() => filterByBookName(index)}>More</Button>
                      </div>
                    )}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
