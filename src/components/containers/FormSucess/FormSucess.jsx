import React, { useContext } from "react";
import {
  MainContainer,
  ContainerButton,
  Text,
  GitHubP,
  CertificatesContainer,
  Certificates,
  LinkCertificate,
  GitHubDiv,
} from "./formStyled.js";
import Button from "../../micro/Button/Button";
import { UserDataContext } from "../../../contexts/UserDataProvider";
import { TabsContext } from "../../../contexts/TabsProvider";

const FormSucess = () => {
  const [selectedTab, setSelectedTab] = useContext(TabsContext);
  const [userData, setUserData] = useContext(UserDataContext);

  const removedata = () => {
    setSelectedTab(0);
    localStorage.clear();
    setUserData("");
  };

  console.log(userData);
  return (
    <MainContainer>
      <Text>Your data has been sent successfully!</Text>
      <Text>Full Name: {userData.name}</Text>
      <Text>Email: {userData.email}</Text>
      <Text>
        Birthday: {userData.day}/{userData.month}/{userData.year}
      </Text>
      <Text>Age: {userData.age}</Text>
      <GitHubDiv>
        <GitHubP>Github: {userData.github}</GitHubP>
      </GitHubDiv>
      <CertificatesContainer>
        <Text>Certificates:</Text>
        <Certificates>
          {userData.certificates.map((certificate, index) => (
            <LinkCertificate key={index}>{certificate}</LinkCertificate>
          ))}
        </Certificates>
      </CertificatesContainer>
      <Text>Team Name: {userData.teamname}</Text>
      <Text>Institution: {userData.institution}</Text>
      <Text>Graduation: {userData.graduation}</Text>

      <ContainerButton>
        <Button name="Return" type="button" onClick={() => removedata()} />
      </ContainerButton>
    </MainContainer>
  );
};

export default FormSucess;
