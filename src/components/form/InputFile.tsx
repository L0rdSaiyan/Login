import { useState } from "react";
import styles from "./InputFile.module.css";
import anonymous from "../../images/anonymousiamge.jpg"

export default function InputFile() {
    const [file, setFile] = useState('');
    const [imageUrl, setImageUrl] = useState(anonymous);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile.name);
            const objectUrl = URL.createObjectURL(selectedFile);
            setImageUrl(objectUrl);
        } else {
            setFile('');
            setImageUrl('');
        }
    };

    return (
        <>
            <label htmlFor="arquivo" className={styles.custom_file_upload}>
                <input 
                    type="file" 
                    onChange={handleFileChange} 
                    id="arquivo" 
                    name="arquivo" 
                    className={styles.input_file} 
                />
                <img src={imageUrl} alt="profilePic" />
            </label>
        </>
    );
}
