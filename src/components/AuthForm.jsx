import { Button, Form } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";
import { useState } from "react";

function AuthForm() {

    const [inputName, setInputName] = useState('')
    const [inputSurname, setInputSurname] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${inputName}`)
        console.log(`The name you entered was: ${inputSurname}`)
        console.log(`The name you entered was: ${emailInput}`)
        console.log(`The name you entered was: ${newPassword}`)
        console.log(`The name you entered was: ${repeatPassword}`)
  }
    return (
        <div>
            <p style={{
                    backgroundColor: 'lightslategrey',
                    }}>
                Введите ваши учетные данные
            </p>
            
            <Form onSubmit={handleSubmit}>
                <MyInput
                    type="text" 
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder='Веедите свое имя' /><br />
                
                <MyInput
                    type="text" 
                    value={inputSurname}
                    onChange={(e) => setInputSurname(e.target.value)}
                    placeholder='Веедите свою фамилию' /><br />
                    
                <MyInput
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    type='email'
                    placeholder='Веедите свой email' /><br />
                    
                <MyInput
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type='password'
                    placeholder='Веедите пароль' /><br />
                    
                <MyInput
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    type='password'
                    placeholder='Веедите повторно пароль' /><br />
                <Button
                    type='submit'>
                    Создать учетную запись
                </Button>
            </Form>
            
    </div> 
    );
}

export default AuthForm;