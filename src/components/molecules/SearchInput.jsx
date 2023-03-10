import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SContainerWrapper>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainerWrapper>
  );
};

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
