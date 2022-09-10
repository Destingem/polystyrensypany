import styles from "./IndexMobile.module.css";
import {Text, List, ListItem, ThemeIcon} from '@mantine/core';
import { TbNumber1, TbNumber2, TbNumber3, TbNumber4, TbNumber5, TbNumber6, TbNumber7 } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

export default function DuvodyMobile(){
    return(
        <div className={styles.fourthSection}>
        <Text size="xl" weight={600} sx={{ color: "black", fontSize: "8vw", color: "#545454" }}>
          Máme 7 dobrých důvodů proč děláme sypaný polystyren
        </Text>
        <div
          size="sm"
          sx={{
            color: "black",
            fontSize: "6vw",
            marginTop: "0vh",
            overflow: "hidden",
            
          }}
        >
        




          <List
            spacing={8}
            icon={<ThemeIcon color="teal" size={36} radius="xl"></ThemeIcon>}
            className={styles.list}
          >
            <ListItem
              className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber1 />
                </ThemeIcon>
              }
            >
           
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>lepší tepelné vlastnosti než v pevné podobě</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber2 />{" "}
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>téměř žádná nasákavost</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber3 />
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>100% vyplní prostor k zateplení</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber4 />
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>žádné složité vyměřování prostor k zateplení</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber5 />
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>izolace je lehká nezatěžuje konstrukce domu</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber6 />
                </ThemeIcon>
              }
            >
             <Text component="p" size="xl" sx={{fontSize: "1rem"}}> nevytváří se plísně, díky vzduchu mezi kuličkami stavba tzv. dýchá</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber7 />
                </ThemeIcon>
              }
            >
             <Text component="p" size="xl" sx={{fontSize: "1rem"}}>  nepodporuje hoření</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <AiOutlinePlus />
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>recyklací polystyrenu přispíváme ke zlepšení životního prostředí</Text>
            </ListItem>
          </List>
        </div>
      </div>
    )
}