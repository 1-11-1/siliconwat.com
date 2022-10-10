const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="index.html"><img src="siliconwat.png"></a>
            <h1>Silicon Wat University</h1>
        </section>
        <nav>
            <ul>
                <li>
                    <h3>Hello</h3>
                    <menu>
                        <li>Hi</li>
                        <li>Hi</li>
                        <li>Hi</li>
                    </menu>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Hello</h3>
                    <menu>
                        <li>Hi</li>
                        <li>Hi</li>
                        <li>Hi</li>
                    </menu>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Hello</h3>
                    <menu>
                        <li>Hi</li>
                        <li>Hi</li>
                        <li>Hi</li>
                        <li>Hi</li>
                    </menu>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Hello</h3>
                    <menu>
                        <li>Hi</li>
                        <li>Hi</li>
                        <li>Hi</li>
                        <li>Hi</li>
                    </menu>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="changeLanguage(event)">
                <option>English</option>
                <option>Khmer</option>
            </select>
        </aside>
    </header>
`;

export default template;