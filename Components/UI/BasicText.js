
import {Text} from "@mantine/core";
export default function BasicText(props) {
    return(
        <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>{props.children}</Text>
    )
}