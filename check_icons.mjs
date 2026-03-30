import * as si from "react-icons/si";
import * as tb from "react-icons/tb";

const toCheck = ["SiShadcnui", "SiGooglemaps", "SiQuasar", "SiCplusplus", "SiExpress", "SiRabbitmq", "SiSocketdotio", "SiFlutter", "SiMongodb", "SiTailwindcss", "SiFirebase", "SiNextdotjs", "SiTypescript", "SiJavascript"];
toCheck.forEach(n => console.log(n, !!si[n]));
console.log("TbApi", !!tb.TbApi);
