class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <footer class="gap-top bounceInUp animated container">
            <div class="box square charcoal" style="background-color: black;">
                <div class="container padded">
                <div class="row">
                    <div class="one small-tablet fourth padded">
                    <h5 class="green">About NetR</h5>
                    <ul class="unstyled">
                        <li><a href="vision.html">Corporate Vision</a></li>
                        <li><a href="arch.html">Products and Solutions</a></li>
                        <li><a href="arch.html">Case Studies</a></li>
                    </ul>
                    </div>
                    <div class="three small-tablet fourths padded">
                    <h5 class="blue">Discover</h5>
                    <ul class="unstyled three-column two-column-mobile">
                        <li><a href="arch.html" title="Responsive grid system, grid adapters and helpers">Projects</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div class="box square" style="background-color: black;border-width: 0px">
                <div class="container padded">
                <div class="row">
                    <div align="center">
                    &copy; NetR Inc. 2024
                    </div>
                </div>
                </div>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);