import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";
import { BsPersonFill } from "react-icons/bs";
import { FormEvent, useEffect, useState } from "react";
import profileService from "../../../services/profileService";
import { ToastComponet } from "../../common/toast";
import { useRouter } from "next/router";

export const UserForm = () => {
  const router = useRouter()

  const [color, setColor] = useState("");
  const [toasIsOpen, setToasIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [initialEmail, setInitialEmail] = useState(email)
  const [created_at, setCreatedAt] = useState("");

  const date = new Date(created_at);
  const month = date.toLocaleDateString("default", { month: "long" });
  console.log(initialEmail)

  useEffect(() => {
    profileService.fetchCurrent().then((user) => {
      setFirstName(user.firstName);
      setlastName(user.lastName);
      setPhone(user.phone);
      setEmail(user.email);
      setInitialEmail(user.email)
      setCreatedAt(user.createdAt);
    });
  }, []);

  const handleUserUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await profileService.userUpdate({
      firstName,
      lastName,
      phone,
      email,
      created_at,
    });

    if (res === 204) {
      setToasIsOpen(true);
      setErrorMessage("Informações alteradas com sucesso!");
      setColor("bg-success");
      setTimeout(() => setToasIsOpen(false), 1000 * 3);
      if(email != initialEmail){
        sessionStorage.clear()
        router.push('/')
      }
    } else {
      setToasIsOpen(true);
      setErrorMessage("Você não pode mudar para esse email!");
      setColor("bg-danger");
      setTimeout(() => setToasIsOpen(false), 1000 * 3);
    }
  };

  return (
    <>
      <Form className={styles.form} onSubmit={handleUserUpdate}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>
            {firstName.slice(0, 1)}
            {lastName.slice(0, 1)}
          </p>
          <p className={styles.userName}>{`${firstName} ${lastName}`}</p>
        </div>
        <div className={styles.memberTime}>
          <BsPersonFill className={styles.icon} />
          <p className={styles.memberText}>
            Membro desde <br />
            {`${date.getDate()} de ${month} de ${date.getFullYear()}`}
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
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
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
              value={lastName}
              onChange={(event) => {
                setlastName(event.target.value);
              }}
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
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
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
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </FormGroup>

          <Button className={styles.formBtn} outline type="submit">
            Salvar
          </Button>
        </div>
      </Form>
      <ToastComponet color={color} isOpen={toasIsOpen} message={errorMessage} />
    </>
  );
};
