React + Redux Toolkit Counter

A simple, scalable example of global state management in React using Redux Toolkit (RTK) and Vite.
✨ Features
Centralized State: The counter value is managed in a single store.
Cross-Component Sync: Updates in the App component reflect instantly in the Home component.
Input Validation: The "Decrease" button is automatically disabled when the count is zero.
Modern Redux: Uses createSlice for cleaner, more maintainable code.
🛠️ Tech Stack
Framework: React 19
State Management: Redux Toolkit
Bundler: Vite
Library: React-Redux (Hooks: useSelector, useDispatch)
📁 Project Structure
text
src/
├── components/
│   └── Home.jsx       # Consumes state and dispatches 'reset'
├── redux/
│   ├── counterSlice.js # Contains logic (Actions/Reducers)
│   └── store.js        # Global Redux store configuration
├── App.jsx             # Main UI with Increment/Decrement logic
└── main.jsx            # Wraps App with Redux Provider