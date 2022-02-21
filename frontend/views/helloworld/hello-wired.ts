import { HelloEndpoint } from "Frontend/generated/endpoints";
import { html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import 'wired-elements/lib/wired-button';
import 'wired-elements/lib/wired-dialog';
import 'wired-elements/lib/wired-input';
import { View } from '../view';



@customElement('hello-wired')
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
      Your name
      <wired-input id="name" placeholder="Enter your name" @change=${this.nameChanged}></wired-input>
      <wired-button @click=${this.sayHello}>Say hello</wired-button>
      <wired-dialog @click=${(e:Event) => (e.target! as any).open=false} id="toast" variant="info">${this.response}</wired-dialog>
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
