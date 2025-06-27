import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostItem from '../Helpers/PostItem';
import LoadingSpinner from '../Helpers/LoadingSpinner';
import '../App.css';

const API_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts";
const API_KEY = "4eb8a4e5-56fb-4419-84b3-378c9f23fd41";

function OverviewPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            try {
                const response = await axios.get(API_URL, {
                    headers: {
                        'novi-education-project-id': API_KEY
                    }
                });
                setPosts(response.data);
                setError(null);
            } catch (err) {
                setError("Fout bij ophalen van de blogposts.");
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return (
        <main className="page-container">
            <h1>Overzicht van Blogposts</h1>

            {loading && <LoadingSpinner />}
            {error && <p className="error">{error}</p>}

            {!loading && !error && posts.length > 0 && (
                <section className="post-overview">
                    {posts.map((post) => (
                        <PostItem
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            subtitle={post.subtitle}
                            author={post.author}
                        />
                    ))}
                </section>
            )}
        </main>
    );
}

export default OverviewPage;
