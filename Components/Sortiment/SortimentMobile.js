import Footer from "../UI/Footer"
import MainScreen from "../UI/MainScreen"
import {List, ListItem, Text, Grid, Paper, Space, Box} from "@mantine/core"
import {BsCircle } from "react-icons/bs"
import IndexDivider from "../UI/IndexDivider"
import Link from "next/link"
import SortimentVyuziti from "./SortimentVyuziti"
import SortimentSortiment from "./SortimentSortiment"
import Image from "next/image"
import DefaultScreen from "../UI/DefaultScreen"
export default function SortimentMobile(props){
  let {device} = props
  let headingSx =  device !== "laptop" ? { color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" } : { color: "#545454", fontSize: "3rem", textAlign: "left", marginRight:"auto" }
  let labelSx = device !== "laptop" ? {
    color: "#fff",
    fontSize: "10vw",
    marginTop: "0vh",
    padding: "",
  }: {
    color: "#fff",
    fontSize: "3rem",
    marginTop: "0vh",
    padding: "",
   
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
  }
  
    return(
        <div>
            <DefaultScreen label="Sortiment" image="/images/bily_c.png" device={device} />
            <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", height: "fitContent", width: "100%", textAlign: "center" }}>
               
                {device === "laptop" && <Space h="xl" />}
             
     <SortimentSortiment device={device} headingSx={headingSx} labelSx={labelSx}/>
                </div>
            <Footer />
        </div>
    )
}