**Q1. Explain how to build stateful class components.**
- This is long but I go by "CC-SS-RR": 

  1. **C**: Create the class component
    ```
        class ExampleComponent extends React.Component {}
    ```

  2. **C**: Create the constructor and pass in props if the container accepts values from the parent container:
    ```
        class ExampleComponent extends React.Component {
          constructor(props) {}
        }
    ```

  3. **SS**: Add the super and state in the constructor
  ```
        class ExampleComponent extends React.Component {
          constructor(props) {
            super(props)
            this.state = {
              stateOne: '',
              stateTwo: []
            }
          }
        }
  ```

  4. **RR**: Render and Return
  ```
        class ExampleComponent extends React.Component {
          constructor(props) {
            super(props)
            this.state = {
              stateOne: '',
              stateTwo: []
            }
          }
          render() {
            return ()
          }
        }
  ```

**Q2. Describe the different phases of the component lifecycle.**

  Mounting: Mounting is when the component prepares everything required such as state and renders for the first time. Methods available during this lifecycle are: _componentWillMount_ and _componentDidMount_.

  Updating: Updating is when a change has been made to the state which re-renders the component. Some methods available during this lifecycle are: _shouldComponentUpdate_ (deprecated),  _componentWillUpdate_, and _componentWillUpdate_.

  Unmounting: This is where the component gets removed from the DOM. A method available for this phase of the lifecycle is _componentWillUnmount_.


**Q3. Demonstrate an understanding of class component lifecycle methods.**

Component lifecycle methods are pretty much the birth-action-death (oof, so dark) of how a component behaves. I think I pretty much described this in detail and this question an unnecessary repeat... like, how do I describe this any better than what I just did in question 2? The component, a piece of a React application, prepares all elements, renders them, looks for any changes, and end (or stay idle?) when everything has rendered properly. This question is annoying.

But to add further into this in case I am misunderstanding this question, they are a series of events that happens from the birth to the death of a component. 


**Q4. Define stateful logic.**

A stateful logic is a reusable piece of code that interacts or modifies the state --> A custom hook for example.


**Q5. Describe how to test a React component with React Testing Library.**

You test a React component following the Arrange, Act, and Assert concept. You first arrange what you would need such as rendering a form component, setting a variable for expected values, and making sure to grab every necessary element in the form. Then you act on it by firing events or filling out the input and confirming that everything matches or runs as it's supposed to. 
