import emailjs from 'emailjs-com'
import {useRef} from 'react'
//npm i emailjs-com --save
function App() {
  const form = useRef();
  function contactus(e){
    e.preventDefault()
    //main thing to send emails
    emailjs.sendForm('gmail',"contact_us",e.target,"L1MNFGAXJfE5ji-zB")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }
  return (
    <div className="container">
      <center className="mt-5">
      <form ref={form} onSubmit={contactus}>
        <div className="col-8 mx-auto mb-3">
          <input type="text" name="name" placeholder="name" className="form-control"/>
        </div>
        <div className="col-8 mx-auto mb-3">
          <input type="email" name="email" placeholder="Gmail Address" className="form-control"/>
        </div>
        <div className="col-8 mx-auto mb-3">
          <input type="text" name="subject" placeholder="subject" className="form-control"/>
        </div>
        <div className="col-8 mx-auto mb-3">
          <textarea  name="message" placeholder="Your message" rows="5" cols="10" className="form-control"/>
        </div>
        <div className="col-8 mx-auto mb-3">
          <input type="submit"  className="btn btn-warning" value="Contact us"></input>
        </div>
      </form>
      </center>
    </div>
  );
}

export default App;
