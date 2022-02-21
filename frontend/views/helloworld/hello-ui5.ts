import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/MultiInput.js";
import "@ui5/webcomponents/dist/Toast.js";
import { HelloEndpoint } from "Frontend/generated/endpoints";
import { html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { View } from '../view';

@customElement('hello-ui5')
export class HelloWorldView extends View {
  @state()
  name = '';
  @state()
  response: string = '';

  @query("#toast")
  private toast!: any;

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'p-m', 'gap-m', 'items-end');
  }

  render() {
    return html`
    <ui5-label>Your name</ui5-label>
      <ui5-multi-input @value-changed=${this.nameChanged}></ui5-multi-input>
      <ui5-button @click=${this.sayHello}>Say hello</ui5-button>
      <ui5-toast id="toast" placement="BottomStart">${this.response}</ui5-toast>
    `;
  }

  nameChanged(e: CustomEvent) {
    this.name = (e.target! as any).value;
  }

  async sayHello() {
    this.response = await HelloEndpoint.sayHello(this.name);
    this.toast.show();
  }
}
