import { Switch } from 'antd';

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

ReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode);

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});


const Toggle = () => {
    return(
        <div>
            <input type="checkbox" className="checkbox" id="chk"/>
            <label className="label" htmlFor="chk">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
            </label>
        </div>


    <div className="social-panel-container">
        <div className="social-panel">
            <p>Created with <i className="fa fa-heart"></i> by
                <a target="_blank" href="https://florin-pop.com">Florin Pop</a></p>
            <button className="close-btn"><i className="fas fa-times"></i></button>
            <h4>Get in touch on</h4>
            <ul>
                <li>
                    <a href="https://www.patreon.com/florinpop17" target="_blank">
                        <i className="fab fa-discord"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/florinpop1705" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/florinpop17" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/florinpop17" target="_blank">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/florinpop17" target="_blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <button className="floating-btn">
        Get in Touch
    </button>

    <div className="floating-text">
        Part of <a href="https://florin-pop.com/blog/2019/09/100-days-100-projects" target="_blank">#100Days100Projects</a>
    </div>

    )
}
