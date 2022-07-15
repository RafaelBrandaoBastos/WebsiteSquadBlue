import styled from "styled-components";

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const ContainerCertificates = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-bottom: 2.5rem;
`;
export const ContainerButtonsMessage = styled.div`
  min-height: 8.8rem;
`;
export const ContainerButtonsCertificatesMore = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  min-height: 4rem;
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
export const ContainerTeamname = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-bottom: 2.5rem;
`;
export const ContainerInstitution = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-bottom: 2.5rem;
`;
export const ContainerGraduation = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-bottom: 2.5rem;
`;

export const ContainerButtonsMore = styled.div`
  min-height: 8.8rem;
`;
export const ErrorMessage = styled.span`
  position: absolute;
  font-size: 1.4rem;
  color: red;
  @media (max-width: 300px) {
    font-size: 1.2rem;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;
