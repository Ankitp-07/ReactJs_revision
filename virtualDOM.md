### Virtual DOM in React.js
Virtual DOM is a lightweight copy/representation of the Real DOM stored in memory.
>  React uses it to make UI updates more efficient.
>  When state or props change, React creates a new Virtual DOM.
>  React compares the new Virtual DOM with the previous Virtual DOM.
>   This comparison is called Diffing.
>   React finds only the elements that have changed.
>   React updates only those changes in the Real DOM.
>   This process is part of Reconciliation.
>   It avoids unnecessary updates to the Real DOM.
>   This can improve UI performance, especially in complex  applications.

Simple Analogy

Think of the Virtual DOM as a draft copy of a document:

    You make edits on the draft.
    Compare it with the previous version.
    Apply only the differences to the final document.


### React Fiber
>   React Fiber is the reconciliation engine of React.
>   It was introduced in React 16.
>   Its main purpose is to make React's rendering process more efficient and responsive.
>   Fiber breaks rendering work into small units of work.
>   React can pause, continue, prioritize, or discard work when needed.
>   It helps React handle large and complex UI updates smoothly.
>   Fiber works with the Virtual DOM during reconciliation.
>   It determines what needs to change in the UI.
>   It also determines the priority of different updates.
>   High-priority work, such as user interactions, can be handled before lower-priority rendering work.

Simple Flow
                State / Props Change
                        ↓
                Virtual DOM
                        ↓
                React Fiber
                        ↓
                Reconciliation
                        ↓
                Find what changed
                        ↓
                    Real DOM


        Virtual DOM             vs           Fiber

        In-memory representation of UI   
                                        React's reconciliation architecture
        
        Represents the UI structure	
                                        Manages rendering/reconciliation work
        
        Helps compare UI changes	
                                        Decides how and when work is performed
        
        Used for efficient updates	
                                        Enables prioritization and interruptible work
        

        ###
        React Fiber is React's reconciliation architecture that breaks rendering work into small units, allowing React to prioritize and efficiently process UI updates.

>Virtual DOM batata hai "kya change hua?"
>Fiber manage karta hai "ye change kaam kab aur kaise process karna hai?"

>> Reconciliation is the process in React where the new Virtual DOM is compared with the previous Virtual DOM to identify what has changed, and React updates only the necessary parts of the Real DOM.

### React componets , elemnts , Instance :
>  A React component is a function or class that defines UI, 
>  A  React element is the object/description created from JSX that tells React what to render, and 
> An instance refers to a particular rendered occurrence of a component and its associated state.


Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

### Rendering 
 React calls your function component to figure out what the user interface (UI) should look like. Put simply, rendering is React "thinking" and calculating the blueprint of your UI based on current props and state. 

It is a common misconception that rendering means painting pixels on the screen. In reality, rendering is just the preparation phase before any actual visual changes happen


The key points are:

> In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
> Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
> A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

