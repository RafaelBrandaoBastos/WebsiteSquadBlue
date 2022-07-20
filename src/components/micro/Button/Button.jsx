import React from "react";
import {
  ButtonNextStyled,
  ButtonMoreStyled,
  ButtonFinishStyled,
  ButtonReturnStyled,
  ButtonCertificatesStyled,
  LinkCertificates,
  ButtonRemoveCertificates,
  ContainerRemoveCertificates,
} from "./buttonStyled";
import { TbPlus } from "react-icons/tb";
import { MdNavigateNext } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Button = (props) => {
  if (props.name === "Next")
    return (
      <ButtonNextStyled name={props.name} type={props.type}>
        {props.name}
      </ButtonNextStyled>
    );

  if (props.name === "More")
    return (
      <ButtonMoreStyled
        name={props.name}
        type={props.type}
        onClick={props.onClick}
      >
        {props.name}
        <TbPlus
          color={"white"}
          size={"2rem"}
          style={{ position: "absolute", left: "10%" }}
        />
        <MdNavigateNext
          color="white"
          size="2.5rem"
          style={{ position: "absolute", right: "8%" }}
        />
      </ButtonMoreStyled>
    );

  if (props.name === "Finish")
    return (
      <ButtonFinishStyled name={props.name} type={props.type}>
        {props.name}
      </ButtonFinishStyled>
    );

  if (props.name === "Return")
    return (
      <ButtonReturnStyled
        name={props.name}
        type={props.type}
        onClick={props.onClick}
      >
        {props.name}
      </ButtonReturnStyled>
    );

  if (props.name === "Certificates")
    return (
      <ButtonCertificatesStyled
        name={props.name}
        type={props.type}
        onClick={props.onClick}
      >
        {props.name}
      </ButtonCertificatesStyled>
    );

  if (props.name === "RemoveCertificate")
    return (
      <ContainerRemoveCertificates>
        <LinkCertificates>{props.children}</LinkCertificates>
        <ButtonRemoveCertificates
          name={props.name}
          type={props.type}
          onClick={props.onClick}
        >
          <AiOutlineClose
            color="white"
            size="1.1rem"
            style={{ position: "absolute", top: "3%", right: "5%" }}
          />
        </ButtonRemoveCertificates>
      </ContainerRemoveCertificates>
    );
};

export default Button;
