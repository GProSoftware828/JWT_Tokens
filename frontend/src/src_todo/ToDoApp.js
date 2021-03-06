import React from 'react';
import UniqueId from 'react-html-id';
import { ToDo } from './ToDo/ToDo';
import { Completed } from './Completed/Completed';
import './App.css';
import Plus from './assets/graphics/Plus.svg';

export class App extends React.Component {
  constructor(props) {
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      todos: [
        { title: 'note one', id: '231r' },
        { title: 'note two', id: 'efef' },
        { title: 'note three', id: 'sd09s' }
      ],
      message: '',
      completed: [
        { title: '1', id: 'grhwg' },
        { title: '2', id: '9joi' }
      ],
      showForm: false,
      showCompleted: false
    };
  }

  addItem(e) {
    e.preventDefault();
    const { todos } = this.state;
    const newItem = { title: this.newItem.value, id: this.nextUniqueId() };

    const isOnTheList = todos.includes(newItem);

    if (isOnTheList) {
      this.setState({
        message: 'This To-do is already on the list.'
      });
    } else {
      newItem !== '' &&
        this.setState({
          todos: [...this.state.todos, newItem],
          message: ''
        });
    }
    this.addForm.reset();
  }

  completedItem(item) {
    const newTodos = this.state.todos.filter(todo => {
      return todo !== item;
    });
    this.setState({
      completed: [...this.state.completed, item],
      message: 'Added to completed list',
      todos: [...newTodos]
    });
  }

  removeItem(item) {
    const newTodos = this.state.completed.filter(todo => {
      return todo !== item;
    });
    this.setState({
      completed: [...newTodos]
    });
  }

  toggleInputHandler = () => {
    const doesShow = this.state.showForm;
    this.setState({ showForm: !doesShow });
  };

  toggleCompletedHandler = () => {
    const doesShow = this.state.showCompleted;
    this.setState({ showCompleted: !doesShow });
  };

  render() {
    const { todos, showForm, showCompleted, completed } = this.state;
    return (
      <div>
        <div className="header">
          <h1 className="banner">Your To-Do's</h1>

          <img
            src={Plus}
            alt="plus_clickme_show_input_form"
            onClick={this.toggleInputHandler}
            className="plus"
          />

          {showForm === true ? (
            <div className="inputForm">
              <form
                ref={input => (this.addForm = input)}
                onSubmit={e => {
                  this.addItem(e);
                }}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Type To-do Here"
                    id="newItemInput"
                    ref={input => (this.newItem = input)}
                    className="input"
                  />
                  <br />
                  <br />
                  <button className="button" type="submit">
                    Add
                  </button>
                  <br />
                  <br />
                </div>
              </form>
            </div>
          ) : null}
        </div>

        <div className="block">
          <table>
            <tbody>
              <tr>
                <td>
                  {todos.map(item => (
                    <ToDo
                      click={() => this.completedItem(item)}
                      title={item.title}
                      key={item.id}
                    />
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="completedBtn"
            onClick={this.toggleCompletedHandler}
          >
            Show Completed
          </button>
          {showCompleted === true ? (
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      {completed.map(item => (
                        <Completed
                          click={() => this.removeItem(item)}
                          title={item.title}
                          key={item.id}
                        />
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
