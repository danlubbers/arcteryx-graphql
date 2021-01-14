import styles from "../Loading/Loading.module.scss";
import logo from "../../assets/logo/arc-teryx.svg";

interface LoadingProps {
  hasProduct: boolean;
}

const Loading: React.FC<LoadingProps> = ({ hasProduct }) => {
  return (
    <div className={styles.loadingContainer}>
      <img className={styles.logo} src={logo} alt="logo" />
      {hasProduct ? (
        <p>Content is Loading...</p>
      ) : (
        <p>No Products have been found!</p>
      )}
    </div>
  );
};

export default Loading;
