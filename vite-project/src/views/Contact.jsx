import { Link } from "react-router-dom"


function Contact() {

  return (
    <>
    <h1> Cuentaanos En que podemos Ayudarte?</h1>
      <form action="">
      <div>
        <label for="username">Nombre:</label>
        <input type="text" name="username" />
        <label for="username"
          ><abbr title="required" aria-label="required">*</abbr></label>
      </div>

      <div>
        <label for="description">Descripción:</label>
        <input type="text" name="description"  />
        <label for="description"
          ><abbr title="required" aria-label="required">*</abbr></label>
      </div>
      <button>Enviar</button>
      </form>
      
    </>
  )
}

export default Contact