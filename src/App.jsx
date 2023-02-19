import { Router } from "./router/Router";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  name: "たくや",
  email: "t-akama@builcop.biz",
  tel: "090-1111-4443",
  company: {
    name: "株式会社ビルコップ"
  },
  website: "https://builcop.biz"
};

export default function App() {
  return <Router />;
}
