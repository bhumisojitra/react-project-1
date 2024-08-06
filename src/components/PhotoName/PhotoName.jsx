import img from "../../assets/bhumi.jpg"
import "./PhotoName.css"

const PhotoName = (props) => {

    return(
        <div className="in">
            <img src={img} />
            <h2>Name : {props.name}</h2>
        </div>
    )
}

export default PhotoName;