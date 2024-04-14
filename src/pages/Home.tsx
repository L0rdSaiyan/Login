import axios from "axios"
import Posts from "../components/Posts"
import InputText from "../components/form/InputText"
import styles from "./Home.module.css"
import { useEffect, useState } from "react"

type PostTypes = {
    id: number,
    titulo: string,
    conteudo: string
}

export default function Home() {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [posts, setPosts] = useState<PostTypes[]>([])
    const [postCreated, setPostCreated] = useState<boolean>(false) // Estado para controlar a criação de postagens

    useEffect(() => {
        getPosts()
    }, [postCreated]) // useEffect irá rodar novamente sempre que postCreated mudar

    async function getPosts() {
        try {
            const response = await axios.get("http://localhost:8081/postagens");
            setPosts(response.data.postagens)
        } catch (error) {
            console.log(`Erro ao obter postagens: ${error}`)
        }
    }

    const handleTitleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
    }

    async function createPost(event : React.FormEvent<HTMLFormElement>) {
        event?.preventDefault()
        
        const Post = {
            titulo: title,
            conteudo: content
        }

        axios.post("http://localhost:8081/postagemcriada", Post)
        .then((response) => {
            console.log(`Resposta do servidor: ${response.data}`)
            setPostCreated(prevState => !prevState) // Altera o estado para que useEffect rode novamente
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className={styles.container}>
            <h2>Posts</h2>
            <div className={styles.createPost}>
                <h1>Create Post</h1>
                <div className={styles.inputs}>
                    <form onSubmit={createPost}>
                        <input 
                            type="text"
                            placeholder="Insira o titulo da publicação"
                            onChange={handleTitleChange}
                        />
                        <textarea 
                            placeholder="Insira o conteúdo da publicalão"
                            onChange={handleContentChange}
                        />
                        <input 
                            type="submit"
                        />
                    </form>
                </div>
            </div>
            <div className={styles.containerPosts}>
                {posts && posts.map((post) => (
                    <Posts key={post.id} title={post.titulo} content={post.conteudo} />
                ))}
            </div>
        </div>
    )
}
