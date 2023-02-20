import styled from 'styled-components';

const ProfileWrapper = styled.div`
.ant-card-body {
  margin: 0 auto;
  /* max-width: 1180px; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: inherit;
  gap: 20px;
  .adding-avatar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .avatar-wrapper {
      display: inline;
      width: 200px;
      height: auto;
      img {
        border-radius: 8px;
        max-width: 200px;
        width: 100%;
        max-height: 200px;
        object-fit: cover;
      }
    }
    .button {
      border-radius: 8px;
      background-color: #1890ff;
      padding: 8px;
      border: none;
      color: white;
      text-align: center;
      z-index: 999;
      cursor: pointer;
      .input-field {
        cursor: pointer;
        position: absolute;
        opacity: 0;
        margin-left: -168px; 
        margin-top: -8px; 
        width: 200px;
        height: 37px;
        border-radius: 8px;
        z-index: 9999;
      }
      .button:hover {
        background-color: #25a2ff;
      }
    }
  }

}

`;

export default ProfileWrapper;
