import ModalBackground from "../ModalBackground";
import closeIcon from "../../../assets/close.svg";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;

  .ModalEdit-wrapper {
    display: flex;
    position: relative;
    max-width: 360px;
    max-height: 239px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 32px 40px;
    gap: 24px;
    border-radius: 15px;
    z-index: 2;
  }

  h3 {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }

  .ModalEdit-button {
    color: var(--white);
    display: flex;
    width: 280px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 16px;

    border: none;
    border-radius: 8px;
    background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  }

  .ModalEdit-input {
    display: flex;
    width: 280px;
    padding: 18px 15px;
    justify-content: center;
    align-items: center;
    font-size: 16px;

    border-radius: 8px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);

    &::placeholder {
      font-size: 16px;
    }
  }

  .ModalEdit-close {
    position: absolute;
    right: 16px;
    top: 16px;
  }
`;

const ModalEdit = ({ onClick }) => {
  return (
    <ModalContainer>
      <div className="ModalEdit-wrapper">
        <button className="ModalEdit-close" onClick={onClick}>
          <img src={closeIcon} alt="닫기 버튼" />
        </button>
        <h3 className="ModalEdit-title">폴더 이름 변경</h3>
        <input className="ModalEdit-input" placeholder="내용 입력" type="text" />
        <button className="ModalEdit-button">변경하기</button>
      </div>
      <ModalBackground />
    </ModalContainer>
  );
};

export default ModalEdit;
