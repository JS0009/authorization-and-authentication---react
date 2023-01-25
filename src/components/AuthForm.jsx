import { Button, Form } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";
import { useState } from "react";

function AuthForm() {

    const [name, setName] = useState({
        inputName: '',
        inputSurname: '',
        emailInput: '',
        newPassword: '',
        repeatPassword: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
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
                    value={name.inputName}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Веедите свое имя' /><br />
                
                <MyInput
                    type="text" 
                    value={name.inputSurname}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Веедите свою фамилию' /><br />
                    
                <MyInput
                    value={name.emailInput}
                    onChange={(e) => setName(e.target.value)}
                    type='email'
                    placeholder='Веедите свой email' /><br />
                    
                <MyInput
                    value={name.newPassword}
                    onChange={(e) => setName(e.target.value)}
                    type='password'
                    placeholder='Веедите пароль' /><br />
                    
                <MyInput
                    value={name.repeatPassword}
                    onChange={(e) => setName(e.target.value)}
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