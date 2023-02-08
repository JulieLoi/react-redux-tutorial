# Base Project
React Redux Basic Tutorial [link] (https://www.youtube.com/watch?v=k68j9xlbHHk)

# Running the Project

### `npm run start`
### `npm test`

<br />
<hr />
<br />

# Redux Introductions
## Redux ([Link](https://redux.js.org/introduction/getting-started))
<b>Redux</b> is a predictable state container for JS Apps.

Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

## Redux Toolkit ([Link](https://redux-toolkit.js.org/))

Redux Toolkit is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:
 * "Configuring a Redux store is too complicated"
 * "I have to add a lot of packages to get Redux to do anything useful"
 * "Redux requires too much boilerplate code"

RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.

Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better.

## React Redux
<b>React Redux</b> is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

<br />
<hr />
<br />

# Redux Terms and Concepts ([Link](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-terms-and-concepts))
<b>Redux</b> is a state management tool that helps us manage complex states by creating a <u>Central Data Store</u> (CDS) to manage the entire data store in just one store.

## State Management Concept
### <u>React State Example</u>
Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

<img src="https://user-images.githubusercontent.com/113395605/217602579-08d82c62-5e40-4fcf-925f-c48cda9f7693.PNG" />

It is a self-contained app with the following parts:
 * The <b>state</b>, the source of truth that drives our app;
 * The <b>view</b>, a declarative description of the UI based on the current state
 * The <b>actions</b>, the events that occur in the app based on user input, and trigger updates in the state

This is a small example of <b>"one-way data flow"</b>:
 * State describes the condition of the app at a specific point in time
 * The UI is rendered based on that state
 * When something happens (such as a user clicking a button), the state is updated based on what occurred
 * The UI re-renders based on the new state

<img width="640" src="https://user-images.githubusercontent.com/113395605/217602581-52db1bad-5bdd-4d5e-86f9-489faedc1502.png">

However, the simplicity can break down when we have <b>multiple components that need to share and use the same state</b>, especially if those components are located in different parts of the application. 

#### <b><u>Redux Solution to State Management</b></u>
One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

## Redux Terminology
There are some important Redux terms that you'll need to be familiar with before we continue:

### <b>Actions</b>
An <b>action</b> is a plain JavaScript object that has a <u>type field</u>, which should be a string that gives this action a descriptive name. An action can be seen as an event that describes something that happened in the application.

The string, `"todos/todoAdded"`:
 - The first part is the feature or category that this action belongs to
 - Thesecond part is the specific thing that happened

Furthermore, an action object can have other fields with additional information about what happened. By convention, we put that information in a field called <b>payload</b>.

A typical action object might look like this:

<table>
    <tr>
        <th>Action Object</th>
        <th>Action Explanation</th>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/113395605/217605505-8ec4bead-d96b-4b30-b666-6a59a343a8a2.PNG" /></td>
        <td>
            This action object has a type and a payload<br />
            This action is related to adding a todo item to a todo list (`"todos/todoAdded"`)<br />
            This action sends the todo item (`"Buy milk"`) in the payload field.
        </td>
    </tr>
</table>

### <b>Action Creators</b>
An <b>action creator</b> is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

<table>
    <tr>
        <th>Action Creator</th>
        <th>Action Creator Explanation</th>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/113395605/217605504-1ce97bb8-d65b-4652-b33e-2b19fcbf0673.PNG" /></td>
        <td>
            This action creator is the previous action object, which has been recreated as a function that returns an action object<br />
            As such, we can simply call the function to add a todo item to the state<br />
        </td>
    </tr>
</table>

### <b>Reducers</b>
A <b>reducer</b> is a function that receives the current state and an action object. It decides how to update the state if necessary and returns the new state [`(state, action) => newState`].

You can think of a reducer as an event listener which handles events based on the received action (event) type.

Reducers must always follow some specific rules:
 * They should only calculate the new state value based on the state and action arguments
 * They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
 * They must not do any asynchronous logic, calculate random values, or cause other "side effects"

The logic inside reducer functions typically follows the same series of steps:
 * Check to see if the reducer cares about this action
 * If so, make a copy of the state, update the copy with new values, and return it
 * Otherwise, return the existing state unchanged

<table>
    <tr>
        <th>Here's a small example of a reducer, showing the steps that each reducer should follow:</th>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/113395605/217607158-d0fae389-ceda-47bb-93fc-389b442e6415.PNG" /></td>
    </tr>
</table>

### <b>Store</b>
The current Redux application state lives in an object called the <b>store</b>.

The store is created by passing in a reducer, and has a method called <b>getState</b> that returns the current state value:

<table>
    <tr>
        <th>Store Example:</th>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/113395605/217607638-4611a923-046c-4748-b6e3-7268687a717f.PNG" /></td>
    </tr>
</table>


### <b>Dispatch</b>
The Redux store has a method called <b>dispatch</b>. 
 - The only way to update the state is to call `store.dispatch()` and pass in an action object. 
 - The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

<table>
    <tr>
        <th>Dispatch Example:</th>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/113395605/217607639-22e7e644-dd1a-4348-80b2-99e5b0d7386e.PNG" /></td>
    </tr>
</table>

You can think of dispatching actions as "triggering an event" in the application. 
 -Something happened, and we want the store to know about it. 
 - Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.


### <b>Selector</b>
A <b>selector</b> is a function that know how to extract specific pieces of information from a store state value. 

As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

<table>
    <tr>
        <th>Selector Example:</th>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/113395605/217608214-80a89d2e-f118-4e88-bc88-a450144bd8f0.PNG" /></td>
    </tr>
</table>

## <b>Redux Application Data Flow</b>
Earlier, we talked about `"one-way data flow"`, which describes this sequence of steps to update the app:
 - State describes the condition of the app at a specific point in time
 - The UI is rendered based on that state
 - When something happens (such as a user clicking a button), the state is updated based on what occurred
 - The UI re-renders based on the new state


For Redux specifically, we can break these steps into more detail:

 * Initial setup:
    * A Redux store is created using a root reducer function
    * The store calls the root reducer once, and saves the return value as its initial state
    * When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
 * Updates:
    * Something happens in the app, such as a user clicking a button
    * The app code dispatches an action to the Redux store, like dispatch({type: 'counter/increment'})
    * The store runs the reducer function again with the previous state and the current action, and saves the return value as the new state
    * The store notifies all parts of the UI that are subscribed that the store has been updated
    * Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
    * Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

<img src="https://user-images.githubusercontent.com/113395605/217609038-2313c856-f305-411c-8fa2-9a72e579056a.gif" width="50%" />

<br />
<hr />
<br />

# React Redux API Overview ([Link](https://react-redux.js.org/introduction/getting-started#api-overview))

## `Provider`
React Redux includes a `<Provider />` component, which makes the Redux store available to the rest of your app:
<table>
    <td><img src="https://user-images.githubusercontent.com/113395605/217611723-cf61fe72-9881-4eec-818c-496f3387725a.PNG" />
</td>
</table>

## `Hook`
React Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store.
 - `useSelector` reads a value from the store state and subscribes to updates
 - `useDispatch` returns the store's dispatch method to let you dispatch actions

<table>
    <td><img src="https://user-images.githubusercontent.com/113395605/217612056-55dde6c9-379a-4c9f-9603-7ff0e794fad3.PNG" />
</td>
</table>

<table>
    <tr>
        <th>Hook Example Import</th>
        <th>Hook Example Component</th>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/113395605/217612201-c7d57786-db8f-4c93-baaa-126a8748dba9.PNG" /></td>
        <td><img src="https://user-images.githubusercontent.com/113395605/217612199-a42e8581-cd4d-4472-952a-d17c734b8c70.PNG" /></td>
    </tr>
</table>


