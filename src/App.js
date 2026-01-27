import Header from "./components/Header";
import Hero from "./components/Hero";
import PostCard from "./components/PostCard";
import SideBar from "./components/SideBar";
import posts from "./data/posts";
import Footer from "./components/Footer";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="home">
        <section className="posts">
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

export default App;
