/* eslint-disable jsx-a11y/alt-text */
import { FaUserAlt , FaUnlockAlt } from "react-icons/fa";
import './login.css';

function Applogin(){
    return(
       
      <div className="form-login">

       <div className="img-login">
                <img src="https://sites.google.com/site/suratad022544/_/rsrc/1544886981020/phaph-brryakas-ni-sthaban-thekhnoloyi-phracxmkela-cea-khun-thhar-ladkrabang/121700702.jpg?height=213&width=320"/>
       </div>
		<div className= "login">
            <h2>Login</h2>
            
            <div className="text-login">
                <FaUserAlt className="icon-user" />
                <input type="text"  name="username" id="username" placeholder="Username"/>
            </div>
            <div className="text-login">
                <FaUnlockAlt className="icon-lock" />
                <input type="password" name="password" id="password" placeholder="Password"/>
            </div>

           <div className="btn-login">
                <input type="submit" value="Login"/>
           </div>

        </div>
	</div>

    );
}
export default Applogin;
