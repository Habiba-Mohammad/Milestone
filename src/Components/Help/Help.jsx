import "./Help.css"
import doctor from "../../images/doctor-write (1).gif"
const Help = () => {
  return (
    <>
    <div className=" help-cont">
    <h1 className="help-title"> هل واجهت مشكلة اثناء تقييم طفلك ؟</h1>
    <p>يمكنك التوجه إلى أخصائي نطق ولغة للاطمئنان على طفلك  </p>
   <div>
    <p > يمكنك التواصل معنا عبر الإيميل :<span> mychildapp2023@gmail.com</span> </p>
   {/* <p> التواصل عبر الهاتف : </p> */}
   </div>
   </div>
   <img className='doctor' src={doctor} alt="doctor"/>

    </>  )
}

export default Help