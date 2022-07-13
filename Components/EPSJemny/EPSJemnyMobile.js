import MainScreen from "../UI/MainScreen";
export default function EPSJemnyMobile(props){
    let device = props.device;
    return(
       <div>
        <MainScreen device={device} polysyp={true} label={"EPS jemný"} />
       </div>
    )
}