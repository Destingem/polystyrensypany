
import PoptavkaMobile from "./PoptavkaMobile";


export default function PoptavkaTablet(props) {
    return (
        <PoptavkaMobile device="tablet" handleSubmit={props.handleSubmit} feedback={props.feedback}/>
    );
}