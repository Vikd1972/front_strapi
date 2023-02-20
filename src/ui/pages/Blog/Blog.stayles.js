import styled from 'styled-components';

const BlogWrapper = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  gap: 10px;
  display: flex;
  flex-direction: row;
  .blogs {
    display: flex;
    flex-direction: column;
  }
  .filter {
    max-width: 80px;
    width: 100%;
  }
  .add-message {
    cursor: pointer;
  }
  .add-message:hover {
    color: #1890ff;
  }
  .topic {
    margin: 5px 0;
    cursor: pointer;
  }
  .topic:hover {
    color: #1890ff;
  }
`;

export default BlogWrapper;
