import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PostCard from "../../components/PostCard";
import SideBar from "../../components/SideBar";
import posts from "../../data/posts";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <main className={styles.home}>
                <section className={styles.posts}>
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </section>
                <SideBar />
            </main>
            <Footer />
        </>
    );
}

export default Home;