// postService.js

export const fetchRandomPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        // Shuffle the array and take 5 random items
        return data.sort(() => 0.5 - Math.random()).slice(0, 5);
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error; // Re-throw the error to handle it in the calling component
    }
};
