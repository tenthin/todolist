import React,{useState} from 'react'
import "./TodoList.scss";
import Button from '@mui/material/Button';
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
        To do List
        <div className="todolist-main">
          <input type="text" className="" placeholder="Your Task"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
            <Button>
            <AddIcon onClick={addItem}/>
            </Button>
            <div className="showItems">
              {
                items.map((elem,ind) => {
                  return (
                    <div className="singleItems" key={ind}>
                      <h3>{elem}</h3>
                      {/* <EditIcon/>Edit */}
                      <Button onClick={() => deleteItem(ind)}>
                        <DeleteIcon/>
                      </Button> 
                      {/* <DeleteIcon onClick={() => deleteItem(ind)}/> */}
              </div>  
                  )
                })
              }
            </div>
            {/* <Button>
              <EditIcon/>Edit
            </Button>   
            <Button>
              <DeleteIcon/>Delete
            </Button>  */}
        </div>
    </div>
  )
}

export default TodoList