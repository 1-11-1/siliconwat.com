const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="index.html"><img src="siliconwat.png"></a>
            <a href="index.html"><h1>Silicon Wat University</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <nav>
            <ul>
                <li>
                    <h3>Frontend Course</h3>
                    <div>
                        <button onclick="this.getRootNode().host.dispatch('cohort', 'frontend')">Join: Remote 12-Week Cohort</button>
                        <h4>Learn</h4>
                        <menu>
                            <li>Watch Videos on Udemy</li>
                            <li>Read Textbook on Medium</li>
                            <li onclick="this.getRootNode().host.dispatch('quiz', 'frontend')">Take Quizzes to Check Understanding</li>
                        </menu>
                        <h4>Practice</h4>
                        <menu>
                            <li onclick="this.getRootNode().host.dispatch('podcast', 'frontend')">Podcast: Motivation & Coding Music</li>
                            <li onclick="this.getRootNode().host.dispatch('code', 'frontend')">Interactive Coding Exercises</li>
                            <li>Remote Pair Programming on Discord</li>
                            <li>Students' Solo Projects on Codepen</li>
                        </menu>
                        <h4>Review</h4>
                        <menu>
                            <li>Live Demo: Music Apps</li>
                            <li>Syntax Flashcards</li>
                            <li>Students' Writings on Medium</li>
                            <li>Mock Interviews on YouTube</li>
                        </menu>
                        <h4>Bonus: Advanced Lessons</h4>
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
                        <button onclick="this.getRootNode().host.dispatch('cohort', 'backend')">Join: Remote 12-Week Cohort</button>
                        <h4>Learn</h4>
                        <menu>
                            <li>Watch Videos on Udemy</li>
                            <li>Read Textbook on Medium</li>
                            <li onclick="this.getRootNode().host.dispatch('quiz', 'backend')">Take Quizzes to Check Understanding</li>
                        </menu>
                        <h4>Practice</h4>
                        <menu>
                            <li onclick="this.getRootNode().host.dispatch('podcast', 'backend')">Podcast: Motivation & Coding Music</li>
                            <li onclick="this.getRootNode().host.dispatch('code', 'backend')">Interactive Coding Exercises</li>
                            <li>Remote Pair Programming on Discord</li>
                            <li>Students' Solo Projects on Replit</li>
                        </menu>
                        <h4>Review</h4>
                        <menu>
                            <li>Live Demo: Music Apps</li>
                            <li>Syntax Flashcards</li>
                            <li>Students' Writings on Medium</li>
                            <li>Mock Interviews on YouTube</li>
                        </menu>
                        <h4>Bonus: Advanced Lessons</h4>
                        <menu>
                            <li>Quantum Physics & Computing</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>iOS Course</h3>
                    <div>
                        <button onclick="this.getRootNode().host.dispatch('cohort', 'ios')">Join: Remote 12-Week Cohort</button>
                        <h4>Learn</h4>
                        <menu>
                            <li>Watch Videos on Udemy</li>
                            <li>Read Textbook on Medium</li>
                            <li onclick="this.getRootNode().host.dispatch('quiz', 'ios')">Take Quizzes to Check Understanding</li>
                        </menu>
                        <h4>Practice</h4>
                        <menu>
                            <li onclick="this.getRootNode().host.dispatch('podcast', 'ios')">Podcast: Motivation & Coding Music</li>
                            <li onclick="this.getRootNode().host.dispatch('code', 'ios')">Interactive Coding Exercises</li>
                            <li>Remote Pair Programming on Discord</li>
                            <li>Students' Solo Projects on GitHub</li>
                        </menu>
                        <h4>Review</h4>
                        <menu>
                            <li>Live Demo: Music Apps</li>
                            <li>Syntax Flashcards</li>
                            <li>Students' Writings on Medium</li>
                            <li>Mock Interviews on YouTube</li>
                        </menu>
                        <h4>Bonus: Advanced Lessons</h4>
                        <menu>
                            <li>3D Animations</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Graduation</h3>
                    <div>
                        <button>Refund: Committment Deposits</button>
                        <h4>Awards</h4>
                        <menu>
                            <li>Certificates of Completion</li>
                            <li>Graduation Diploma</li>
                        </menu>
                        <h4>Apply</h4>
                        <menu>
                            <li>Mock Technical Interviews</li>
                            <li>Admission to Startup Incubator</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Coupons</h3>
                    <div>
                        <button onclick="this.getRootNode().host.dispatch('coupon')">Apply for Discounts</button>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li>Women & Minorities</li>
                            <li>Ukrainian Refugees</li>
                            <li>Cambodian Genocide</li>
                        </menu>
                        <h4>Campuses</h4>
                        <menu>
                            <li>Cambodia</li>
                            <li class="not-ready">Ukraine</li>
                            <li class="not-ready">United States</li>
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="changeLanguage(event)">
                <option>English</option>
                <option disabled>Khmer</option>
                <option disabled>Spanish</option>
                <option disabled>Russian</option>
                <option disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;