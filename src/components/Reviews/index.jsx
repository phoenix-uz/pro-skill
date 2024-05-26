import React from "react";
import ReviewsSlider from "./ReviewsSlider";
import "./styles.sass";

const Reviews = () => {
  return (
    <section className='reviews'>
      <div className='reviewsContainer'>
        <div className='sectionTitleWhite'>
          <h3 className='title'>Отзывы тех, кто прошел наш курс</h3>
        </div>
        <ReviewsSlider />
      </div>
    </section>
  );
};

export default Reviews;
