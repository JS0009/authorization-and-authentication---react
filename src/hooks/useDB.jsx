export const useDB = (
    inputName,
    inputSurname,
    emailInput,
    newPassword,
    repeatPassword,
    setRepeatPassword
) => {

    function useDataBase() {
        if (newPassword !== repeatPassword) {
            setRepeatPassword('')
            alert('Пароли не совпадают')
        }else if (inputName && inputSurname && emailInput && newPassword && repeatPassword !== ''){
            alert('поля заполнены правильно')
            localStorage.setItem('name', `${inputName}`)
            localStorage.setItem('surname', `${inputSurname}`)
            localStorage.setItem('email', `${emailInput}`)
            localStorage.setItem('pass', `${newPassword}`)
            localStorage.setItem('repitPass', `${repeatPassword}`)
        } else {
            alert('поля не заполнены')
        }
        }
    
    return [useDataBase]
}