import React from 'react';
import Slider from "react-slick";
import MainTitle from 'components/mainTitle';
import EmptyButton from 'components/emptyButton';

import styles from './approved.module.scss';

const ApprovedListCard = ({ list = [], handleAddButtonClick }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };

  return (
    <div className={styles.approvedWrapper}>
      <MainTitle text={`APPROVED IMAGES (${list.length})`} />
      <div className={styles.contentWrapper}>
        {!list.length && <EmptyButton onButtonClick={handleAddButtonClick} />}
      </div>
      {!!list.length && (
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {list.map(image => (
              <div><img src={image.url} alt="slider" /></div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default ApprovedListCard;
