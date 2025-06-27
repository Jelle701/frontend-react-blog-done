import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './CreateNewPost.css';

const API_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api";
const PROJECT_ID = "4eb8a4e5-56fb-4419-84b3-378c9f23fd41";

function CreateNewPost() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    function calculateReadTime(text) {
        const wordCount = text.trim().split(/\s+/).length;
        return Math.max(1, Math.round(wordCount / (100 / 0.3)));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (content.length < 300 || content.length > 2000) {
            setError("Het bericht moet tussen de 300 en 2000 karakters zijn.");
            return;
        }

        const newPost = {
            title,
            subtitle,
            content,
            author,
            created: new Date().toISOString(),
            readTime: calculateReadTime(content),
            comments: 0,
            shares: 0,
        };

        try {
            const response = await axios.post(`${API_URL}/blogposts`, newPost, {
                headers: {
                    'novi-education-project-id': PROJECT_ID,
                    'Content-Type': 'application/json',
                }
            });

            setSuccess("De blogpost is succesvol toegevoegd!");
            setTitle('');
            setSubtitle('');
            setAuthor('');
            setContent('');

            // optioneel: navigeer direct naar nieuwe post
            // navigate(`/posts/${response.data.id}`);
        } catch (err) {
            setError("Er ging iets mis bij het verzenden van je blogpost.");
            console.error(err);
        }
    }

    return (
        <main className="page-container">
            <h1>Maak hier een nieuwe post</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Titel*:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </label>
                <label>
                    Subtitel*:
                    <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required/>
                </label>
                <label>
                    Auteur*:
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                </label>
                <label>
                    Bericht*:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        minLength={300}
                        maxLength={2000}
                    />
                </label>
                <button type="submit">Verzenden</button>
            </form>

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </main>
    );
}

export default CreateNewPost;
