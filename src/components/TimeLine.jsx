import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CiSearch } from "react-icons/ci";
import { VscNote } from "react-icons/vsc";
import { RxMagicWand } from "react-icons/rx";
import { GoLightBulb } from "react-icons/go";
import { PiArmchairLight } from "react-icons/pi";

const TimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Design"
        iconStyle={{ background: "#F7F7F7", color: "black" }}
        icon={<PiArmchairLight />}
        contentArrowStyle={{ borderRight: "7px solid  black" }}
      >
        <p>
          Design lies at the heart of our process, shaping every aspect of our
          projects. We believe in the power of thoughtful design to captivate
          audiences, enhance functionality, and evoke emotion.
        </p>
        <img
          src="https://i.pinimg.com/564x/eb/6d/50/eb6d509ac45980009861547cd311ecae.jpg"
          alt=""
          className="image"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Briefing"
        iconStyle={{ background: "#F7F7F7", color: "black" }}
        icon={<VscNote />}
        contentArrowStyle={{ borderRight: "7px solid  black" }}
      >
        <p>
          We implement a detailed briefing process before starting any project.
          We gather to understand client needs, define the target audience, and
          clarify the project's objectives.
        </p>
        <img
          src="  https://i.pinimg.com/564x/29/eb/60/29eb60a0d3136ad9f02b99994801c7fc.jpg"
          alt="image"
          className="image"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  black" }}
        date="Research"
        iconStyle={{ background: "#F7F7F7", color: "black" }}
        icon={<CiSearch />}
      >
        <p>
          Research is a fundamental step in our process, guiding us to deeper
          insights and understanding. We delve into market trends, consumer
          behaviors, and industry best practices to inform our decisions and
          strategies.
        </p>

        <img
          src="https://i.pinimg.com/564x/fc/bd/ad/fcbdad6262020e5197d2feffde5752b3.jpg"
          alt="image"
          className="image"
        />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Brainstorm"
        iconStyle={{ background: "#F7F7F7", color: "black" }}
        icon={<GoLightBulb />}
        contentArrowStyle={{ borderRight: "7px solid  black" }}
      >
        <p>
          Brainstorming sessions are essential to unleash the creative potential
          of our team. We come together to share ideas, discuss innovative
          solutions, and develop unique concepts. This process plays a crucial
          role in ensuring that the project is distinctive and impactful.
        </p>
        <img
          src="https://i.pinimg.com/564x/d5/e9/38/d5e9386f8b3cc25976e0e03369c76589.jpg"
          alt="image"
          className="image"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Create"
        iconStyle={{ background: "#F7F7F7", color: "black" }}
        icon={<RxMagicWand />}
        contentArrowStyle={{ borderRight: "7px solid  black" }}
        
      >
        <p>
          We embark on the creation phase with enthusiasm and dedication.
          Drawing from our research insights and brainstorming sessions, we
          bring ideas to life through design, development, and content creation.
          Our collaborative approach ensures that each element is carefully
          crafted to align with the project's goals and deliver an exceptional
          user experience.
        </p>
        <img
          src="https://i.pinimg.com/564x/af/ed/72/afed7289a2605bfa567229db5dfdbf5b.jpg"
          alt="image"
          className="image"
        />
        
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;
