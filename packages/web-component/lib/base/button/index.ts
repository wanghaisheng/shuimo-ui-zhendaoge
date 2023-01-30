/**
 * @description button component
 * @author 阿怪
 * @date 2022/12/10 14:01
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { type ButtonProps, useButton } from '@shuimo-design/core';
import { createMElement, MElement } from 'moelement';
import { MInitProps } from 'moelement/types/template';

@createMElement({
  name: 'm-button',
  hookFunc: useButton
})
export default class MButton extends MElement implements ButtonProps {

  public disabled: boolean = false;
  public link: boolean = false;
  public text: string | undefined;
  public type: string = 'default';


  constructor() {super();}

  initTemplate(props: MButton, initProps: MInitProps<MButton>) {
    super.initTemplate(props);
    initProps(props);
  }
}
