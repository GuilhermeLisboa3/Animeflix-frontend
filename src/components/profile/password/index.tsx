import { FormEvent, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";
import profileService from "../../../services/profileService";
import { ToastComponet } from "../../common/toast";

export const PasswordForm = () => {
  const [color, setColor] = useState("");
  const [toasIsOpen, setToasIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    profileService.fetchCurrent().then((password) => {
      setCurrentPassword(password.currentPassword);
      setNewPassword(password.newPassword);
    });
  }, []);

  const handlePasswordUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newPassword != confirmNewPassword) {
      setToasIsOpen(true);
      setErrorMessage("Senha e confimação de senha diferentes!");
      setColor("bg-danger");
      setTimeout(() => {
        setToasIsOpen(false);
      }, 1000 * 3);

      return 
    }

    if(currentPassword === newPassword){
      setToasIsOpen(true);
      setErrorMessage("Não coloque a nova senha igual a senha antiga!");
      setColor("bg-danger");
      setTimeout(() => {
        setToasIsOpen(false);
      }, 1000 * 3);
      
      return 
    }

    const res = await profileService.passwordUpdate({
      currentPassword,
      newPassword
    })

    if(res === 204){
      setToasIsOpen(true);
      setErrorMessage("Senha alterada com sucesso");
      setColor("bg-success");
      setTimeout(() => {
        setToasIsOpen(false);
      }, 1000 * 3);
      
      setCurrentPassword("")
      setNewPassword("")
      setConfirmNewPassword("")
    }

    if(res === 400){
      setToasIsOpen(true);
      setErrorMessage("Senha atual incorreta");
      setColor("bg-danger");
      setTimeout(() => {
        setToasIsOpen(false);
      }, 1000 * 3);
    }
  };

  return (
    <>
      <Form className={styles.form} onSubmit={handlePasswordUpdate}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for="currentPassword" className={styles.label}>
              SENHA ATUAL
            </Label>
            <Input
              name="currentPassword"
              type="password"
              id="currentPassword"
              placeholder="******"
              required
              minLength={6}
              maxLength={12}
              className={styles.input}
              onChange={(event) => {
                setCurrentPassword(event.currentTarget.value);
              }}
              value={currentPassword}
            />
          </FormGroup>
        </div>
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="newPassword">
              NOVA SENHA
            </Label>
            <Input
              name="newPassword"
              type="password"
              id="newPassword"
              placeholder="******"
              required
              minLength={6}
              maxLength={12}
              value={newPassword}
              onChange={(event) => {
                setNewPassword(event.currentTarget.value);
              }}
              className={styles.inputFlex}
            />
          </FormGroup>

          <FormGroup>
            <Label className={styles.label} for="confirmNewPassword">
              NOVA SENHA
            </Label>
            <Input
              name="confirmNewPassword"
              type="password"
              id="confirmNewPassword"
              placeholder="******"
              required
              minLength={6}
              maxLength={12}
              value={confirmNewPassword}
              onChange={(event) => {
                setConfirmNewPassword(event.currentTarget.value);
              }}
              className={styles.inputFlex}
            />
          </FormGroup>
        </div>
        <Button outline className={styles.formBtn} type="submit">
          SALVAR
        </Button>
      </Form>
      <ToastComponet color={color} isOpen={toasIsOpen} message={errorMessage} />
    </>
  );
};
