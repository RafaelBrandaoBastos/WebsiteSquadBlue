import styled from "styled-components";
import NextIcon from "../../../assets/nextIcon.svg";
import CheckIcon from "../../../assets/checkIcon.svg";
import IconCertificates from "../../../assets/iconCertificates.svg";

export const ButtonNextStyled = styled.button`
  width: 8.1rem;
  height: 4rem;
  background: #074ee8;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  border: none;
  color: #ffffff;
  padding-left: 0.8em;
  background-image: url(${NextIcon});
  background-repeat: no-repeat;
  background-position: 3.5em;
  background-size: contain;

  &:hover {
    cursor: pointer;
    background-color: #20b7d8;
  }
`;

export const ButtonMoreStyled = styled.button`
  width: 10.9rem;
  height: 4rem;
  background: #074ee8;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #ffffff;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #20b7d8;
  }

  @media (max-width: 350px) {
    width: 8rem;
    font-size: 1rem;
  }
`;

export const ContainerMessageMore = styled.div`
  margin-top: 0.5rem;
  height: 4.7rem;
  margin-bottom: 1.1rem;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ErrorMessageMore = styled.span`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #ff0000;

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 396px) {
    font-size: 0.8rem;
  }
`;

export const ButtonFinishStyled = styled.button`
  width: 9.1rem;
  height: 4rem;
  background: #074ee8;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  font-weight: 5;
  display: flex;
  align-items: center;
  padding-left: 3.5rem;
  position: relative;
  color: #ffffff;
  border: none;
  background-image: url(${CheckIcon});
  background-repeat: no-repeat;
  background-position: 0.8em;
  background-size: contain;

  &:hover {
    cursor: pointer;
    background-color: #20b7d8;
  }
`;

export const ButtonReturnStyled = styled(ButtonFinishStyled)`
  width: 9.7rem;
`;

export const ButtonCertificatesStyled = styled(ButtonMoreStyled)`
  width: 18.7rem;
  height: 4rem;
  background-image: url(${IconCertificates});
  background-repeat: no-repeat;
  background-position: 8.7em;
  background-size: contain;
  padding-left: 4.1rem;
  justify-content: left;

  @media (max-width: 350px) {
    width: 9.35rem;
    padding-left: 1rem;
    background-position: 7.35em;
  }
`;

export const ContainerRemoveCertificates = styled.div`
  width: 18.7rem;
  height: 3.6rem;
  background: rgba(7, 78, 232, 0.8);
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  padding: 1.4rem 0.9rem 0.9rem 0.5rem;
  justify-content: space-between;
  margin-top: -0.5rem;
`;

export const LinkCertificates = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
  width: 14.9rem;
`;

export const ButtonRemoveCertificates = styled.button`
  width: 1.4rem;
  height: 1.3rem;
  border: none;
  background: rgba(7, 78, 232, 0);
  position: relative;

  :hover {
    cursor: pointer;
  }
`;
