class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header" id="space_bg">
                <div class="header_text">
                    <img src="wordart.png" alt="">
                </div>
                <hr/>
                <div class="navbar">
                    <ul>
                        <li>
                            <a href="index">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="album-club">
                                Album Club
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Reviews
                            </a>
                        </li>
                    </ul>
                </div>
                <hr/>
            </header>
        `
    }
}

customElements.define("my-header", MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer" id="space_bg">
                <hr/>
                <div class="flex_scroll">
                    <div class="flex_scroll_item" style="--n: 1">
                        <a href="https://insect.christmas" target="_blank">
                            <img src="88x31/insect.gif" alt="">
                        </a>
                    </div>
                    <div class="flex_scroll_item" style="--n: 2">
                        <img src="88x31/mikufan.png" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 3">
                        <img src="88x31/acab.gif" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 4">
                        <img src="88x31/antinazi.gif" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 5">
                        <img src="88x31/beyes.gif" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 6">
                        <img src="88x31/antinft.gif" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 7">
                        <img src="88x31/blank bisexual pride with colour border.png" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 8">
                        <img src="88x31/blank transgender with colour border.png" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 9">
                        <img src="88x31/sheher.png" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 10">
                        <img src="88x31/undercon2.gif" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 11">
                        <img src="88x31/wiiu.png" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 12">
                        <img src="88x31/mettaton.png" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 13">
                        <a href="https://x.com/JandroGrant" target="_blank">
                            <img src="88x31/tohell.gif" alt="">
                        </a>
                    </div>
                    <div class="flex_scroll_item" style="--n: 14">
                        <img src="88x31/noAI.gif" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 15">
                        <img src="88x31/palestine.gif" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 16">
                        <img src="88x31/mlpIntro.gif" alt="">
                    </div>
                    <div class="flex_scroll_item" style="--n: 17">
                        <img src="88x31/plush.png" alt="">
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define("my-footer", MyFooter)