import "dayjs/locale/cs";
import MainScreen from "../UI/MainScreen";
import { useForm } from "@mantine/form";
import SubheaderText from "../UI/SubheaderText";
import {
  Input,
  InputWrapper,
  Button,
  NumberInput,
  Select,
  Textarea,
  MultiSelect,
  Switch,
  Space,
  Progress,
  Alert,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import Footer from "../UI/Footer";
import { DatePicker } from "@mantine/dates";
import { FiAlertTriangle } from "react-icons/fi";
import { useReducedMotion, useWindowScroll } from "@mantine/hooks";
import DefaultScreen from "../UI/DefaultScreen";
export default function PoptavkaMobile(props) {
    (
        (function (d, s, id) {
          var js;
          if (d.getElementById(id)) {
            return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = "https://embedsocial.com/cdn/ef.js";
          d.getElementsByTagName("head")[0].appendChild(js);
        })(document, "script", "EmbedSocialFormsScript")
      );
  const dumbBtn = useRef();
  let { device } = props;
  const numberRef = useRef(null);
  const [scroll, setScroll] = useWindowScroll();
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [produkty, setProdukty] = useState([
    "zásyp do podlah",
    "zásyp do stropů",
    "zásyp do krovů a střech",
    "zásyp do vnitřních příček domu",
    "zásyp dilatační spáry",
    "zásyp do dutých cihel",
    "zateplení šachty vzduchotechniky",
    "zateplení akumulační nádrže",
    "do betonu",
    "náplň do sedacích vaků",
    "sněžení",
    "ostatní",
  ]);
  const form = useForm({
    initialValues: {
      ucel: [],
      mnozstvi: null,
      jednotka: "ks",
      termin: null,
      doprava: false,
      specifikace: "",
      jmeno: "",
      prijmeni: "",
      funkce: "",
      spolecnost: "",
      adresa: "",
      telefon: "",
      email: "",
    },
  });
  
  function submitHandler(values) {
    props.handleSubmit(values);
    form.setFieldValue("mnozstvi", 0);
    form.reset();
    numberRef.current.value = null;
  }
  useEffect(() => {
    setFeedback(props.feedback);
  }, [props.feedback]);
  useEffect(() => {
    if (feedback.type === "success") {
      form.reset();
      setScroll({ x: 0, y: 0 });
      setTimeout(() => {
        setFeedback({ type: "", message: "" });
      }, [5000]);
    } else if (feedback.type === "error") {
      setScroll({ x: 0, y: 0 });
    }
  }, [feedback])
  return (
    <div>
      <DefaultScreen
        label="Poptávka"
        image="/images/polystyren_jemny_detail2.png"
        device={device}
      />

      <div
        class="embedsocial-forms-iframe"
        data-ref="5342dff0597edb616758beb99b532a6911e84ee6"
        data-widget="true"
        data-height="auto"
      ></div>
      <Footer />
    </div>
  );
}
