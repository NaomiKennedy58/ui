import s from "./DisplayTasksStyles";
import { useState } from "react";

enum Priority {
    LOW,
    MEDIUM,
    HIGH,
    DEFAULT,
}

interface Props {
    // id: number;
    description: string;
    started: string;
    finished: string;
    importance: Priority;
    // onChange:() => void;
    // thumbnail: string;
}

// const [started, setStarted] = useState<boolean>(false);

function DeclareProgress(stage: string | boolean) {
    if (stage==="false" || stage===false) {
        // setStarted(true);
        return stage="true";
    } else if (stage==="true" || stage===true) {
        // setStarted(false);
        return stage="false";
    }
}

// export const taskStatus: boolean[]

export const DisplayTasks: React.FC<Props> = ({ description, started, finished, importance, }) => {
    // const showStartDate = startTime.toLocaleDateString();
    // const showStartTime = startTime.toLocaleTimeString();
    // const showEndDate = finishTime.toLocaleDateString();
    // const showEndTime = finishTime.toLocaleTimeString();

    const [begun, setBegun] = useState(false);
    const [done, setDone] = useState(false);

    return (
        <s.Task>
            {/* <s.ThumbnailContainer>
                <s.Thumbnail src={thumbnail} alt={`Task ${description}` />
            </s.ThumbnailContainer> */}
            <s.TaskInformation>
                <s.Description>{description}</s.Description>
                <s.Started>
                    <input type="checkbox" defaultChecked={begun} onChange={e => {
                        setBegun(e.target.checked)
                        console.log(e.target.checked);
                        started = begun.toString();
                        }} />
                    {begun ? 'started' : 'not started'}
                    {/* {started = begun.toString()} */}
                </s.Started>
                <s.Finished>
                    <input type="checkbox" defaultChecked={done} onChange={e => setDone(e.target.checked)} />
                    {done ? 'done' : 'not done'}
                </s.Finished>
                <s.Priority>{importance}</s.Priority>
            </s.TaskInformation>
        </s.Task>
    );
};