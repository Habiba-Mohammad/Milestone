import "./Help.css"
import doctor from "../../images/doctor-write (1).gif"
const Help = () => {
  return (
    <>
    <div className=" help-cont">
    <h1 className="help-title"> هل واجهت مشكلة اثناء الإطمئنان على طفلك ؟</h1>
   <div>
    <p > برجاء التواصل معنا عبر الإيميل :<span> mychild2023@gmail.com</span></p>
   <p> التواصل عبر linkedin: <span><a href="https://www.linkedin.com/in/habiba-mohammad-a98703223/" > حبيبة محمد مصطفى </a></span> </p>
   <p> التواصل عبر الهاتف : </p>
   </div>
   </div>
   <img className='doctor' src={doctor} alt="doctor"/>

    </>  )
}

export default Help