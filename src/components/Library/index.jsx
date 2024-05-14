import React, { useEffect } from "react";
import library from "../../assets/images/library.png";
import "./styles.sass";
import LibraryCard from "../UI/LibraryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchLibraryData } from "../../store/librarySlice";

const Library = () => {
  const dispatch = useDispatch();
  const libraryData = useSelector((state) => state.library.data);
  const status = useSelector((state) => state.library.status);
  const error = useSelector((state) => state.library.error);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLibraryData());
    }
  }, [status, dispatch]);

  const libraryItem = [
    { id: 1, image: library, text: "Audio", total: { icon: "icon-Soundwave", number: "222" } },
    { id: 2, image: library, text: "Kitoblar", total: { icon: "icon-Notebook", number: "269" } },
    { id: 3, image: library, text: "Pdf", total: { icon: "icon-Folder-With-Files", number: "599" } },
    { id: 4, image: library, text: "Video", total: { icon: "icon-Play", number: "220" } },
  ];

  return (
    <section className='library'>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <div className='container'>
        <div className='sectionTitleBlack'>
          <h3 className='title'>Bizning kutubhona</h3>
        </div>
        <div className='libraryItems'>
          {libraryData.map((item, index) => (
            <LibraryCard
              key={index}
              image={item.photoUrl}
              alt={item.name}
              contentText={item.name}
              totalIcon='icon-Soundwave'
              totalNumber={item.count}
              btnText='Kutubhonaga otish'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
