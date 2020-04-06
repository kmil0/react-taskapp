import React, { Fragment, useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask{
  name:string;
  done:boolean;

}

function App(): JSX.Element{
  
  const [newTask, setNewTask ] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([])

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    console.log(tasks);
  }

  const addTask = (name:string) =>{
    const newTasks: ITask[] = [...tasks, {name, done:false}]
    setTasks(newTasks)
  }

  return(
  <Fragment>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setNewTask(e.target.value) }/>
      <button>
        Save
      </button>
    </form>
  </Fragment>
  );  
}

export default App;