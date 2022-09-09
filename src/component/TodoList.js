import React,{useState} from 'react'
import "./TodoList.scss";
// import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {

  const [inputData,setInputData] = useState('');
  const[items,setItems] = useState([]);

  const addItem = () => {
    if(!inputData) {

    }else{
      setItems([...items, inputData]);
      setInputData('')
    }
  }

  const deleteItem =(id) => {
    console.log(id)
    const updateditems = items.filter((elem,ind) => {
      return ind !== id;
    });
    setItems(updateditems)
  }

  return (
    <div className="todolist">
        <h1 className="todolist-title">ToDo List</h1>
        <div className="todolist-main">
          <input  className="todolist-input" type="text" placeholder="Your Task"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)
            }
          />
            <button className="todolist-addbutton" onClick={addItem}>
            <AddIcon className="todolist-addicon"/>
            </button>
            {/* <Button>
              <EditIcon/>Edit
            </Button>   
            <Button>
              <DeleteIcon/>Delete
            </Button>  */}
        </div>

        <div className="showItems">
              {
                items.map((elem,ind) => {
                  return (
                    <div className="singleItems" key={ind}>
                      <h3 className="todolist-list">{elem}</h3>
                      {/* <EditIcon/>Edit */}
                      <button className="todolist-deletebutton"onClick={() => deleteItem(ind)}>
                        <DeleteIcon className="todolist-deleteicon"/>
                      </button> 
                      {/* <DeleteIcon onClick={() => deleteItem(ind)}/> */}
                    </div>  
                  )
                })
              }
        </div>
    </div>
  )
}

export default TodoList