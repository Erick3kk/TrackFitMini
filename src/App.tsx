import { Welcome } from "./components/Welcome"

import { ExerciseList } from "./components/ExerciseList"

import { Motivacional } from "./components/motivacionalMSG"

function App() {


  return (
    <>
      <Welcome />
      <ExerciseList />
      <div style={{ border:'4px solid black',
            textAlign: 'center',
            backgroundColor: 'gray',
            padding: '20px',
            margin: '20px',
            textShadow: '1px 1px 0 black',
            fontFamily:'cursive',
            fontSize: '20px',
            display: "grid",
            columnGap: "30px",
            boxShadow: '5px 5px 10px 0px rgba(0, 0, 0, 0.5)',
            gap: '10px' }}>
        <h1>TrackFit</h1>
        <Motivacional
          titulo="Trackfit MINI motivation"
          mensagem ="Não deixe que a preguiça seja maior que a vontade de vencer!!"
          altor ="Matheus"
        />
    </div>
   </> 
  )
}

export default App;
