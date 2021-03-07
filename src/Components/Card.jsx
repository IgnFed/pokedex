import React from 'react'
import styles from './Styles/CardStyle.module.css'
import types from './Styles/CardStylesTypes.module.css'

export const Tarjeta = (props)=>{

      return (
            

            <div>
                  
                  


                  <section className={styles.section}>

                        <div className={styles.allContentCardContainer}>
                              <div className={styles.cardContainer}>

                                    <div className={styles.containerImage}>
                                                <img src={props.image} alt={props.pokeName} lazy="true" />
                                          <span></span>      
                                    </div>
                                    
                                          <div className={styles.containerContent}>
                                          <p className={styles.bgred}>Pokemon: {props.pokeName}  </p>
                                         
                                          {
                                                props.type.length > 1 ? (


                                                      props.type.map((item, inx) =>(

                                                            
                                                            <p 
                                                            key = {inx}
                                                            className={
                                                                 `
                                                                  ${item.type.name === "fire" ? (types.fire) :
                                                                  
                                                                  item.type.name === "water" ? (types.water):
                                                                  
                                                                  item.type.name === "bug" ? (types.bug):

                                                                  item.type.name === "poison" ? (types.poison):

                                                                  item.type.name === "grass" ? (types.grass):
                                                                  
                                                                  item.type.name === "electric" ? (types.electric):

                                                                  item.type.name === "psychic" ? (types.psychic):

                                                                  item.type.name === "ghost" ? (types.ghost):

                                                                  item.type.name === "ice" ? (types.ice):

                                                                  item.type.name === "rock" ? (types.rock):
                                                                  
                                                                  item.type.name === "ground" ? (types.ground):

                                                                  item.type.name === "fighting" ? (types.fighting):

                                                                  item.type.name === "steel" ? (types.steel):

                                                                  item.type.name === "normal" ? (types.normal):

                                                                  item.type.name === "fairy" ? (types.fairy):


                                                                  item.type.name === "flying" ? (types.flying):

                                                                  (null)}
                                                                  `
                                    

                                                                  
                                                            }>
                                                                  
                                                                  
                                                            Type {inx  + 1}: {item.type.name}</p>

                                                      ))

                                                ):
                                                (      
                                                      props.type.map((item) =>(

                                                            
                                                            <p 
                                                            key = {item}
                                                            className={
                                                                  `
                                                                  ${styles.unicType}
                                                                  ${item.type.name === "fire" ? (types.fire) :
                                                                  
                                                                  item.type.name === "water" ? (types.water):
                                                                  
                                                                  item.type.name === "bug" ? (types.bug):

                                                                  item.type.name === "poison" ? (types.poison):

                                                                  item.type.name === "grass" ? (types.grass):
                                                                  
                                                                  item.type.name === "electric" ? (types.electric):

                                                                  item.type.name === "psychic" ? (types.psychic):

                                                                  item.type.name === "ghost" ? (types.ghost):

                                                                  item.type.name === "ice" ? (types.ice):

                                                                  item.type.name === "rock" ? (types.rock):
                                                                  
                                                                  item.type.name === "ground" ? (types.ground):

                                                                  item.type.name === "fighting" ? (types.fighting):

                                                                  item.type.name === "steel" ? (types.steel):

                                                                  item.type.name === "normal" ? (types.normal):

                                                                  item.type.name === "fairy" ? (types.fairy):


                                                                  (types.default)}
                                                                  `
                                    

                                                                  
                                                            }>
                                                                  
                                                                  
                                                            Type 1: {item.type.name}</p>

                                                      ))
                                                )

                                          }
                                          <p className={styles.bgred}>ID: {props.pokeId} </p>
                                         </div>
                              </div>
                        </div>

                  </section>
                  

            </div>


      )
}



