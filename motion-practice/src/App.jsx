import BasicsOfMotion from "./components/BasicsOfMotion"
import './App.css'
import UseInView from "./components/UseInView"
import UseScrollBasic from "./components/UseScrollBasic"
import TextFade from "./components/TextFade"

function App() {
  

  return (
    <>
    <TextFade />
    <UseScrollBasic />
      <BasicsOfMotion />
      <UseInView />
      
      <div
        style={{
          height: "10em"
        }}
      >

      </div>
    </>
  )
}

export default App
