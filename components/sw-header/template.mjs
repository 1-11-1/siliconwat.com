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
                    <h3>Frontend Course</h3>
                    <div>
                        <h4>Learn</h4>
                        <menu>
                            <li>Read Textbook on Medium</li>
                            <li>Watch Videos on Udemy</li>
                            <li>Hi</li>
                        </menu>
                        <h4>Practice</h4>
                        <menu>
                            <li>Coding Exercises</li>
                            <li>Pair Programming</li>
                            <li>Hi</li>
                        </menu>
                        <h4>Review</h4>
                        <menu>
                            <li>Flashcards</li>
                            <li>Mock Interviews on YouTube</li>
                            <li>Hi</li>
                        </menu>
                        <h4>Advanced Course</h4>
                        <menu>
                            <li>Web Audio Production</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Backend Course</h3>
                    <div>
                        <menu>
                            <li>Hi</li>
                            <li>Hi</li>
                            <li>Hi</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>iOS Course</h3>
                    <div>
                        <menu>
                            <li>Hi</li>
                            <li>Hi</li>
                            <li>Hi</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Graduation</h3>
                    <div>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li>Committment Deposit</li>
                            <li>Certificate of Completion</li>
                            <li>Apply for Mock Interview</li>
                            <li>Apply for Admission to Campus</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Coupons</h3>
                    <div>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li>Women & Minorities</li>
                            <li>Cambodians</li>
                            <li>Ukrainian Refugees</li>
                        </menu>
                    </div>
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