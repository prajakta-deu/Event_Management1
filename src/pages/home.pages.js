import { Link } from "react-router-dom";
const Home=()=>
{
    return(
        <>   
        <div class="intro">
            <h1>A Web Developer</h1>
            <p>I am a web developer and I love to create websites.</p>
            <Link aria-current="page" to="/register" className="button">Register</Link>
            <br></br>
            <Link aria-current="page" to="/login" className="button">Login</Link>
        </div>
        <section>
            <div class="row">
                <h2 class="section-heading">Our Services</h2>
            </div>
            <div class="row">
                <div class="column">
                <div class="card">
                    <div class="icon-wrapper">
                    <i class="fa-sharp fa-solid fa-phone"></i>
                    </div>
                    <h3>Communication with customer</h3>
                    <p>
                    Our intension to build a healthy relationship between customer, communication is the key to understand customer thoughts.
                    </p>
                </div>
                </div>
                <div class="column">
                <div class="card">
                    <div class="icon-wrapper">
                    <i class="fas fa-brush"></i>
                    </div>
                    <h3>Systematic arrangement</h3>
                    <p>
                    Organized well plan event and proper arrangement of event as well as proper time management,
                    we maintain cleanliness because cleanliness is next to godliness..!!!
                    </p>
                </div>
                </div>
                <div class="column">
                <div class="card">
                    <div class="icon-wrapper">
                    <i class="fas fa-wrench"></i>
                    </div>
                    <h3>Online enquiries</h3>
                    <p>
                    If customer have any doubts or quiries our organization try to solve it.
                    You can also suggest us with your piece of advice.
                    </p>
                </div>
                </div>
                <div class="column">
                <div class="card">
                    <div class="icon-wrapper">
                    <i class="fas fa-truck-pickup"></i>
                    </div>
                    <h3>Budget Planning</h3>
                    <p>
                    We provide you a approximation of you cost based on your requirements.
                    Which helps the customer to get an idea of it's budget.
                    </p>
                </div>
                </div>
                <div class="column">
                <div class="card">
                    <div class="icon-wrapper">
                    <i class="fas fa-broom"></i>
                    </div>
                    <h3>Decor hire services</h3>
                    <p>
                    These companies specialize in providing décor hire services that will suit and bridge the needs of your next special event.
                    </p>
                </div>
                </div>
                <div class="column">
                <div class="card">
                    <div class="icon-wrapper">
                    <i class="fas fa-plug"></i>
                    </div>
                    <h3>Services Provided By Us</h3>
                    <p>
                    <ul>
                        <li>Birthday Party</li>
                        <li>Anniversary Party</li>
                        <li>Product Launch</li>
                        <li>Award Ceremony</li>
                        <li>Holi</li>
                        <li>Concert</li>
                    </ul>
                    </p>
                </div>
                </div>
            </div>
        </section>     
        </>
    )
}
export default Home;