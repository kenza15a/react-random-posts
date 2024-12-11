// postService.js
export const fetchRandomPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data.sort(() => 0.5 - Math.random()).slice(0, 5);
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};
