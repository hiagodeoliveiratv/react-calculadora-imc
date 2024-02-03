import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";



type Props = {
    item: Level;
}

export const GridItem = ( {item} : Props)=>{
    
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>

            <div className={styles.gridIcon}>                
                <img src={require(`../../assets/${item.icon}.png`)} alt="" />
            </div>

            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de <strong>{item.yourImc.toFixed(1)} kg/m²</strong></div>            
            }
            
            <div className={styles.gridInfo}>
                <>
                    IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>                
                </>
            </div>
        </div>
    );
}