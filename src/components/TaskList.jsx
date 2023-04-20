import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskSingle from "./TaskSingle";

const TaskList = ({ taskProps }) => {
    const { tasksArray, listName } = taskProps

    const [imageIsActive, setImageIsActive] = useState(() => {
        let obj = {}

        for (let task of tasksArray) {
            if (Object.keys(obj).length === 0) {
                obj[task.taskid] = true
            } else {
                obj[task.taskid] = false
            }
        }

        return obj
    })

    const handleFocus = (e) => {
        let id = e.currentTarget.id
        
        if (imageIsActive[id] !== true) {
            setImageIsActive(prevState => {
                let obj = {...prevState}

                for (let entry in obj) {
                    if (entry === id) {
                        obj[entry] = true
                    } else {
                        obj[entry] = false
                    }
                }

                return obj
            })
        }
    }

    return (
        <Droppable droppableId={listName}>
            {
                (provided) => (
                    <div className="w-full grid gap-4 pt-4"
                        ref={provided.innerRef} {...provided.droppableProps}
                    >
                        { tasksArray.map((task, idx) => {
                            task.index = idx
                            task.handleFocus = handleFocus
                            task.imageIsActive = imageIsActive[task.taskid]
                            
                            return <TaskSingle key={task.taskid} taskProps={task} />
                        })}
                        {provided.placeholder}
                    </div>
                )
            }
        </Droppable>
    )
}

export default TaskList