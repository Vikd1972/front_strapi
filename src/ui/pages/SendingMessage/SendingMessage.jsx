import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { API } from "../../../constant";
import { useAuthContext } from "../../../context/AuthContext";

import SendingMessageWrapper from "./SendingMessage.styles";

const SendingMessage = ({ setNewMessage, topics, setBlogs }) => {
  const { user } = useAuthContext();
  const [message, setMessage] = useState({
    title: '',
    topic: '',
    text: '',
    user: user,
  });

  const onTitle = (e) => {
    setMessage({
      ...message,
      title: e.target.value,
    })
  }

  const onTopic = (event, topic) => {
    const {
      target: { value },
    } = event;

    setMessage({
      ...message,
      topic: value,
    })
  }

  const onText = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    })
  }

  const onSaveNewMessage = async (e) => {
    e.preventDefault()
    if (!message.title.trim() || !message.topic.trim() || !message.text.trim()) {
      return
    };

    const response = await fetch(`${API}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    const data = await response.json();
    setBlogs(data)
    setNewMessage();
  }

  const reset = () => {
    setNewMessage();
  }

  return (
    <SendingMessageWrapper>
      <div className="message-form">
        Send new message (all fields are required):
        <form
          onSubmit={onSaveNewMessage}
        >
          <div className="title-group">
            <TextField
              id="input-title"
              label="Title"
              variant="outlined"
              onChange={onTitle}
            />
            <FormControl>
              <InputLabel id="input-topic-label">Topic</InputLabel>
              <Select
                labelId="input-topic-label"
                id="input-topic"
                value={message.topic}
                input={<OutlinedInput label="Topic" />}
                label="Topic"
                onChange={onTopic}
              >
                {topics.map((topic) => (
                  <MenuItem
                    key={topic}
                    value={topic}
                  >
                    {topic}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <textarea
            className='input-text'
            value={message.text}
            onChange={onText}
            placeholder='Your message'
          />
          <div className="button-group">
            <button
              className="button"
              type="button"
              onClick={reset}
            >
              Reset
            </button>
            <button
              className="button"
              type="submit">
              Send
            </button>
          </div>
        </form>
      </div>

    </SendingMessageWrapper>
  )
};

export default SendingMessage;