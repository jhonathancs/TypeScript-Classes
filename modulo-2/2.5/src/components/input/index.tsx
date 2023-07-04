import './input.css'
function Input() {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        alert(event.target.value);
      }
    return (
        <>
        <h1>Digite seu primeiro nome</h1>
        <input type="text" name='FirstName' onChange={(event) => handleChange(event)} />
        </>
    )
}

export default Input;