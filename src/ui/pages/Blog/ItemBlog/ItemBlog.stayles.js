import styled from 'styled-components';

const ItemBlogWrapper = styled.div`
  /* max-width: 960px; */
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid black;
  border-radius: 30px;
  margin-bottom: 10px;
.author {
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 20px;
  gap: 20px;
  &__avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  &__data {
    margin-top: -5px;
    display: flex;
    flex-direction: column;
    h1 {
      margin: 0;
    }
  }
  &__header p {
    margin: 0;
    font-size: 16px;
    span {
      font-weight: 700;
    }
  }
}
.author__links a {
  margin-right: 10px;
}
.text {
  padding: 10px;
}
`;

export default ItemBlogWrapper;
