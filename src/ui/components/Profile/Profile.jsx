import React, { useState, useMemo } from "react";
import { Button, Card, Col, Form, Input, message, Row, Spin } from "antd";
import axios from "axios";

import { useAuthContext } from "../../../context/AuthContext";
import { API } from "../../../constant";
import { getToken } from "../../../helpers";

import ProfileWrapper from "./Profile.styles";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();
  const [avatarUrl, setAvatarUrl] = useState({
    id: 0,
    url: user?.avatar_url || 'http://localhost:1337/uploads/thumbnail_005_61c80aae1d.png'
  });

  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({
          ...data,
          avatar_id: avatarUrl.id,
          avatar_url: avatarUrl.url
        }),
      });
      const responseData = await response.json();

      setUser(responseData);
      message.success("Data saved successfully!");
    } catch (error) {
      console.error(Error);
      message.error("Error While Updating the Profile!");
    } finally {
      setLoading(false);
    }
  };

  const sendingImage = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    const form = new FormData();

    form.append('files', file, e.target.files[0].name);
    const response = await fetch('http://localhost:1337/api/upload', {
      method: 'post',
      body: form,
    });
    let json = await response.json();

    setAvatarUrl({
      id: json[0].id,
      url: `http://localhost:1337${json[0].formats.thumbnail.url}`
    });

    await fetch(`${API}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        ...user,
        avatar_id: json[0].id,
        avatar_url: `http://localhost:1337${json[0].formats.thumbnail.url}`,
      }),
    })

    setUser({
      ...user,
      avatar_id: json[0].id,
      avatar_url: `http://localhost:1337${json[0].formats.thumbnail.url}`,
    });
    message.success("Avatar changed");

    await fetch(`${API}/upload/files/${user.avatar_id}`, {
      method: 'delete',
    });
  };


  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <ProfileWrapper>
      <Card className="profile_page_card">
        <div className="adding-avatar">
          <div className="avatar-wrapper">
            <img
              src={avatarUrl.url ? avatarUrl.url : user?.avatar_url}
              alt="user avatar"
              id="output"
            />
          </div>
          <form className="button">
            add/change photo
            <input
              className="input-field"
              accept="image/*"
              onChange={(e) => sendingImage(e)}
              type="file"
            />
          </form>
        </div>
        <Form
          layout="vertical"
          initialValues={{
            username: user?.username,
            email: user?.email,
            twitter_username: user?.twitter_username,
            linkedin_username: user?.linkedin_username,
            github_username: user?.github_username,
            avatar_id: avatarUrl.id,
            avatar_url: avatarUrl.url,
            website_url: user?.website_url,
            about: user?.about,
          }}
          onFinish={handleProfileUpdate}
        >
          <Row gutter={[16, 16]}>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Username is required!",
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required!",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <br />
            {/* <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Avatar Url"
                name="avatar_url"
                rules={[
                  {
                    type: "url",
                  },
                ]}
              >
                <Input
                  placeholder="Avatar Url"
                  value={avatarUrl}
                />
              </Form.Item>
            </Col> */}
            <Col span={24}>
              <Form.Item
                label="About"
                name="about"
                rules={[
                  {
                    required: true,
                    type: "string",
                    max: 120,
                  },
                ]}
              >
                <Input.TextArea placeholder="About" rows={6} />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Twitter Username"
                name="twitter_username"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Twitter Username" />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="LinkedIn Username"
                name="linkedin_username"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="LinkedIn Username" />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Github Username"
                name="github_username"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Github Username" />
              </Form.Item>
            </Col>
            <Col md={8} lg={8} sm={24} xs={24}>
              <Form.Item
                label="Website Url"
                name="website_url"
                rules={[
                  {
                    type: "url",
                  },
                ]}
              >
                <Input placeholder="Website Url" />
              </Form.Item>
            </Col>
          </Row>
          <Button
            className="profile_save_btn"
            htmlType="submit"
            type="primary"
            size="large"
          >
            {loading ? (
              <>
                <Spin size="small" /> Saving
              </>
            ) : (
              "Save"
            )}
          </Button>
        </Form>
      </Card>
    </ProfileWrapper>
  );
};

export default Profile;