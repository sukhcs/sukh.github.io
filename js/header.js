class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style type="text/css">
            .logo {
                position: relative;
                top: -0.5em;
            }
            .logo a, .logo a:visited {
                text-decoration: none;
                color: #2B2B2D;
            }
            .logo img {
                height: 2em;
                position: relative;
                top: 0.55em;
                margin-right: 0.3em;
            }
        </style>
        <header class="padded">
            <div class="container">
                
                <div class="row">
                    <div class="one half">
                        <div style="font-size:50px;font-weight: bold;color: #4171ab;">NetR</div>
                        <!--<h2 class="logo"><a href="/" target="_parent"><img src="images/logo_netr_box.png" alt="NetR"></a></h2>-->
                    </div>
                </div>
                <!--
                <nav role="navigation" class="nav gap-top black">
                    <ul role="menubar">
                        <li><a href="index.html"><i class="icon-home"></i> Home</a></li>
                        <li role="menu">
                            <button>Services</button>
                            <ul>
                                <li><a href="arch.html">Architecture</a></li>
                                <li><a href="dev.html">Development</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html"> Contact</a></li>
                    </ul>
                </nav>
                -->
            </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);