import React, { useEffect } from "react";
import LibraryCard from "../UI/LibraryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchLibraryData } from "../../store/librarySlice";
import "./styles.sass";

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

  return (
    <section className='library'>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <div className='container'>
        <div className='sectionTitleBlack'>
          <h3 className='title'>Наша библиотека</h3>
        </div>
        <div className='libraryItems'>
          {libraryData.map((item, index) => (
            <LibraryCard
              key={index}
              image={"https://proskill-academy.com/api/" + `${item.photoUrl}`}
              alt={item.name}
              contentText={item.name}
              totalIcon='icon-Soundwave'
              totalNumber={item.count}
              btnText='Приобрести курс'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
