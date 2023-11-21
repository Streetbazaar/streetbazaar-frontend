import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./error.module.css"
import TrashImg from "../../assets/images/CharcoDeleteTrash.png"

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);
  const navigate = useNavigate();

  return (
    <div className={styles.errorPage}>
      <img src={TrashImg} alt="error" />
      <h1>Oops!</h1>
      <p>There is nothing here</p>

      <div className={styles.buttonGroup}>
        <button onClick={()=>navigate("/")}>Go Home</button>
        <button onClick={()=>navigate("/sell-your-product/post-advert")}>Post Ad</button>
      </div>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}