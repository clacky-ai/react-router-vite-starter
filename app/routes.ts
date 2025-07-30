import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("posts", "routes/posts.tsx"),
  route("contact", "routes/contact.tsx"),
  route("*", "routes/not-found.tsx"), // Catch-all route for 404
] satisfies RouteConfig;