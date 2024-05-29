import React from "react";
import "./styles.sass";

const Achivements = () => {
  return (
    <div className='achivements'>
      <div className='achivementsContainer'>
        <div className='achivementsHeading'>
          <div className='sectionTitleBlack'>
            <h3 className='title'>Наши достижения</h3>
          </div>
          <div className='achivementsText'>
            <p className='text'>
              Наша компания успешно работает в сфере продаж уже более трех лет, демонстрируя впечатляющие достижения и
              постоянный рост. За это время мы сумели значительно расширить ассортимент продукции, предлагая нашим
              клиентам только высококачественные товары от ведущих производителей.
            </p>
          </div>
        </div>
        <div className='achivementsCards'>
          <div className='achivementsItems'>
            <div className='achivementItem'>
              <div className='itemIcon'>
                <i className='icon icon-Play'></i>
              </div>
              <div className='itemTitle'>
                <h4 className='title'>Рост клиентской базы</h4>
              </div>
              <div className='itemText'>
                <p className='text'>
                  Мы увеличили количество наших клиентов на 50% благодаря высокому уровню сервиса и индивидуальному
                  подходу.
                </p>
              </div>
            </div>
            <div className='achivementItem'>
              <div className='itemIcon'>
                <i className='icon icon-Play'></i>
              </div>
              <div className='itemTitle'>
                <h4 className='title'>Расширение географии продаж</h4>
              </div>
              <div className='itemText'>
                <p className='text'>
                  Мы открыли представительства в 3 новых странах включая Россию, Казахстан и Турцию, что позволило нам
                  обслуживать более широкий круг потребителей.
                </p>
              </div>
            </div>
          </div>
          <div className='achivementsItems'>
            <div className='achivementItem'>
              <div className='itemIcon'>
                <i className='icon icon-Play'></i>
              </div>
              <div className='itemTitle'>
                <h4 className='title'>Внедрение инноваций</h4>
              </div>
              <div className='itemText'>
                <p className='text'>
                  Мы внедрили передовые технологии в процесс продаж, включая автоматизацию складских операций и систему
                  управления взаимоотношениями с клиентами (CRM), что повысило эффективность работы и сократило время
                  обработки заказов.
                </p>
              </div>
            </div>
            <div className='achivementItem'>
              <div className='itemIcon'>
                <i className='icon icon-Play'></i>
              </div>
              <div className='itemTitle'>
                <h4 className='title'>Партнерства с лидерами отрасли</h4>
              </div>
              <div className='itemText'>
                <p className='text'>
                  Мы заключили стратегические партнерства с ключевыми производителями, что позволило нам предложить
                  эксклюзивные продукты и условия нашим клиентам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
