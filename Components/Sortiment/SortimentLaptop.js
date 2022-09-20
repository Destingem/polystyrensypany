import SortimentMobile from "./SortimentMobile"
export default function SortimentLaptop(props){
    return(
        <SortimentMobile device="laptop" sortiment={props.sortiment} />
    )
}