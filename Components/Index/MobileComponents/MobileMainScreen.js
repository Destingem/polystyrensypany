
import styles from "./IndexMobile.module.css";
import Link from "next/link";
import { Button, Text } from "@mantine/core";
import { MdArrowForwardIos } from "react-icons/md";
import NavBar from "../../UI/Navbar";
export default function MobileMainScreen(props){
    return(
      <div style={{backgroundImage: 'url("/images/backgroundBall1.png")'}}>
      <nav>
      <NavBar />
    </nav>
        <div className={styles.firstSection}>
       
        <div style={{alignItems: "flex-end", display: "flex", flexDirection: "column", width: "fit-content"}}>
        <Text
          size="xl"
          sx={{ color: "#545454", fontSize: "15vw", margin: "5vh", marginRight: "10vw", marginBottom: 0 }}
          component="h1"
        >
          Polystyren
        </Text>
        <Text
          size="xl"
          sx={{ color: "#195f00", fontSize: "12vw", marginTop: "0vh", marginRight: "10vw", marginBottom: 0 }}
          component="h1"
        >
          Sypaný
        </Text>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10%",
            justifyContent: "center",
            marginTop: "auto",
            
          }}
        >
          <Link href="/sortiment">
            <Button
              variant="filled"
              size="xl"
              radius="sm"
              color="teal"
              sx={{
                color: "white",
                border: "none",
                backgroundColor: "#487b63",
                width: "60vw",
                minWidth: "min-content",
              }}
              rightIcon={<MdArrowForwardIos />}
            >
              <Text sx={{ fontsize: "10vw" }}>Sortiment</Text>
            </Button>
          </Link>
          <Link href="/o_nas">
            <Button
              variant="outline"
              size="xl"
              radius="sm"
              sx={{
                color: "#195f00",
                borderColor: "#195f00",

                width: "12vw",
                minWidth: "min-content",
                padding: "fit-content",
              }}
            >
              <Text sx={{ fontsize: "10vw" }}>O nás</Text>
            </Button>
          </Link>
        </div>
      </div>
      </div>
    )
}