export default function Blog() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Blog</h1>

        <p style={styles.subtitle}>
          Thoughts, tutorials, and learnings from my web development journey.
        </p>

        <article style={styles.post}>
          <h2 style={styles.postTitle}>Getting Started with Next.js</h2>
          <p style={styles.date}>January 30, 2026</p>
          <p style={styles.content}>
            Next.js is a powerful React framework that helps you build fast,
            SEO-friendly web applications with ease. It provides file-based
            routing, server-side rendering, and great developer experience.
          </p>
        </article>

        <article style={styles.post}>
          <h2 style={styles.postTitle}>Why JavaScript</h2>
          <p style={styles.date}>January 20, 2026</p>
          <p style={styles.content}>
            JavaScript allows you to build interactive and dynamic web
            applications. From frontend to backend, it plays a huge role in
            modern web development.
          </p>
        </article>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "700px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "40px",
  },
  post: {
    textAlign: "left",
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "1px solid #eee",
  },
  postTitle: {
    fontSize: "22px",
    marginBottom: "5px",
  },
  date: {
    fontSize: "14px",
    color: "#999",
    marginBottom: "10px",
  },
  content: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
  },
};
