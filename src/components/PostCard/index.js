import "./index.css";

function PostCard({ post }) {
    return (
        <article className="post-card">
            <div
                className="post-image"
                style={{ backgroundImage: `url(${post.image})` }}
            >
                <span className={`post-tag ${post.category.toLowerCase()}`}>
                    {post.category}
                </span>
            </div>

            <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
            </div>
        </article>
    );
}

export default PostCard;