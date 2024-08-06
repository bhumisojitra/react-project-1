import PhotoName from "../components/PhotoName/PhotoName";
import './ProfileCard.css';
import EmailAge from "../components/EmailAge/EmailAge";
import DatePhone from "../components/DatePhone/DatePhone";

const ProfileCard = () => {
    return(
        <div className="card">
            <PhotoName name={"Bhumi"}/>
            <EmailAge Email={"bhumisojitra123@gmail.com"} Age={"19"}/>
            <DatePhone Date={"12/09/2005"} Phone={"+91 8238870530"} course={"Master in Frontend Dev."}/>
        </div>
    )
}

export default ProfileCard;