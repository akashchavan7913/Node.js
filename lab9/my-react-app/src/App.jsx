
import Paragraph from './components/Paragraph.jsx'
import InputComponent from './components/inputComponent.jsx'
import ButtonComponent from './components/buttonComponent.jsx'

function App() {
  return (
    <div style={{
      margin: '150px',
      padding: '40px',
      border: '2px solid #ccc',
      width: '400px',
      backgroundColor: '#92cfee'
    }}>

      <Paragraph
        style={{
          color: 'blue',
          fontSize: '28px',
          margin: '0 0 25px 90px',
          fontWeight: 'bold'
        }}
        data="Exp 9 : Sarthak">
      </Paragraph>

      <InputComponent
        inputType="text"
        placeholder="Enter your username"
        style={{
          color: 'black',
          border: '2px solid #bf1010',
          marginTop: '10px',
          width: '95%',
          height: '40px',
          fontSize: '18px',
          padding: '5px'
        }}>
      </InputComponent>

      <br />

      <InputComponent
        inputType="password"
        placeholder="Enter your password"
        style={{
          color: 'black',
          border: '2px solid #1ac038',
          marginTop: '10px',
          width: '95%',
          height: '40px',
          fontSize: '18px',
          padding: '5px'
        }}>
      </InputComponent>

      <br />

      <ButtonComponent
        buttonText="Login"
        onClick={() => {
          alert('Login button clicked!');
        }}
        style={{
          color: 'white',
          backgroundColor: 'blue',
          border: 'none',
          padding: '12px 30px',
          fontSize: '18px',
          cursor: 'pointer',
          marginTop: '15px',
          marginLeft: '145px'
        }}>
      </ButtonComponent>

      <Paragraph
        style={{
          color: 'black',
          fontSize: '13px',
          margin: '20px 0 0 120px'
        }}
        data="">
      </Paragraph>

    </div>
  )
}

export default App