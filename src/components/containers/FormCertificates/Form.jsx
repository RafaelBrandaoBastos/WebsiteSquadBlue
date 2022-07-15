import React, { useContext, useEffect, useState } from "react";
import Input from "../../micro/Input/Input";
import {
  Form,
  ErrorMessage,
  ContainerButton,
  ContainerCertificates,
  ContainerButtonsMore,
  ContainerButtonsCertificatesMore,
  ContainerMessageMore,
  ErrorMessageMore,
  ContainerTeamname,
  ContainerInstitution,
  ContainerGraduation,
} from "./formStyled.js";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TabsContext } from "../../../contexts/TabsProvider";
import { UserDataContext } from "../../../contexts/UserDataProvider";
import Button from "../../micro/Button/Button";

const schema = yup
  .object({
    certificates: yup.string(),
    teamname: yup
      .string()
      .required("Please enter your Team Name")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-\s]+$/,
        "Team Name Invalid"
      ),
    institution: yup
      .string()
      .required("Please enter your Institution")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-\s]+$/,
        "Institution Name Invalid"
      ),
    graduation: yup
      .string()
      .required("Please enter your Graduation")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-\s]+$/,
        "Graduation Name Invalid"
      ),
  })
  .required();

const FormCertificates = () => {
  const [selectedTab, setSelectedTab] = useContext(TabsContext);
  const [userData, setUserData] = useContext(UserDataContext);
  const [certificates, setCertificates] = useState([]);
  const [errorCertificates, setErrorCertificates] = useState(false);
  const [invalidLink, setInvalidLink] = useState(false);

  const {
    getValues,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    setUserData({ ...userData, ...data });
    setSelectedTab(selectedTab + 1);
    SetData();
  };

  const SetData = () => {
    localStorage.setItem("StorageCertificates", JSON.stringify(getValues()));
  };

  const GetData = () => {
    if (localStorage.getItem("StorageCertificates")) {
      const StorageData = JSON.parse(
        localStorage.getItem("StorageCertificates")
      );
      const keys = Object.keys(StorageData);
      keys.forEach((key) => {
        setValue(key, StorageData[key]);
      });
    }
  };

  useEffect(() => {
    GetData();
    window.addEventListener("beforeunload", SetData());
    return () => {
      window.removeEventListener("beforeunload", SetData());
    };
  }, []);

  useEffect(() => {
    if (userData) {
      const keys = Object.keys(userData);
      keys.forEach((key) => {
        setValue(key, userData[key]);
      });
    }
  });

  const addCertificate = () => {
    const certificate = getValues("certificates");
    if (
      certificate.match(
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
      )
    ) {
      setInvalidLink(false);
      if (certificates.length < 5) {
        setCertificates((lastValues) => [...lastValues, certificate]);
      } else {
        setErrorCertificates(true);
      }
    } else {
      setInvalidLink(true);
    }
  };

  console.log(certificates);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ContainerCertificates>
        <Input
          width="100%"
          label="Certificates"
          type="text"
          placeholder="https://www.Certificate.com"
          {...{ register: register("certificates") }}
        />
      </ContainerCertificates>

      <ContainerButtonsMore>
        <ContainerButtonsCertificatesMore>
          <Button name="Certificates" type="button" />
          {certificates.map((certificate, index) => (
            <Button name="RemoveCertificate" type="button" key={index}>
              {certificate}
            </Button>
          ))}
          <Button name="More" type="button" onClick={() => addCertificate()} />
        </ContainerButtonsCertificatesMore>

        {errorCertificates && (
          <ContainerMessageMore>
            <ErrorMessageMore>
              Sorry, only 5 certificates are allowed.
            </ErrorMessageMore>
            <ErrorMessageMore>
              You can remove one certificate instead.
            </ErrorMessageMore>
          </ContainerMessageMore>
        )}

        {invalidLink && (
          <ContainerMessageMore>
            <ErrorMessageMore>
              Empty certificate is not allowed.
            </ErrorMessageMore>
          </ContainerMessageMore>
        )}
      </ContainerButtonsMore>

      <ContainerTeamname>
        <Input
          width="100%"
          label="Team Name"
          type="text"
          placeholder="Team Green"
          {...{ register: register("teamname") }}
        />
        <ErrorMessage style={{ left: "80px" }}>
          {errors.teamname?.message}
        </ErrorMessage>
      </ContainerTeamname>

      <ContainerInstitution>
        <Input
          width="100%"
          label="Institution"
          type="text"
          placeholder="Universidade Federal da Paraíba"
          {...{ register: register("institution") }}
        />
        <ErrorMessage style={{ left: "80px" }}>
          {errors.institution?.message}
        </ErrorMessage>
      </ContainerInstitution>

      <ContainerGraduation>
        <Input
          width="100%"
          label="Graduation"
          type="text"
          placeholder="Ciências da Computação"
          {...{ register: register("graduation") }}
        />
        <ErrorMessage style={{ left: "80px" }}>
          {errors.graduation?.message}
        </ErrorMessage>
      </ContainerGraduation>

      <ContainerButton>
        <Button name="Finish" type="submit" />
      </ContainerButton>
    </Form>
  );
};
export default FormCertificates;
