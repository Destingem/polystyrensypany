import SortimentMobile from "./SortimentMobile"
export default function SortimentTablet(props){
    return(
        <>
            <SortimentMobile device="tablet" sortiment={props.sortiment}/>
        </>
    )
}