
import {Text} from "@mantine/core";
export default function BasicText(props) {
    return(
        <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.25rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>{props.children}</Text>
    )
}