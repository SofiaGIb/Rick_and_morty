import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from "react";
import styles from './Card.module.css'
import axios from "axios"

export default function Card({name, species, gender, image, onClose, id}) {
   const dispatch = useDispatch()
   
   const myFavorites = useSelector(state => state.myFavorites)

   const[isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) setIsFav(true)
      })
   }, [id, myFavorites])
   const addFavorite = (character)=>{
      axios
      .post("http://localhost:3001/rickandmorty/fav",character)
      .then((res)=>console.log("ok"))
   } 


   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         dispatch(deleteFavorite(id))
      }
      else{
         setIsFav(true)
         dispatch(addFavorite({
            name, species, gender, image, id}))
      }
   }
   
   return (
      <div className={styles.Card}>
         <div className={styles.Top}>
            <div className={styles.Fav}>
            {
               isFav ? (
                           <button onClick={handleFavorite} className={styles.botoFav} >❤️</button>
                        ) : (
                           <button onClick={handleFavorite} className={styles.botoFav} >🤍</button>
                        )
            }
            </div>
               <div className={styles.Exit}>
                  <button className={styles.botoExit} onClick={onClose}>X</button>
               </div>
         </div>

            <img className={styles.imgCard} src={image} alt ={name}></img>
            
            <Link to={`/detail/${id}`}>
               <div className={styles.nameCard}>
                  <h2>{name}</h2>
               </div>
            </Link>

            <div className={styles.infoCard}>
               <h2>{gender}</h2>
               <h2>{species}</h2>
            </div>
      </div>
   );
}