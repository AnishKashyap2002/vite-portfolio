import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import School from "@material-ui/icons/School";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="rgb(126, 32, 227)">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{
                        backgroundColor: "rgb(126, 32, 227)",
                        color: "white",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2018"
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element--title">
                        KVS Subathu, Hp
                    </h3>
                    <p>Class 10th</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{
                        backgroundColor: "rgb(126, 32, 227)",
                        color: "white",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2018"
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        KVS Subathu, Hp
                    </h3>
                    <p>Class 12th</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{
                        backgroundColor: "rgb(126, 32, 227)",
                        color: "white",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2023"
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Govt. College Solan , HP
                    </h3>
                    <p>BCA</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
