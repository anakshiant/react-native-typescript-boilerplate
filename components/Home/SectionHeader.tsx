import React from "react";
import styled from "styled-components/native";
import { COLOR } from "../../utils/constants";

type Props = {
  title: string;
};

const SectionHeaderRoot = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 32px;
  padding-left: 10px;
  background: ${COLOR.LIGHT_GREY};
  margin-bottom: 8px;
`;

const SectionTitleText = styled.Text`
  font-weight: bold;
  color: #333333;
  font-size: 20px;
  letter-spacing: 1px;
`;

const SectionHeader: React.FC<Props> = ({ title }: Props) => (
  <SectionHeaderRoot>
    <SectionTitleText>{title}</SectionTitleText>
  </SectionHeaderRoot>
);

export default SectionHeader;
