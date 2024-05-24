import "./Footer.css"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <>
        <footer className="footerContainer">
        <ul className=' footerMenu d-flex   '>

        <li> <Link className="link m-3 " to="/article">أسئلة شائعة </Link></li>
        <li> <Link className="link m-3" to="/help">تحتاج إلى مساعدة </Link></li>
        <li><Link className="link m-3 " to="/about">تعرف علينا </Link></li>
</ul>
<p>جميع الحقوق محفوظة 2023-2024</p>

        </footer>
        </>
    )
}