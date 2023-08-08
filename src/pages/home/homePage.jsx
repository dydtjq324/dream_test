import React, { useState, useEffect } from "react";
import * as S from "./homePage.style";
import { Radio } from "antd";
import axios from "axios";
import { MyDatePicker } from "../../components/common/DatePicker/DatePicker";

import { Checkbox } from "antd";

const plainOptions = ["선택1", "선택2", "선택3"];

export function HomePage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [userData, setUserData] = useState(null);
  const [Info2, setInfo2] = useState("");
  const [Info4, setInfo4] = useState("");
  const [value, setValue] = useState(1);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  // Axios를 사용하여 데이터 가져오기
  useEffect(() => {
    axios.get("https://api-jobtest.json2bot.chat/test").then((response) => {
      setUserData(response.data.data);
    });
  }, []);

  // 저장버튼 눌렀을때 POST요청
  const onClickSaveBtn = () => {
    axios
      .post("https://api-jobtest.json2bot.chat/test", postData)
      .then((response) => {
        console.log("응답 데이터:", response.data);
        // 서버에서 반환된 상태 코드에 따라 분기 처리
        if (response.status === 200) {
          console.log("요청이 성공했습니다.");
        } else {
          console.log("요청이 실패했습니다. 상태 코드:", response.status);
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          // 400 에러 처리
          console.error("400 에러가 발생했습니다.", error.response.data);
        } else if (error.response.status >= 500) {
          // 500 에러 처리
          console.error("서버에서 500 에러가 발생했습니다.");
        }
      });
  };
  // POST로 보낼 데이터
  const postData = {
    info1: userData?.info1,
    info2: Info2,
    info3: userData?.info3,
    info4: Info4,
    date: selectedDate,
    info5: value === 3 ? userData?.info5 : "",
    info6: selectedCheckboxes,
  };
  // 정보2 변경사항
  const onChangeInfo2 = (e) => {
    setInfo2(e.target.value);
  };
  // 정보4 변경사항
  const onChangeInfo4 = (e) => {
    setInfo4(e.target.value);
  };
  // 라디오버튼 변경사항
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // 체크박스버튼 변경사항
  const onChangeCheckBox = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setSelectedCheckboxes(checkedValues);
  };
  return (
    <S.Container>
      <S.Title>타이틀</S.Title>
      <S.Divider />
      <S.InfoContainer>
        <S.InfoTitle>정보1</S.InfoTitle>
        <S.InfoContent>{userData?.info1}</S.InfoContent>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.InfoTitle>정보2</S.InfoTitle>
        <S.Infoinput placeholder="정보 내용입력" onChange={onChangeInfo2} />
      </S.InfoContainer>
      <S.InfoContainer>
        <S.InfoTitle>정보3</S.InfoTitle>
        <S.InfoContent>{userData?.info3}</S.InfoContent>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.InfoTitle>정보4</S.InfoTitle>
        <S.Infoinput placeholder="정보 내용입력" onChange={onChangeInfo4} />
      </S.InfoContainer>
      <S.InfoContainer>
        <S.InfoTitle>날짜</S.InfoTitle>
        <MyDatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </S.InfoContainer>

      <S.InfoContainer>
        <S.InfoTitle>정보5</S.InfoTitle>
        <S.RadioContainer>
          <Radio.Group
            onChange={onChange}
            value={value}
            style={{ marginLeft: "170px" }}
          >
            <Radio value={1}>선택1</Radio>
            <Radio value={2}>선택2</Radio>
            <Radio value={3}>선택3</Radio>
          </Radio.Group>
          {value === 3 && (
            <S.RadioClickContent>{userData?.info5}</S.RadioClickContent>
          )}
        </S.RadioContainer>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.InfoTitle>정보6</S.InfoTitle>
        <S.InfoContent>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={""}
            onChange={onChangeCheckBox}
          />
        </S.InfoContent>
      </S.InfoContainer>
      <S.Divider />
      <S.BtnContaner>
        <S.SaveBtn onClick={onClickSaveBtn}>저장</S.SaveBtn>
      </S.BtnContaner>
    </S.Container>
  );
}
