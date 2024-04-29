import React from "react";
import library from "../../assets/images/library.png";
import "./styles.sass";
import LibraryCard from "../UI/LibraryCard";

const Library = () => {
  const libraryItem = [
    { id: 1, image: library, text: "Audio", total: { icon: "icon-Soundwave", number: "222" } },
    { id: 2, image: library, text: "Kitoblar", total: { icon: "icon-Notebook", number: "269" } },
    { id: 3, image: library, text: "Pdf", total: { icon: "icon-Folder-With-Files", number: "599" } },
    { id: 4, image: library, text: "Video", total: { icon: "icon-Play", number: "220" } },
  ];
  return (
    <section className='library'>
      <div className='container'>
        <div className='sectionTitleBlack'>
          <h3 className='title'>Bizning kutubhona</h3>
        </div>
        <div className='libraryItems'>
          {libraryItem.map((item, index) => (
            <LibraryCard
              key={index}
              image={item.image}
              alt={item.text}
              contentText={item.text}
              totalIcon={item.total.icon}
              totalNumber={item.total.number}
              btnText='Kutubhonaga otish'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
