import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Priority, Task } from "./types";
import s from "./App.styles";
import { DisplayTasks } from "./DisplayTasks";
import { NewTask } from "./NewTask";
import Select from 'react-select';

function App() {
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');
  const [newTask, setNewTask] = useState<Task>({
    description: "", started: "", finished: "", importance: Priority.DEFAULT
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [importanceChooser, setImportanceChooser] = useState<boolean>(false);
  const [urgencyLevel, setUrgencyLevel] = useState<Priority>(Priority.DEFAULT);
  const [taskBegun, setTaskBegun] = useState<boolean>(false);
  const [taskDone, setTaskDone] = useState<boolean>(false);

  const emptyString = '';

  useEffect(() => {
    fetch("http://localhost:8080/tasks/all", { method: "GET" })
          .then((r) => r.json())
          .then((r: Task[]) =>{ setTasks(r)})
          .catch((e) => console.log(e))
          .finally(() => setLoading(false));
  }, [])

  useEffect(() => {
    // fetch("http://localhost:8080/tasks/new", { method: "POST" })
    if (!loading) {
      setNewTaskDescription(newTaskDescription);
      setImportanceChooser(true);
      // <Select options={importanceLevels} placeholder="Choose a level of importance" />;
    }
  }, [newTaskDescription])

  const handleNewTask = (tasks: Task[], newTask: Task) => {
    tasks.push(newTask);
    setTasks(tasks);
  }

  const addNewTask = (urgencyLevel: Priority) => {
    if (importanceChooser) {
      console.log("You are in the method for adding a new task.");
      console.log(newTaskDescription);
      console.log(urgencyLevel);
      // const url = "http://localhost:8080/tasks/new";
      const task = fetch("http://localhost:8080/tasks/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // title: 'Can I get a post request to work',
          description: newTaskDescription.toString(),
          started: "false",
          finished: "false",
          importance: urgencyLevel,
          // id: newTaskDescription,
        }),
      });

      task.then(task => task.json())
      .then((task: Task) => {setNewTask(task)})
      .catch((e) => console.log(e))
      
      handleNewTask(tasks, newTask);
      setImportanceChooser(false);
      console.log(tasks);
    }
  }

  // useEffect(() => {
  //   if (importanceChooser) {
  //     console.log("You are in the method for adding a new task.");
  //     console.log(newTaskDescription);
  //     console.log(urgencyLevel);
  //     const url = "http://localhost:8080/tasks/new";
  //     const task = fetch(url, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         description: newTaskDescription,
  //         started: false,
  //         finished: false,
  //         importance: urgencyLevel,
  //       }),
  //     });

  //     task.then((task) => task.json())
  //     .then((task: Task) => {setNewTask(task)})
  //     .catch((e) => console.log(e))
      
  //     handleNewTask(tasks, newTask);
  //     setImportanceChooser(false);
  //     console.log(tasks);
  //   }
  // }, [urgencyLevel])

  // let addTask: Task = {
      //   description: newTaskDescription,
      //   started: "false",
      //   finished: "false",
      //   importance: urgencyLevel
      // }

  if (loading) {
    return (
      <s.Main>
        <p>Loading tasks...</p>;
      </s.Main>
    );
  }

  // const clicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   const dropdowns = document.getElementsByClassName('dropdown');
  //   Array.from(dropdowns).forEach(el => el.classList.remove('active'));
  //   e.target.parentNode.classList.add('active');
  // };

  // const importanceLevels = [
  //   'LOW', 'MEDIUM', 'HIGH'
  // ];

  if (importanceChooser && newTaskDescription!=='') {
    return (
      <div>
        <h2>Choose an urgency level:</h2>
        <button onClick={event => addNewTask(Priority.LOW)}>LOW</button>
        <button onClick={event => addNewTask(Priority.MEDIUM)}>MEDIUM</button>
        <button onClick={event => addNewTask(Priority.HIGH)}>HIGH</button>
      </div>
    )
  }

  return (
    <s.Main>
      <h1>My List of Tasks</h1>
      <NewTask onNewTask={setNewTaskDescription} 
      />
      {tasks ? (
        tasks.map((task) => (
      <DisplayTasks
            key={task.description}
            description={task.description}
            started={task.started}
            finished={task.finished}
            importance={task.importance} 
            // onChange={function (): void {
            //   throw new Error("Function not implemented.");
            // } }      
            />
        ))
      ) : (
        <p>The task list is currently empty.</p>
      )}
    </s.Main>
  );

  // return <h1>I have rendered {count} times.</h1>;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);

// function App () {
    // const [tasks, setTasks] = useState<Task[] | undefined>(undefined);
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     fetch("http://localhost:8080/tasks/all", { method: "GET" })
    //       .then((r) => r.json())
    //       .then((r: Task[]) =>{ setTasks(r)})
    //       .catch((e) => console.log(e))
    //       .finally(() => setLoading(false));
    // }, []);

//     if (loading) {
//         return <p>Loading tasks...</p>;
//     }

// return <p>it works</p>

    // return (
    //     <s.Main>
    //         <h1>My List of Tasks</h1>
    //     </s.Main>
    // )
// }

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
