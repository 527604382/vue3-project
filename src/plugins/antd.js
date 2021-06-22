import {
  Form,
  Input,
  Button,
  Layout,
  Menu,
  Pagination,
  ConfigProvider,
  Table,
  Tag,
  Divider,
  Modal,
  Transfer,
  Cascader,
  List,
  Select,
  Space,
  Spin,
  DatePicker,
  Row,
  Col,
  notification,
  message,
  Tooltip,
  Statistic,
  Switch,
  Card,
  Empty,
  InputNumber,
  BackTop,
  Result,
  Radio,
  Slider
} from "ant-design-vue";
// import {AButton} from '@/components/button/'
import "ant-design-vue/dist/antd.css";

// import { Button } from "ant-design-vue/lib/radio";

export function setupAntd(app) {
  // app.component('a-button', AButton)  自定义

  app
    .use(Form)
    .use(Input)
    .use(Button)
    .use(Layout)
    .use(Menu)
    .use(Pagination)
    .use(ConfigProvider)
    .use(Table)
    .use(Tag)
    .use(Divider)
    .use(Modal)
    .use(Transfer)
    .use(Cascader)
    .use(List)
    .use(Select)
    .use(Space)
    .use(Spin)
    .use(DatePicker)
    .use(Row)
    .use(Col)
    .use(notification)
    .use(message)
    .use(Tooltip)
    .use(Statistic)
    .use(Switch)
    .use(Card)
    .use(Empty)
    .use(InputNumber)
    .use(BackTop)
    .use(Result)
    .use(Radio)
    .use(Slider);
}
