import styles from "./Posts.module.css"

type PostProps = {
    title: string,
    content: string 
}

export default function Posts({title, content} : PostProps)
{
    return(
    <div className={styles.container}>
        <div className={styles.title}>
            {title}
        </div>
        <div className={styles.content}>
            {content}
        </div>
    </div>
    
)
}