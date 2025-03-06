import styles from "./browse-style.module.css";
import {Fragment} from "react";

const topics = [
    {
        image: "assets/home-page/topic-casual.png",
        topic: "Casual"
    },
    {
        image: "assets/home-page/topic-formal.png",
        topic: "Formal"
    },
    {
        image: "assets/home-page/topic-party.png",
        topic: "Party"
    },
    {
        image: "assets/home-page/topic-gym.png",
        topic: "Gym"
    },
];

export default function BrowseStyle() {
    return (
        <Fragment>
            <section className={styles.browseStyle}>
                <section className={styles.containerBrowseStyle}>
                    <h1 className={styles.title}>BROWSE BY DRESS STYLE</h1>
                    <section className={styles.cardTopicsBrowse}>
                        {topics.map((topic, index) => (
                            <section key={index} className={styles.containerTopics}>
                                <img className={styles.topicImage} src={topic.image} alt={topic.topic} />
                                <h2 className={styles.topic}>{topic.topic}</h2>
                            </section>
                        ))}
                    </section>
                </section>
            </section>
        </Fragment>
    );
}
