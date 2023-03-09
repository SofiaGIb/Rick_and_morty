import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({characters}) {
return (
   <div className={style.container} >{
      characters.map(({image,species,name,gender})=>{
        return(
         <Card
         image={image}
         species={species}
         gender={gender}
         name={name}   
         onClose={() => window.alert('Emulamos que se cierra la card')}
         /> )})
   }
   </div>
)
  }   
      
      