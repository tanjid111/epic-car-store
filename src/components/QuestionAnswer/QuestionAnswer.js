import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = (props) => {
    return (
        <div className='question-answer'>
            <h1>How React works?</h1>
            <p>React is JS library that renders components which is the user interface.
                With reach we build bunch of independent and isolated reusable components which are then combined to build complex applications.
                There is always at least one root component which contains other child components. It is basically a tree of components.
                Usually, the components are divided into nav bar, header, footer, and other meaningful names.
                React keeps virtual DOM in the memory, whenever there is a change in state it compares this new react element and its children to the previous one.
                It figures out what has been changed and updates the real dom.</p>
            <h1>Difference between State and Props</h1>
            <p>State is inside of a component and can be updated inside. Props is passed into a component whereas state is handled inside of that component.
                Therefore, props is handled outside of the component and must be updated outside.
                When a state is changed, it is going to re- render that section of the application whereas props cannot be changed like that.
                Usually states stored somewhere else in the application gets passed down as props.
                Some components never really change states at all, all it does is renders a text which is never going to change.
                It just takes the props and displays it.</p>
        </div>
    );
};

export default QuestionAnswer;