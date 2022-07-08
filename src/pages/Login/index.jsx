import React from "react";
import { useState } from "react";
import logoAdopet from "../../assets/logoAdopet.png";
import { DivRigth, DivLeft,DivInstructionImg ,DivsContainer } from "./styles";
import { CadastreForm } from "../../components/CadastreForm";
import { LoginForm } from "../../components/LoginForm";
import gatinho from "../../assets/gatinho.png";

function Login() {
  const [form, setForm] = useState(false);

  const instruction = [{img:gatinho, Text: "oioi" },
  {img:gatinho, Text: "oioi" },
  {img:gatinho, Text: "oioi" },
  {img:gatinho, Text: "oioi" },
  {img:gatinho, Text: "oioi" },
  {img:gatinho, Text: "oioi" },]
                     
 
  return (
    <DivsContainer>

      <DivRigth>
        <img src={logoAdopet} className="imgLogo" alt="logo" />

        {form ? <LoginForm /> : <CadastreForm />}
      </DivRigth>
      <div className="linha"></div>
      <DivLeft>
        {form ? (
          <span className="textspan">
            Entenda como encontrar seu animalzinho
          </span>
        ) : (
          <span className="textspan">
            Entenda como encontrar um adotante pro seu animalzinho
          </span>
        )}

        <div className="btns">
          <button type="button" className="btnslogin">
            Adotante
          </button>
          <button type="button" className="btnslogin">
            ONG
          </button>
        </div>

        <DivInstructionImg>
           {instruction.map((item)=>  <img src={item.img} className="instructionimg" alt={item.text} />)}

        </DivInstructionImg>

        <button type="button" className="btnslogin">Voltar</button>

      </DivLeft>
    </DivsContainer>
  );
}

export default Login;
