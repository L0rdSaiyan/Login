import styles from "./Posts.module.css"

type PostProps = {
    title: string,
    content: string 
    userName?: string
}

export default function Posts({title, content,userName} : PostProps)
{
    return(
    <div className={styles.container}>
        <div className={styles.userName}>
            {userName}
            
        </div>
        <div className={styles.title}>
            {title}
        </div>
        <div className={styles.content}>
            {content}
        </div>
    </div>
    
)
}