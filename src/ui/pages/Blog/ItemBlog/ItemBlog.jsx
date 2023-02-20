import React from "react";
import { Image } from "antd";

import SocialLinks from "../../SocialLinks/SocialLinks";

import ItemBlogWrapper from "./ItemBlog.stayles";

const locale = 'ru';

const ItemBlog = ({ blog }) => {
  const author = blog.user?.data.attributes;
  const dateCreated = new Date(blog.createdAt)

  return (
    <ItemBlogWrapper>
      <div className="author">
        <Image
          className="author__avatar"
          preview={false}
          src={author.avatar_url}
        />
        <div className="author__data">
          <h1>{author.username}</h1>
          <SocialLinks author={author} />
        </div>
        <div className="author__header">
          <p>Title: <span>{blog.title}</span></p>
          <p>Created: <span>{dateCreated.toLocaleDateString(locale)}</span> at <span>{dateCreated.toLocaleTimeString(locale)}</span></p>
          <p>Topic: <span>{blog.topic}</span></p>
        </div>
      </div>
      <div className="text">Text {blog.text}</div>

    </ItemBlogWrapper>
  )
};

export default ItemBlog;