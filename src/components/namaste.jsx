import "./namaste.css";

const Namaste = () => {

    setTimeout(function(){
        document.getElementById("myDiv").style.display="none";
     }, 1000); 

    return (
        <div id = "myDiv"><img id = "myImage" src="img/namaste.jpg"/> </div>
    )
}

export default Namaste
