import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const login = async () => {
    const res = await axios.post(`${API}/auth/login`, { email, password });
    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
  };

  const signup = async () => {
    await axios.post(`${API}/auth/signup`, { email, password });
    alert("User created");
  };

  const getTasks = async () => {
    const res = await axios.get(`${API}/tasks`, { headers });
    setTasks(res.data);
  };

  const createTask = async () => {
    await axios.post(`${API}/tasks`, { title }, { headers });
    setTitle("");
    getTasks();
  };

  const toggleTask = async (id, status) => {
    await axios.put(
      `${API}/tasks/${id}`,
      { status: status === "pending" ? "completed" : "pending" },
      { headers }
    );
    getTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/tasks/${id}`, { headers });
    getTasks();
  };

  useEffect(() => {
    if (token) getTasks();
  }, [token]);

  if (!token) {
    return (
      <div style={{ padding: 50 }}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={login}>Login</button>
        <button onClick={signup}>Signup</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 50 }}>
      <h2>Tasks</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button onClick={createTask}>Add</button>

      {tasks.map((t) => (
        <div key={t.id}>
          <span>{t.title}</span>
          <button onClick={() => toggleTask(t.id, t.status)}>Toggle</button>
          <button onClick={() => deleteTask(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;