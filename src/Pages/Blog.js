import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <>
            <div className="container">
                <div className="container my-3">
                    <h1 className='text-3xl font-bold mb-6'>What are the different ways to manage a state in a React application? </h1>
                    <p>
                        There are many ways to manage state in a React application, but some of the most popular methods include using a state management library like Redux or MobX, or using React's built-in setState method.
                    </p>
                    <p>Redux is a popular state management library that helps you manage state in a React application by providing a central store that can be used by all components in the application.MobX is another popular state management library that helps you manage state by providing an observable store that components can subscribe to.</p>

                    <p>React's built-in setState method is also a popular way to manage state in a React application. This method allows you to update the state of a component without having to re-render the entire component.</p>

                    <p>There are many other ways to manage state in a React application, but these are some of the most popular methods.</p>
                </div>

                <div className="container">
                    <h1 className="text-3xl font-bold b-6">
                        How does prototypical inheritance work?? write a article about it
                    </h1>
                    <p>When it comes to inheritance, the most common type is prototypical inheritance. This is where one object inherits from another. The way this works is that the first object is created, and then the second object is created using the first object as a prototype. This means that the second object will have all of the same properties and methods as the first object.</p>
                    <p>There are a few different ways that prototypical inheritance can be used. One way is to create a base object that contains all of the shared properties and methods, and then have each individual object inherit from that base object. This is a good way to keep your code organized and easy to understand.</p>
                    <p> Another way to use prototypical inheritance is to create a mixin. A mixin is an object that contains a bunch of shared methods and properties, but doesnt actually inherit from anything. Instead, other objects can choose to inherit from the mixin, and they will get all of the shared methods and properties.</p>
                    <p>Mixins are a great way to reuse code, and they can make your code a lot more DRY (don’t repeat yourself).Finally, you can also use prototypical inheritance to create an object that inherits from multiple other objects.</p>
                </div>

                <div className="container">
                    <h1 className="text-3xl font-bold b-6">
                        What is a unit test? Why should we write unit tests in react ??
                    </h1>
                    <p>Unit testing is a level of software testing where individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use.</p>
                    <p>Unit testing is often done by the programmer who writes the code, to ensure that the code works as expected. Other times, unit tests are done by a separate team of testers, to ensure that the code meets the requirements.</p>
                </div>

                <div className="container">
                    <h1 className="text-3xl font-bold b-6">React vs. Angular vs. Vue</h1>
                    <p>React is a JavaScript library for building user interfaces. It lets you create reusable components so that your code is easy to read and maintain.
                    </p>
                    <p>Angular is a JavaScript framework for building web applications. It lets you use HTML as your template language and extend HTML's syntax to express your application's components clearly and succinctly.</p>
                    <p>Vue is a JavaScript framework for building user interfaces. It lets you create reusable components so that your code is easy to read and maintain.</p>
                </div>


            </div>
        </>
    );
};

export default Blog;