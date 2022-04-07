import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getImage, addSelectedImage , rejectImage} from "store/images/actions";
import ApprovedListCard from 'components/approvedListCard';
import MainTitle from 'components/mainTitle';
import ImageWrapper from 'components/imageWrapper';
import Button from 'components/button';

import styles from './layout.module.scss';

const Layout = () => {
  let dispatch = useDispatch();
  const fetchedSelectedImages = useSelector(state => state.ImagesReducer)?.selectedImages || [];
  const fetchedCurrentImage = useSelector(state => state.ImagesReducer)?.currentImage || {};

  const handleAddButtonClick = () => {
    dispatch(getImage());
  }

  const handleRejectButtonClick = () => {
    dispatch(rejectImage(fetchedCurrentImage));
    dispatch(getImage());
  }

  const handleAcceptButtonClick = () => {
    dispatch(addSelectedImage(fetchedCurrentImage));
    dispatch(getImage());
  }

  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.bodyWrapper}>
        <div>
          <div className={styles.header}>
            <div className={styles.headerText}>
              <MainTitle text="IMAGE APPROVAL APPLICATION" />
            </div>
          </div>
          <ApprovedListCard list={fetchedSelectedImages} handleAddButtonClick={handleAddButtonClick} />
        </div>
        <div>
          <ImageWrapper image={fetchedCurrentImage} />
          <div>
            {fetchedCurrentImage?.id && (
              <div className={styles.buttonWrapper}>
                <Button type="dark" text="Reject" onClick={handleRejectButtonClick} />
                <Button text="Accept" onClick={handleAcceptButtonClick} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
