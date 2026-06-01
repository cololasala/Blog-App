const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Introduction to React",
      description:
        "Learn the fundamentals of React and how to build reusable components.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "TypeScript Guide",
      description:
        "Discover how TypeScript improves the quality and maintainability of your code.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Backend with Node.js",
      description: "Build fast and scalable APIs using Express and Node.js.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Responsive Design",
      description:
        "Learn modern techniques to make your websites adapt to any device.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "SQL Databases",
      description:
        "Learn how to work with MySQL and write efficient database queries.",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="menu">
      <h1>Other post you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.image} alt="" />
          <h2>{post.title}</h2>
          <button className="button-read-more">Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
