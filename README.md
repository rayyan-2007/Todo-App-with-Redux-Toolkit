# 📝 Todo App – React & Redux Toolkit

A simple and responsive Todo Management Application built using **React.js, Redux Toolkit, and Axios**. This application allows users to manage daily tasks with CRUD operations and filter tasks based on their completion status.

## 🚀 Features

- **Add Todos:** Create new tasks with a name and description.
- **View Todos:** Fetch and display tasks from the API.
- **Edit Todos:** Update existing task names and descriptions.
- **Delete Todos:** Remove tasks from the list.
- **Update Status:** Change task status between Completed and Not Completed.
- **Filter Todos:** Filter tasks by All, Completed, and Not Completed.
- **API Integration:** Store and manage Todo data using MockAPI.
- **State Management:** Manage application state using Redux Toolkit.
- **Loading State:** Display a loading indicator while fetching data.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Redux Toolkit
- React Redux
- Axios
- HTML5
- CSS3
- MockAPI

## 📂 Project Structure

```text
todo-app/
│
├── public/
│
├── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── TodoCard.jsx
│   │   │
│   │   └── Slices/
│   │       └── TodoSlice.jsx
│   │
│   ├── Redux/
│   │   └── ReduxStore.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd todo-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at the local URL displayed in your terminal.

## 🔗 API Integration

This application uses **MockAPI** to store and manage Todo data.

The application performs the following API operations:

| Operation | HTTP Method | Description |
|---|---|---|
| Fetch Todos | GET | Retrieve all Todo items |
| Add Todo | POST | Create a new Todo |
| Edit Todo | PUT | Update Todo details |
| Update Status | PUT | Update Todo completion status |
| Delete Todo | DELETE | Remove a Todo |

## 🧠 Redux State Management

Redux Toolkit is used to manage the application's global state.

The Todo slice includes the following reducers:

| Reducer | Purpose |
|---|---|
| `getTodo` | Store fetched Todo data |
| `addTodo` | Add a new Todo |
| `updateStatus` | Update Todo status |
| `editTodo` | Edit Todo details |
| `deleteTodo` | Delete a Todo |
| `setFilter` | Update the selected filter |

## 📸 Screenshots

Add your application screenshots here:

```markdown
![Todo App Screenshot](./screenshots/todo-app.png)
```

## 🎯 Learning Outcomes

Through this project, I practiced:

- Building reusable React components.
- Managing global state with Redux Toolkit.
- Performing CRUD operations using Axios.
- Integrating a REST API with React.
- Using `useSelector` and `useDispatch`.
- Managing asynchronous API requests.
- Implementing dynamic filtering.
- Understanding JavaScript array methods such as `map()`, `filter()`, and `push()`.

## 👨‍💻 Author

**Your Name**

- GitHub: [Your GitHub Profile](YOUR_GITHUB_PROFILE_URL)

---

⭐ If you find this project useful, consider giving it a star!
