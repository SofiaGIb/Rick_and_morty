import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});
  const Nav = useNavigate();
  const backToHome = () => {
    Nav("/home");
  };

  useEffect(() => {
    const URL_BASE ="//rickandmortyapi.com/api/character/";
    const KEY = "7c11a1f267c9.1711e4a95e5d54ac646f";

    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
      setCharacter(response.data)
    );
  }, [detailId]);

  return (
    <div>
      {character.name ? (
        <>
        
        <h1 className={styles.name}>{character.name}</h1>
      <div className={styles.container}>
        <div>
          <img
            className={styles.imgDetails}
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className={styles.info}>
          <h3>Status: {character.status}</h3>
          <h3>Specie: {character.species}</h3>
          <h3>Gender: {character.gender}</h3>
          <h3>Origin: {character.origin?.name}</h3>
        </div>
      </div>
      <button className={styles.back} onClick={backToHome}>
        Back
      </button>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;