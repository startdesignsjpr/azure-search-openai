import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are some of the specific policies I should be aware of?",
        value: "What are some of the specific policies I should be aware of?"
    },
    { text: "What happens in a performance review at Cognitive Automation Labs?", value: "What happens in a performance review at Cognitive Automation Labs?" },
    { text: "What is the promotion pathway for engineers at Cognitive Automation Labs?", value: "What is the promotion pathway for engineers at Cognitive Automation Labs?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
