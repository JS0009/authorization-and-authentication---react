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
        }
        
        }
    
    return [useDataBase]
}