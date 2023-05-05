import React from "react";
import { Route, Routes, useParams } from "react-router";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";


export default function Post() {
  const param = useParams();
  const post = posts.find((post) => post.id == param.id);

  if (!post) return <NaoEncontrada />;
  else
    return (
      <Routes>
        <Route path="*" element={<PaginaPadrao />}>
          <Route
            index
            element={
              <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
              >
                <div className="post-markdown-container">
                  <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>

                <h3 className="tituloOutrosPosts ">Outros Posts</h3>
                <div className="outrosPosts" >
                {posts.map((OutroPost, index) => {
                  if ((OutroPost.id != post.id)) {
                    return <PostCard post={OutroPost} />;
                  }
                })
                .sort((a, b) => b.id - a.id)
                .slice(0, 4)
                }
                </div>
              </PostModelo>
            }
          />
        </Route>
      </Routes>
    );
}
