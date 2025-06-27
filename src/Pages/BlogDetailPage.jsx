import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../Helpers/LoadingSpinner";
import "../App.css";

function BlogDetailPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchPost() {
            setLoading(true);
            setError("");
            try {
                const response = await axios.get(
                    `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`,
                    {
                        headers: {
                            "novi-education-project-id": "4eb8a4e5-56fb-4419-84b3-378c9f23fd41",
                        },
                    }
                );
                setPost(response.data);
            } catch (err) {
                setError("Er is iets misgegaan bij het ophalen van de blogpost.");
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [id]);

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="error-message">{error}</div>;
    if (!post) return <div>Geen blogpost gevonden.</div>;

    return (
        <main className="page-container">
            <article className="blog-detail">
                <h1>{post.title}</h1>
                <h2>{post.subtitle}</h2>
                <p className="blog-content">{post.content}</p>
                <p className="blog-meta">
                    Geschreven door <strong>{post.author}</strong> op {new Date(post.created).toLocaleDateString()}<br />
                    Leestijd: {post.readTime} minuten – {post.comments} reacties – {post.shares} keer gedeeld
                </p>
            </article>
        </main>
    );
}

export default BlogDetailPage;
