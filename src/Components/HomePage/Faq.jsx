import React from "react";
import "./Faq.css";
// import Footer from "./Footer";

const Faq = () => {
  return (
    <>
      <div className="faq">
        <h2>Frequently asked question</h2>
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label htmlFor="first">What is Netflix?</label>
            <div className="content">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="second" />
            <label htmlFor="second">How much does Netflix cost?</label>
            <div className="content">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="third" />
            <label htmlFor="third">Where can I watch?</label>
            <div className="content">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label htmlFor="fourth">How do I cancel?</label>
            <div className="content">
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label htmlFor="fifth">What can I watch on Netflix?</label>
            <div className="content">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label htmlFor="sixth">Is Netflix good for kids?</label>
            <div className="content">
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </div>
          </li>
        </ul>
        <small>
          Ready to watch? Enter your email to create or restart your membership.
        </small>
        <form className="email_signup">
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </>
  );
};

export default Faq;
