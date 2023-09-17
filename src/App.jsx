import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import './App.css'
import MyButton from './components/MyButton';
import ListGroup from 'react-bootstrap/ListGroup';
const App = () => {
  const [todo, setTodo] = useState([])
  const [todoValue, setTodoValue] = useState('')

  const handleValue = (e) => {
    setTodoValue(e.target.value);
  }

  const submit = () => {

    const obj = {
      item: todoValue,
    }
    todo.push(obj)

    setTodo([...todo])

    setTodoValue('');
  }


  const deleted = (ind) => {
    console.log(ind);
    todo.splice(ind, 1)
    setTodo([...todo])

  }
const deleteAll = () => {
  setTodo([... ''])
}


  const EditTodo = (ind) => {
    console.log(ind);
    const editValue = prompt('Edit Todo', todo[ind].item);

    todo[ind].item = editValue;

    setTodo([...todo])

  }



  return (
    <>
      <MyNavbar />
      <div className="Mycontainer">
        <input type="text" value={todoValue} placeholder='Enter Todo' className='myInput' onChange={(e) => handleValue(e)} />
        <MyButton primary="primary" title="Add Todo" click={submit} />
        <MyButton primary="danger" title="Delete All" click={deleteAll}/>
      </div>

      <div className="Listcontainer">
        <ListGroup>

          {
            todo.map((value, index) => {
              return (

                <ListGroup.Item className='mylist my-2' key={index}>
                  <p>
                    {value.item}
                  </p>
                  <div>
                    <MyButton primary="primary" title="Edit" click={() => EditTodo(index)} />
                    <MyButton primary="danger" title="delete" click={() => deleted(index)} />
                  </div>

                </ListGroup.Item>
              )
            })

          }
        </ListGroup>
      </div >
    </>
  )
}

export default App
















// const deleted = (ind) => {
//   console.log(ind);
//   todo.splice(ind, 1);
//   setTodo([...todo]);
// }

// const edit = (index) => {
//   console.log("editTodo", todo[index].item);
//   const editValue = prompt("Enter Edit value", todo[index].item);
//   console.log("editValue", editValue);
//   todo[index].item = editValue;
//   setTodo([...todo]);
// }

// const [todo, setTodo] = useState([]);
// const [todoValue, settodoValue] = useState('');


// const deleteTodo = (index) => {
//   console.log("deleteTodo", index);
//   todo.splice(index, 1);
//   setTodo([...todo]);
// };


// const handleValue = (e) => {
//   settodoValue(e.target.value);
// }
// console.log(todoValue);

// const submit = () => {
//   const obj = {
//     item: todoValue
//   }
//   todo.push(obj)
//   setTodo([...todo])
//   console.log(todo);
//   settodoValue('')
//   console.log('ochange value input===>', todoValue);
// }