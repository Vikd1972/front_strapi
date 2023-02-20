import styled from 'styled-components';

const SendingMessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(22,22,22,0.5);
  .message-form {
    padding: 15px;
    border-radius: 15px;
    width: 500px;;
    position: relative;
    margin: 0 auto;
    top: 25%;
    background-color: white;
    display: flex;
    flex-direction: column;
    .title-group {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      #input-title {
        width: 220px;
      }
      #input-topic {
        width: 150px;
      }
    }
    .input-text {
      padding: 10px;
      width: 100%;
      height: 300px;
      margin-bottom: 10px;
    }
    .button-group {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      .button {
        cursor: pointer;
        padding: 8px 20px;
        color: white;
        background-color: #1890ff;
        border: none;
        border-radius: 10px;
      }
      .button:hover {
        background-color: #25a2ff;
      }
    }

  }
`;

export default SendingMessageWrapper;
