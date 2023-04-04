import { Text } from "@mantine/core";

export default function HeadingWithIcon(props) {
    let {icon, heading} = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "1em",
        alignItems: "center",
        gap: "1vw",
      }}
    >
      <div
        style={{
          backgroundColor: "#216a55",
          borderRadius: "",
          aspectRatio: 1,
          width: "3vw",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
      {icon}
       
      </div>
      <Text
        component="h3"
        size="xl"
        sx={{
          fontWeight: 600,
          color: "#487b63",
          fontSize: "2em",
        }}
      >
        {props.children}
      </Text>
    </div>
  );
}
