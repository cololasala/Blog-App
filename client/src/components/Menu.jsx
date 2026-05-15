const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Introducción a React",
      description:
        "Aprendé los conceptos básicos de React y cómo crear componentes reutilizables.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Guía de TypeScript",
      description:
        "Descubrí cómo TypeScript mejora la calidad y mantenibilidad de tu código.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Backend con Node.js",
      description:
        "Creá APIs rápidas y escalables utilizando Express y Node.js.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Diseño Responsive",
      description:
        "Aprendé técnicas modernas para adaptar tus páginas a cualquier dispositivo.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Bases de Datos SQL",
      description:
        "Conocé cómo trabajar con MySQL y realizar consultas eficientes.",
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
