import Additem from "./Additem";
import Content from "./Content1";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import Searchitem from "./Searchitem";
import apiRequest from "./apiRequest";
function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError,setFetchErrror] = useState(null)
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('data not received')
        // console.log(response);
        const listItem = await response.json();
        // console.log(listItem);
        setItems(listItem);
        setFetchErrror(null)
        // console.log(fetchError);
      } catch (err) {
        setFetchErrror(err.message);;
      }finally{
        setIsLoading(false)
        // console.log('gxfdx');
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())()
    },2000)
    }, []);
    
  

  const handleCheck = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);
    
    const myItem=listItem.filter((item) => 
    item.id===id)

  };
  const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };
  const addItem =async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItem = [...items, addNewItem];
    setItems(listItem);

    const postOption={
      method:'post',
      headers:{
        'Conent-Type':'application/json'
      },
      body:JSON.stringify(addNewItem)
    }

    const result= await apiRequest(API_URL,postOption)
    if(result) setFetchErrror(result)
  };

  return (
    <div className="App">
      <Header title="Course list" />
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Searchitem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading items..</p>}
        {fetchError && <p>{`Error:${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
