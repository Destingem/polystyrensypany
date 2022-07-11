import { Text } from "@mantine/core";
export default function BasicText(props) {
  let { device } = props;
  return (
    <>
      {" "}
      {device !== "laptop" ? (
        <Text
          weight={400}
          sx={{
            color: "#545454",
            fontSize: "1rem",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "left",
          }}
        >
          {props.children}
        </Text>
      ) : (
        <Text
          weight={400}
          sx={{
            color: "#545454",
            fontSize: "1rem",
            marginRight: "auto",
        
            textAlign: "left",
          }}
        >
          {props.children}
        </Text>
      )}
    </>
  );
}
