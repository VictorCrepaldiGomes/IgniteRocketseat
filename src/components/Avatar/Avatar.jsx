import styles from './Avatar.module.css';


export function Avatar({hasBorder = true, src}) {
    // const hasBorder = props.hasBorder !== false;
    
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src} />
        //Se hasborder conter hasBorder ele vai mostrar a classe avatarWithBorder, se não ele vai mostrar a classe avatar
    )
}