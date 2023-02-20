import { Button } from "antd";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { SiGmail } from "react-icons/si";

const SocialLinks = ({ author }) => {
  return (
    <div className="author__links">
      {author.twitter_username && (
        <Button
          className="social_button twitter"
          href={`https://twitter.com/${author.twitter_username}`}
          type="link"
          target="_blank"
        >
          <AiFillTwitterCircle size={24} />
        </Button>
      )}
      {author.linkedin_username && (
        <Button
          className="social_button linkedin"
          href={`https://www.linkedin.com/in/${author.linkedin_username}`}
          type="link"
          target="_blank"
        >
          <AiFillLinkedin size={24} />
        </Button>
      )}
      {author.github_username && (
        <Button
          className="social_button github"
          href={`https://github.com/${author.github_username}`}
          type="link"
          target="_blank"
        >
          <AiFillGithub size={24} />
        </Button>
      )}
      {author.website_url && (
        <Button
          className="social_button website"
          href={author.website_url}
          type="link"
          target="_blank"
        >
          <CgWebsite size={24} />
        </Button>
      )}
      {author.email && (
        <Button
          className="social_button gmail"
          href={`mailto:${author.email}`}
          type="link"
          target="_blank"
        >
          <SiGmail size={24} />
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
