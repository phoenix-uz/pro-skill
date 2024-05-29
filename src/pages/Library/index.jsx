import React, { useEffect, useState } from "react";
import { fetchLibraryWithItemsData } from "../../store/libraryWithItemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../../store/profileSlice";
import { fetchSearchData } from "../../store/searchSlice";
import { bookPurchaseData } from "../../store/bookPurchaseSlice";
import { toast } from "react-toastify";
import PagesIntro from "../../components/UI/PagesIntro";
import Quote from "../../components/UI/Quote";
import Button from "../../components/UI/Button";
import DropdownWithSelect from "../../components/UI/Dropdown";
import Search from "../../components/UI/Search";
import LibraryCard from "../../components/UI/LibraryCard";
import LibraryImage from "../../assets/images/library.png";
import ModalBox from "../../components/UI/ModalBox";
import Cookies from "js-cookie";
import "./styles.sass";

const LibraryPage = () => {
  const dispatch = useDispatch();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const libraryPageData = useSelector((state) => state?.libraryWithItems?.data);
  const status = useSelector((state) => state.libraryWithItems.status);
  const profileData = useSelector((state) => state?.profile?.profileData);
  const searchData = useSelector((state) => state?.search?.data);
  const [filterResult, setFilterResult] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const filterByBookName = (index) => {
    const filtered = libraryPageData[index].items;
    setFilteredItems(filtered);
  };
  const handlePurchaseBtnClick = (bookData) => {
    const currentBalance = profileData?.balls || 0;
    openModal(bookData);
    if (currentBalance < bookData.price) {
      toast.error("Not enough money for buying this book");
      closeModal();
    }
  };
  const handlePurchase = async (bookId) => {
    dispatch(bookPurchaseData(bookId));
  };

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
          {books?.map((item, index) => (
            <LibraryCard
              key={index}
              image={!item.photoUrl ? LibraryImage : "https://proskill-academy.com/api/" + item.photoUrl}
              alt={item.text}
              contentText={item.title}
              totalIcon='icon-Folder-With-Files'
              totalNumber={`${item.length} sahifalar`}
              btnText={!Cookies.get("access_token") ? "Приобрести курс" : `${item.price} балов`}
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
            introTitle='Библиотека'
            introText='Нет пределу совершенству, стремитесь стать лучшим в своем деле, а наша постоянно пополняемая библиотека вам в это поможет.'
          >
            <Quote
              name='Мэри Кэй Эш'
              text='"Представьте, что каждый человек, с которым вы встречаетесь, имеет знак вокруг своей шеи, который говорит: "Заставьте меня чувствовать себя важным". Мало того, что вам удастся добиться успеха в продажах, вы добъетесь успеха в жизни"'
            />
          </PagesIntro>
          {libraryPageData ? (
            <>
              <div className='libraryHeader'>
                <div className='btnGroup'>
                  {libraryPageData?.map((item, index) => (
                    <Button
                      className='secondary'
                      onClick={() => filterByBookName(index)}
                      key={index}
                    >
                      {item?.name}
                    </Button>
                  ))}
                </div>
                <div>
                  {!Cookies.get("access_token") && (
                    <DropdownWithSelect
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                    />
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
                          {/* {renderBooks(typeItem?.items?.slice(0, 4))} */}
                          {typeItem?.items?.slice(0, 4).map((item, index) => (
                            <LibraryCard
                              key={index}
                              image={
                                !item.photoUrl ? LibraryImage : "https://proskill-academy.com/api/" + item.photoUrl
                              }
                              alt={item.text}
                              contentText={item.title}
                              totalIcon='icon-Folder-With-Files'
                              totalNumber={`${item.length} sahifalar`}
                              btnText={
                                !Cookies.get("access_token")
                                  ? "Приобрести курс"
                                  : profileData?.purchases?.some((purchasedItem) => purchasedItem.itemId == item.id)
                                  ? "Уже куплена"
                                  : `${item.price} балов`
                              }
                              infoTitle={item.author}
                              infoText={item.subtitle}
                              onClick={() =>
                                profileData?.purchases.some((purchasedItem) => purchasedItem.itemId == item.id)
                                  ? () => {}
                                  : handlePurchaseBtnClick(item)
                              }
                            />
                          ))}
                        </div>
                        {modalData && (
                          <ModalBox
                            cancel={closeModal}
                            purchase={() => handlePurchase(modalData.id)}
                            bookData={modalData}
                          />
                        )}
                        {typeItem?.items?.length > 4 && (
                          <div className='libraryBtn'>
                            <Button onClick={() => filterByBookName(index)}>Больше</Button>
                          </div>
                        )}
                      </div>
                    ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
