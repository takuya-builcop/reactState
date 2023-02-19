import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: `卓也-${val}`,
    email: "t-akama@builcop.biz",
    tel: "090-1111-4443",
    company: {
      name: "株式会社ビルコップ"
    },
    website: <a href="https://builcop.biz">https://builcop.biz</a>
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SuserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} isAdmin={isAdmin} />
        ))}
      </SuserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SuserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
