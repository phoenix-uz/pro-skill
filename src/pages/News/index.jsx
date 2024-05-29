import React from "react";
import "./styles.sass";
import PagesIntro from "../../components/UI/PagesIntro";
import Quote from "../../components/UI/Quote";
import CardNews from "../../components/UI/CardNews";
import NewsSlider from "../../components/NewsSlider";

const NewsPage = () => {
  return (
    <div className='newsPage'>
      <div className='container'>
        <div className='pageNewsContainer'>
          <PagesIntro
            introIcon='icon-Notebook'
            introTitle='Новости'
            introText='Важно следить за тенденциями, находится в информационной повестке и не отставать, тогда вы всегда будете востребованы и актуальны.'
          >
            <Quote
              name='Энди Уорхол'
              text='"Быть успешным в бизнесе - это самое увлекательное искусство. Делать деньги - это искусство и работа - это искусство, а хороший бизнес - лучшее искусство".'
            />
          </PagesIntro>
          <div className='cardsNewsContainer'>
            <div className='cards'>
              <CardNews
                title='Тренды рынка ТНП в сфере продаж и маркетинга'
                content='В этом году мы наблюдаем рост вакансий в секторе ТНП по сравнению с 2022 годом в среднем на 25–30%. Многие наши клиенты начали активный поиск и подбор персонала в сфере продаж, маркетинга и e-com.'
                link='https://ancor.ru/press/insights/trendy-rynka-tnp-v-sfere-prodazh-i-marketinga/'
              />
              <CardNews
                title='Как привлечь внимание и удержать клиента — стратегии воронок продаж 2024 года'
                content='При помощи вовлечения покупателей в несколько этапов'
                link='https://secrets.tinkoff.ru/blogi-kompanij/instrumenty-privlecheniya-klientov/'
              />
            </div>
            <div className='cards'>
              <CardNews
                title='Клиентский опыт'
                content='Общее впечатление и удовлетворение, которые получает клиент от взаимодействия с брендом'
                link='https://secrets.tinkoff.ru/glossarij/klientskij-opyt/'
              />
              <CardNews
                title='Основные этапы продаж: техника и последовательность шагов'
                content='Существует расхожая фраза: «Да он что угодно может продать: хоть песок в пустыне, хоть снег в Антарктиде». Значит ли это, что кто-то является прирожденным переговорщиком, а другому этого просто не дано?'
                link='https://sendpulse.com/ru/blog/stages-of-the-sales-cycle'
              />
            </div>
            <div className='cards'>
              <CardNews
                title='Лид'
                content='Человек, который заинтересовался продуктом бизнеса и оставил свой контакт для связи'
                link='https://secrets.tinkoff.ru/glossarij/lid/'
              />
              <CardNews
                title='Психология продаж: 25 эффективных методов влияния на покупателя'
                content='Психология продаж — то, без чего не обходится ни один современный бизнес. Каждый день мы что-то покупаем, а значит, продавцам нужно каким-то образом привлечь именно нас, чтобы мы не ушли к конкурентам и не выбрали чужой товар или услугу.'
                link='https://sales-generator.ru/blog/psikhologiya-prodazh/'
              />
            </div>
            <div className='cards'>
              <CardNews
                title='Фразы, которые нужно запретить продавцам'
                content='О чем речь? Скрипты продаж – это прекрасно. Но бывает, когда ситуация выходит из-под контроля и менеджеру приходится импровизировать. В этом случае главное – не переступить черту.'
                link='https://sales-generator.ru/blog/frazy-kotorye-nuzhno-zapretit-prodavtsam/'
              />
              <CardNews
                title='Коммуникация с клиентами: методы, принципы, инструменты'
                content='Коммуникация с клиентами влияет на их удовлетворенность, лояльность и количество повторных обращений. К тому же, довольный покупатель – бесплатный источник рекламы, который расскажет о своем опыте окружающим.'
                link='https://sales-generator.ru/blog/kommunikatsiya-s-klientami/'
              />
            </div>

            <div className='cards'>
              <CardNews
                title='Горячие звонки: последний шаг к продаже'
                content='Горячие звонки в отличие от холодных нацелены не на сбор информации о компании, выход на лицо, принимающее решение, отправку коммерческого предложения. Цель – продать товар или услугу. То есть клиент уже готов совершить покупку, осталось лишь немного подтолкнуть его к этому шагу.'
                link='https://sales-generator.ru/blog/goryachie-zvonki/'
              />
              <CardNews
                title='Клиенты конкурентов: как работать правильно'
                content='Клиенты конкурентов – это ваши потенциальные потребители. Проведя анализ и определив, почему они приобретают товар не у вас, можно сформировать более точное предложение и получить значимую часть покупателей на рынке.'
                link='https://sales-generator.ru/blog/klienty-konkurentov/'
              />
            </div>

            <div className='cards'>
              <CardNews
                title='Потребности клиента: простые способы их выявления и формирования'
                content='Прибыль компании напрямую зависит от количества сделок с клиентами. Есть разные способы повысить продажи: использование тех или иных рекламных каналов, предоставление скидок, проведение акций и так далее.'
                link='https://sales-generator.ru/blog/potrebnosti-klienta/'
              />
              <CardNews
                title='Как продавать товар, не продавая: техники, способы, советы'
                content='Клиент не хочет быть предметом охоты менеджеров, не желает, чтобы ему что-то активно втюхивали, продавали, а хочет покупать. Это проблема касается практически всех сфер бизнеса, будь то продажа товаров, услуг, B2B или B2C.'
                link='https://sales-generator.ru/blog/kak-prodavat-tovar-ne-prodavaya/'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='newsSliderContainer'>
        <NewsSlider />
      </div>
    </div>
  );
};

export default NewsPage;
