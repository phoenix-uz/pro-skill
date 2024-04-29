import React from "react";
import "./styles.sass";

const Timeline = () => {
  return (
    <section className='timeline'>
      <div className='container'>
        <div className='sectionTitleBlack'>
          <h3 className='title'>O'quv jarayoni</h3>
        </div>
        <div className='timelineItems'>
          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>Text</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>Text</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>

          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>Text</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>Text</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
