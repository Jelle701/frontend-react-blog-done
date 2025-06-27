import axios from 'axios';

const API_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api";
const PROJECT_ID = "4eb8a4e5-56fb-4419-84b3-378c9f23fd41";

function ApiTest() {
    async function fetchAllPosts() {
        try {
            const response = await axios.get(`${API_URL}/blogposts`, {
                headers: {
                    'novi-education-project-id': PROJECT_ID,
                    'Accept': '*/*'
                }
            });
            console.log("✅ Alle posts opgehaald:", response.data);
        } catch (error) {
            console.error("❌ Fout bij ophalen posts:", error);
            console.error("Status:", error.response?.status);
        }
    }

    return (
        <main className="page-container">
            <h1>API Testpagina</h1>
            <button onClick={fetchAllPosts}>Haal alle posts op</button>
        </main>
    );
}

export default ApiTest;
