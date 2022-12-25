
import "./intro.css"
import  Me from "../../img/me.jpg"
const Intro =() => {
    return(
        <div className ="i">
    <div className="i-left">
        <div className="i-left-wrapper">
            <h2 classname="i-intro">hello my name is </h2>
            <h1 className="i-name">Aron Hunde</h1>
       <div className="i-title">
           <div className="i-title-wrapper">
               <div className="i-title-item">web developer</div>
               <div className="i-title-item">ui/ux designer</div>
               <div className="i-title-item">server vm creator</div>
               <div className="i-title-item">networking</div>
               <div className="i-title-item">web app</div>
               
           </div>
       </div>
       <div className="i-desc">
           i design and develop services for customers of all sizes,specializing
           in creating stylish, modern websites, web services and
            online stores. with latest website development tools like
            react, express,node js, mongo db,  wordpress and so on.

       </div>
        </div>
        </div>
    <div className="i-right">
        <img src={Me} alt="" className="i-img" />
    </div>
        
    </div>
    )
}
export default Intro