import { Button, Form } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";
import { useState } from "react";

function AuthForm() {

    const [autho, setAutho] = useState({
        inputName: '',
        inputSurname: '',
        emailInput: '',
        newPassword: '',
        repeatPassword: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${autho}`)
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
                    value={autho.inputName}
                    onChange={(e) => setAutho(e.target.value)}
                    placeholder='Веедите свое имя' /><br />
                
                <MyInput
                    type="text" 
                    value={autho.inputSurname}
                    onChange={(e) => setAutho(e.target.value)}
                    placeholder='Веедите свою фамилию' /><br />
                    
                <MyInput
                    value={autho.emailInput}
                    onChange={(e) => setAutho(e.target.value)}
                    type='email'
                    placeholder='Веедите свой email' /><br />
                    
                <MyInput
                    value={autho.newPassword}
                    onChange={(e) => setAutho(e.target.value)}
                    type='password'
                    placeholder='Веедите пароль' /><br />
                    
                <MyInput
                    value={autho.repeatPassword}
                    onChange={(e) => setAutho(e.target.value)}
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