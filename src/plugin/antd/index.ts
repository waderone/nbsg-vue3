/**
 * @author  sparkHou
 * @date 2021-04-16 16:09
 * @Description:
 */
import {Button, Switch, Badge,Select,Progress,Tooltip} from 'ant-design-vue/es';

export default function (app: any) {
  app.use(Button)
  app.use(Switch)
  app.use(Badge)
  app.use(Select)
  app.use(Progress)
  app.use(Tooltip)
}
