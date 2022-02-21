import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/field-label/sp-field-label.js';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/theme/sp-theme.js';
import { Toast } from '@spectrum-web-components/toast';
import '@spectrum-web-components/toast/sp-toast.js';
import { HelloEndpoint } from "Frontend/generated/endpoints";
import { html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { View } from '../view';


@customElement('hello-spectrum')
export class HelloWorldView extends View {
  @state()
  name = '';
  @state()
  response: string = '';

  @query("#toast")
  private toast!: Toast;

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'p-m', 'gap-m', 'items-end');
  }

  render() {
    return html`
    <sp-theme color="lightest">
      <sp-field-label for="name">Your name</sp-field-label>
      <sp-textfield id="name" placeholder="Enter your name" @change=${this.nameChanged}></sp-textfield>
      <sp-button @click=${this.sayHello}>Say hello</sp-button>
      <sp-toast id="toast" variant="info">${this.response}</sp-toast>
    </sp-theme>
    `;
  }

  nameChanged(e: CustomEvent) {
    this.name = (e.target! as any).value;
  }

  async sayHello() {
    this.response = await HelloEndpoint.sayHello(this.name);
    this.toast.open = true;
  }
}
