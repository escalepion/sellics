import styles from './imageWrapper.module.scss';

const ImageWrapper = ({ image = {} }) => {
  if(!image?.id) return <div className={styles.emptyWrapper}>No image selected</div>

  return(
    <div className={styles.imageWrapper}>{<img alt="approve img" src={image.url} />}</div>
  )
}

export default ImageWrapper;