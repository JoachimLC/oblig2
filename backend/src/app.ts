import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/projects", (c) => {
  return c.json({
    data: [
    {
      id:1,
      title: "Portfolio Website",
      description: "A personal portfolio website",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      link: "https://Joachim.com/portfolio",
      image: "/static/default-image.jpg"
    },
    {
      id:2,
      title: "Online store",
      description: "An online store platform built with Django.",
      technologies: ["Django", "Python", "HTML"],
      link: "https://onlinestore.com",
      image: "/static/default-image.jpg"
    },
    {
      id:3,
      title: "AI Chatbot",
      description: "An AI-powered chatbot",
      technologies: ["Python", "CHATGPT", "Flask"],
      link: "https://github.com/johndoe/ai-chatbot",
      image: "/static/default-image.jpg"
    }
],
  });
});

app.get("/student", (c) => {
  return c.json({
    name: "Halgeir Geirson",
    degree: "Bachelor IT",
    points: 180,
    email: "student@hiof.no",
    experiences: [
      { name: "Figma UI for customer X" },
      { name: "Website for customer Y" }
    ]
  });
});


export default app;
