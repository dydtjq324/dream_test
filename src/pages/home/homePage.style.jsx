import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1024px;
  flex-direction: column;
  padding-left: 40px;
`;
export const Title = styled.h1``;
export const Divider = styled.div`
  border: 1px solid #e0e4e8;
  margin-bottom: 40px;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  align-items: center;
`;

export const InfoContent = styled.div`
  font-size: 14px;
  margin-left: 170px;
`;
export const Infoinput = styled.input`
  font-size: 14px;
  margin-left: 170px;
  width: 160px;
  height: 34px;
  border-radius: 5px;

  border: 1px solid #dedede;
`;

export const InfoTitle = styled.div`
  font-size: 14px;
  font-weight: bolder;
`;

export const BtnContaner = styled.div`
  display: flex;
  justify-content: end;
`;

export const SaveBtn = styled.button`
  border: none;
  justify-content: center;
  width: 74px;
  height: 40px;
  color: white;
  background-color: #024eee;
  border-radius: 5px;
  cursor: pointer;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioClickContent = styled.div`
  margin-top: 10px;
  font-size: 14px;
  margin-left: 170px;
  color: red;
`;
