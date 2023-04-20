import Layout from "./layout/Layout";
import ImageStack from "./components/ImageStack";
import users from "./assets/icons/users-black.svg";
import board from "./assets/icons/board.svg";
import list from "./assets/icons/list-dashes.svg";
import lightning from "./assets/icons/lightning-black.svg";
import plus from "./assets/icons/plus.svg";
import SectionHeading from "./components/SectionHeading";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./components/TaskList";
import AddTaskBtn from "./components/AddTaskBtn";
import { TASKS_DATA } from "./data/props";

function App() {
  // const [sectionTotals, setSectionTotals] = useState({ todo: 0, ongoing: 0, completed: 0 })
  const [tasks, setTasks] = useState(TASKS_DATA)

  const progressChangeHandler = (num, id, status) => {
    setTasks(prevState => {
      const obj = { ...prevState }
      const arr = obj[status]
      const index = arr.findIndex(item => item.taskid === Number(id))
      const newTask = { ...arr[index], progress: num }
      arr[index] = newTask
      
      return obj
    })
  }

  const addMemberhandler = () => {

  }

  const addToDoTask = () => {

  }

  const addOngoingTask = () => {

  }

  const addCompletedTask = () => {

  }

  const onDragEnd = (result) => {
    const { source, destination } = result
    if (!destination) return

    if (source.droppableId === destination.droppableId) {
        return
    }

    let todo = [...tasks.todo]
    let ongoing = [...tasks.ongoing]
    let completed = [...tasks.completed]
    let changedTask

    if (source.droppableId === "todo") {
      changedTask = todo.splice(source.index, 1)[0]

      if (destination.droppableId === "ongoing") {
        changedTask.status = "ongoing"
        ongoing.push(changedTask)
      } else if (destination.droppableId === "completed") {
        changedTask.status = "completed"
        completed.push(changedTask)
      }
    }

    if (source.droppableId === "ongoing") {
      changedTask = ongoing.splice(source.index, 1)[0]

      if (destination.droppableId === "todo") {
        changedTask.status = "todo"
        todo.push(changedTask)
      } else if (destination.droppableId === "completed") {
        changedTask.status = "completed"
        completed.push(changedTask)
      }
    }

    if (source.droppableId === "completed") {
      changedTask = completed.splice(source.index, 1)[0]

      if (destination.droppableId === "ongoing") {
        changedTask.status = "ongoing"
        ongoing.push(changedTask)
      } else if (destination.droppableId === "todo") {
        changedTask.status = "todo"
        todo.push(changedTask)
      }
    }

    setTasks({ todo, ongoing, completed })
  }

  // useEffect(() => {
  //   const [todo, ongoing, completed] = tasks.reduce((acc, curr) => {
  //     if (curr.status === "todo") {
  //       acc[0]++
  //     } else if (curr.status === "ongoing") {
  //       acc[1]++
  //     } else if (curr.status === "completed") {
  //       acc[2]++
  //     }
      
  //     return acc
  //   }, [0, 0, 0])

  //   setSectionTotals({ todo, ongoing, completed })
  // }, [tasks])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Layout>
        <section className="w-full h-full bg-[#FCFBFC]">
          <section className="w-full h-fit bg-white px-16 pt-10 pb-6 flex flex-col gap-14 leading-[120%] shadow-topSection">
            <div className="w-full flex items-center justify-between">
              <div className="w-fit flex flex-col gap-1">
                <h1 className="text-black text-[2.375rem] font-semibold tracking-[-0.02em] leading-[120%]">
                  New Campaign Run
                </h1>
                <p className="text-greyText text-[0.875rem] leading-[120%]">
                  A new campaign launch work for brand new feature in May month
                </p>
              </div>
              <button type="button" onClick={ addMemberhandler } className="w-fit bg-black rounded-lg py-3 px-[1.8rem]">
                <span className="text-[0.875rem] leading-[120%]">ADD MEMBERS</span>
              </button>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-fit flex items-center gap-3">
                <ImageStack stackProps={{ bigSize: true }} />
                <p className="text-[0.875rem] text-greyText leading-[120%]">8 members</p>
              </div>
              <ul className="w-fit flex items-center gap-[1.125rem]">
                <li>
                  <button className="w-fit flex items-center gap-1 opacity-60 hover:opacity-100">
                    <img src={ users } alt=""  className="w-[1.125rem]"/>
                    <p className="font-medium text-[0.875rem] leading-[120%] text-black">Participants View</p>
                  </button>
                </li>
                <li>
                  <button className="w-fit flex items-center gap-1 opacity-60 hover:opacity-100">
                    <img src={ board } alt=""  className="w-[1.125rem]"/>
                    <p className="font-medium text-[0.875rem] leading-[120%] text-black">Board View</p>
                  </button>
                </li>
                <li>
                  <button className="w-fit flex items-center gap-1 opacity-60 hover:opacity-100">
                    <img src={ list } alt=""  className="w-[1.125rem]"/>
                    <p className="font-medium text-[0.875rem] leading-[120%] text-black">List View</p>
                  </button>
                </li>
                <li>
                  <button className="w-fit flex items-center gap-1 opacity-60 hover:opacity-100">
                    <img src={ lightning } alt=""  className="w-[1.125rem]"/>
                    <p className="font-medium text-[0.875rem] leading-[120%] text-black">Power View</p>
                  </button>
                </li>
                <li>
                  <button className="w-fit flex items-center gap-1 opacity-60 hover:opacity-100">
                    <img src={ plus } alt=""  className="w-[1.125rem]"/>
                  </button>
                </li>
              </ul>
            </div>
          </section>
          <section className="w-full h-max bg-[#FCFBFC] px-16 pt-16 pb-20">
              <div className="w-full grid grid-cols-3 gap-10">
                <section className="w-full">
                  <SectionHeading headingProps={{ title: "To Do", count: tasks.todo.length }} />
                  <TaskList taskProps={{
                    tasksArray: tasks.todo.map(task => {
                      task.progressChangeHandler = progressChangeHandler
                      return task
                    }),
                    listName: "todo" }}
                  />
                  <AddTaskBtn btnProps={{ addTaskHandler: addToDoTask }} />
                </section>
                <section>
                  <SectionHeading headingProps={{ title: "In Progress", count: tasks.ongoing.length }} />
                  <TaskList taskProps={{
                    tasksArray: tasks.ongoing.map(task => {
                      task.progressChangeHandler = progressChangeHandler
                      return task
                    }),
                    listName: "ongoing" }} />
                  <AddTaskBtn btnProps={{ addTaskHandler: addOngoingTask }} />
                </section>
                <section>
                  <SectionHeading headingProps={{ title: "Completed", count: tasks.completed.length }} />
                  <TaskList taskProps={{
                    tasksArray: tasks.completed.map(task => {
                      task.progressChangeHandler = progressChangeHandler
                      return task
                    }),
                    listName: "completed" }} />
                  <AddTaskBtn btnProps={{ addTaskHandler: addCompletedTask }} />
                </section>
              </div>
            {/* <DragDropContext onDragEnd={() => {}}>
            </DragDropContext> */}
          </section>
        </section>
      </Layout>
    </DragDropContext>
  );
}

export default App;