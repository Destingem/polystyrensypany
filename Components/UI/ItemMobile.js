import Link from "next/link"
import { Paper, Text } from "@mantine/core"
export default function ItemMobile(props) {
    return(
        <Paper>
              <Link href={props.href}>
                <Text size="xl" sx={{ fontWeight: 500, color: "#545454" }}>
                  {props.label}
                </Text>
              </Link>
            </Paper>
    )
}