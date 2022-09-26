import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";
import { BsPersonFill } from "react-icons/bs";

export const UserForm = () => {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>NT</p>
          <p className={styles.userName}>Guilherme Gonçalves</p>
        </div>
        <div className={styles.memberTime}>
          <BsPersonFill className={styles.icon} />
          <p className={styles.memberText}>
            Membro desde <br /> 20 de abril de 2020
          </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label for={"firstName"} className={styles.label}>
              NOME
            </Label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
              placeholder="Qual o seu primeiro nome?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={"Guilherme"}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"lastName"} className={styles.label}>
              SOBRENOME
            </Label>
            <Input
              name="lastName"
              type="text"
              id="lastName"
              placeholder="Qual o seu último nome?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={"Gonçalves"}
            />
          </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for={"phone"} className={styles.label}>
              WHATSAPP / TELEGRAM
            </Label>
            <Input
              name="phone"
              type="tel"
              id="phone"
              placeholder="(xx) 9xxxx-xxxx"
              required
              className={styles.input}
              value={"+55 (21) 99999-9999"}
            />
          </FormGroup>

          <FormGroup>
            <Label for={"email"} className={styles.label}>
              E-MAIL
            </Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Coloque seu email"
              required
              className={styles.input}
              value={"teste@gmail.com"}
            />
          </FormGroup>

          <Button className={styles.formBtn} outline type="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </>
  );
};
