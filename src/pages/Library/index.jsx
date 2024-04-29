import React, { useEffect } from "react";
import PagesIntro from "../../components/UI/PagesIntro";
import Quote from "../../components/UI/Quote";
import Button from "../../components/UI/Button";
import library from "../../assets/images/library.png";
import DropdownWithSelect from "../../components/UI/Dropdown";
import Search from "../../components/UI/Search";
import LibraryCard from "../../components/UI/LibraryCard";
import PDFimg from "../../assets/images/pdf.png";
import Video from "../../assets/images/video.png";
import Audio from "../../assets/images/audio.png";
import "./styles.sass";
import { useDispatch, useSelector } from "react-redux";
import { getLibrary } from "../../store/userReducer";

const LibraryPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLibrary());
  }, []);
  console.log("data", users.user);

  const libraryBooksItems = [
    {
      id: 1,
      image: library,
      text: "Bleyz",
      total: { icon: "icon-Soundwave", number: "222 sahifalar" },
      infoTitle: "Stiven King",
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 2,
      image: library,
      text: "Bleyz",
      total: { icon: "icon-Notebook", number: "222 sahifalar" },
      infoTitle: "Stiven King",
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 3,
      image: library,
      text: "Bleyz",
      total: { icon: "icon-Folder-With-Files", number: "222 sahifalar" },
      infoTitle: "Stiven King",
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 4,
      image: library,
      text: "Bleyz",
      total: { icon: "icon-Play", number: "222 sahifalar" },
      infoTitle: "Stiven King",
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
  ];
  const libraryFdfsItems = [
    {
      id: 1,
      image: PDFimg,
      text: "Boshqaruv maslahatlar",
      total: { icon: "icon-Soundwave", number: "27 sahifalar" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 2,
      image: PDFimg,
      text: "Boshqaruv maslahatlar",
      total: { icon: "icon-Notebook", number: "27 sahifalar" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 3,
      image: PDFimg,
      text: "Boshqaruv maslahatlar",
      total: { icon: "icon-Folder-With-Files", number: "27 sahifalar" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 4,
      image: PDFimg,
      text: "Boshqaruv maslahatlar",
      total: { icon: "icon-Play", number: "27 sahifalar" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
  ];
  const libraryAudioItems = [
    {
      id: 1,
      image: Audio,
      text: "Audio HR maslahatlar",
      total: { icon: "icon-Soundwave", number: "27 sahifalar" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 2,
      image: Audio,
      text: "Audio HR maslahatlar",
      total: { icon: "icon-Notebook", number: "27 sahifalar" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 3,
      image: Audio,
      text: "Audio HR maslahatlar",
      total: { icon: "icon-Folder-With-Files", number: "27 sahifalar" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 4,
      image: Audio,
      text: "Audio HR maslahatlar",
      total: { icon: "icon-Play", number: "27 sahifalar" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
  ];
  const libraryVideoItems = [
    {
      id: 1,
      image: Video,
      text: "Uoll Strit",
      total: { icon: "icon-Soundwave", number: "27:00 minuta" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 2,
      image: Video,
      text: "Uoll Strit",
      total: { icon: "icon-Notebook", number: "27:00 minuta" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 3,
      image: Video,
      text: "Uoll Strit",
      total: { icon: "icon-Folder-With-Files", number: "27:00 minuta" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
    {
      id: 4,
      image: Video,
      text: "Uoll Strit",
      total: { icon: "icon-Play", number: "27:00 minuta" },
      infoText:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills .",
    },
  ];
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
              <Button className='secondary'>Kitoblar</Button>
              <Button className='secondary'>PDF</Button>
              <Button className='secondary'>Audio</Button>
              <Button className='secondary'>Video</Button>
            </div>
            <div>
              <DropdownWithSelect />
            </div>
            <div>
              <Search />
            </div>
          </div>
          <div className='libraryBox'>
            <div className='libraryBooksContainer'>
              <div className='libraryItems'>
                {libraryBooksItems.map((item, index) => (
                  <LibraryCard
                    key={index}
                    image={item.image}
                    alt={item.text}
                    contentText={item.text}
                    totalIcon={item.total.icon}
                    totalNumber={item.total.number}
                    btnText='Kutubhonaga otish'
                    infoTitle={item.infoTitle}
                    infoText={item.infoText}
                  />
                ))}
              </div>
              <div className='libraryBtn'>
                <Button>More</Button>
              </div>
            </div>
            <div className='libraryBooksContainer'>
              <div className='libraryItems'>
                {libraryFdfsItems.map((item, index) => (
                  <LibraryCard
                    key={index}
                    image={item.image}
                    alt={item.text}
                    contentText={item.text}
                    totalIcon={item.total.icon}
                    totalNumber={item.total.number}
                    btnText='Kutubhonaga otish'
                    infoTitle={item.infoTitle}
                    infoText={item.infoText}
                  />
                ))}
              </div>
              <div className='libraryBtn'>
                <Button>More</Button>
              </div>
            </div>
            <div className='libraryBooksContainer'>
              <div className='libraryItems'>
                {libraryAudioItems.map((item, index) => (
                  <LibraryCard
                    key={index}
                    image={item.image}
                    alt={item.text}
                    contentText={item.text}
                    totalIcon={item.total.icon}
                    totalNumber={item.total.number}
                    btnText='Kutubhonaga otish'
                    infoTitle={item.infoTitle}
                    infoText={item.infoText}
                  />
                ))}
              </div>
              <div className='libraryBtn'>
                <Button>More</Button>
              </div>
            </div>
            <div className='libraryBooksContainer'>
              <div className='libraryItems'>
                {libraryVideoItems.map((item, index) => (
                  <LibraryCard
                    key={index}
                    image={item.image}
                    alt={item.text}
                    contentText={item.text}
                    totalIcon={item.total.icon}
                    totalNumber={item.total.number}
                    btnText='Kutubhonaga otish'
                    infoTitle={item.infoTitle}
                    infoText={item.infoText}
                  />
                ))}
              </div>
              <div className='libraryBtn'>
                <Button>More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
