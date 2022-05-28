import { ReactNode } from 'react';
import styles from './card.module.scss'

interface CardProps{
    bgColor?: string;
    width?: string;
    height?: string;
    bdRadius?: string;
    children?: ReactNode;
}

const Card:React.FC<CardProps> = ({bgColor, width, height, bdRadius, children}) => { 
    let cardStyle = {
        backgroundColor: `${bgColor}`,
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${bdRadius}`
    }
    
    return (
        <div className={styles['card']} style={ cardStyle }>
            {children}
        </div>
    )
    
}

export default Card;