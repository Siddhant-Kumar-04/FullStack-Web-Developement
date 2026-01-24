Lets Discuss the Project Structure



1)package.json:



This is indeed the most important file of the whole project,why?It contains metadata about your project.It tells important details of the project like name of the project,version of the project(self configuarartion), It also tells the dependencies on which our project has,apart form that a couple of scripts are mentioned which are designated to do a particular job.

For example: `dev` script written is executed when we execute `npm run dev`.



2)node\_modules: This folder contains the downloaded dependency codes.

For example: we have eslint,react as dependency of the project so we need to download them, so node\_modules folder is the place where we download them.



node\_modules is a folder that contains all the dependencies required by the project. When we install packages such as React or ESLint using npm, their source code (along with their dependent packages) is downloaded and stored inside the node\_modules folder. This folder is used by Node.js to resolve and load project dependencies.



3)package-lock.json: Now the dependencies we install also have inner dependencies,so this file keeps the version details of all the dependencies and inner dependency.So if we loose `nodemodules` we can download the same version of everything because of `package-lock.json`



4)gitignore: This file contains all the files and folder we don't want to upload on GitHub once we upload the project on gitHub.



5\) eslintrc:This file keeps the eslint configuration.

6)vite.config.js: This file keeps the vite configuration

7)public:Any static file like,pdf,images etc goes here.

8)src:Your actual react code is present.



**JSX**



**JSX** is an extenstion to XML, that's why the syntax of JSX looks extremely  similar to XML and HTML (HTML is also a derivative of XML only). Meta prepared JSX for making the UI implementation more easy.because using plain JS functions that react and other technologies provide can make the code unreadable. And with JSX, .because it is very HTML like syntax it becomes easy.



Featured of JSX.

1)Looks and feels like HTML

2\) Has some minor differnces compared to HTML

3)Writing complex UI logic is easy with JSX

4)Gets easy embedded with any JS code as well i.e in the same file we can write JS and JSX together.



Meta didn't intent to get JSX compatibility added in the browser or in emcaScript but they intend that there should be a layer of transpilation that can convert JSX to normal JavaScript code.



**Example code for JSX:**

```JSX

var dropdown =

 <Dropdown>

   A dropdown list

   <Menu>

     <MenuItem>Do Something< MenuItem>

    <MenuItem>Do Something Fun!< MenuItem>

     <MenuItem>Do Something Else< MenuItem>
   < Menu>

 < Dropdown>;

render(dropdown);

```





**Transpilation.**



Transpilation in the process of converting source code from one high-level programming language to another.



We can use transpilors like babel to convert JSX to compartible JavaScript

Example: Tools

1)Babel

2)Esbuild



Note:

To use JSX in your code base, we need to make a file file `.jsx` extentions



**Components**



As we know that components are reusable UI elements. And in normal programming functions help use to put are useable piece of code at one place.

Now In a react code base if we have a function that returns some kind of JSX we will call that component or more specifically a functional component. Why a functional component? Because this components has been made using functions.

Is there any other way to make components? Yes , we can make class components also.



**Funtional Component**



Writing functional component is easy, we use the function keyword and then name the function. Name of the function is technically name of the components.This component must return a some kind of JSX.



Now we know how to define it. But how to call it?



**Calling a component.**

Components are function and we call function like this:



```JS

App(''');

```

But because we are using JSX, it provides an alternative JSX compatible way to call out functional component.



```JSX

< App>

```

The above JSX syntax calls the app components



**Note:**

Name of the component should start with a Capital letter.The custom component must be in pascalCase and inBuilt HTML. element based Component like div,h1,h2 ect. should be in lowercase.



**Example:**

The below code will not work.

function App() {

  return (

    <div>

      <h1>Hello, React!< h1>

      <customComponets  >

      <customComponets  >

      <customComponets  >

      <customComponets  >

      <customComponets  >

    < div>

  )

}

export default App;



**We will get a following error in the browser:**

**```**

**react-dom-client.development.js:12609  <customComponets  > is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.**



**```**



**How to Setup Tailwind with Vite React Project.**



1. Setup a new vite project **npm create vite@latest my-project**
2. 

\*\* cd my-project\*\*

**2**.Install Tailwind CSS

**npm install tailwindcss @tailwindcss vite**

\*\*3.\*\*configure the Vite Plugin in Vite.config.ts

\*\*Add the @tailwindcss vite plugin to your Vite configuration.\*\*



``**`vite.config.ts**

**import { defineConfig } from 'vite'**

**import tailwindcss from '@tailwindcss vite'**

**export default defineConfig({**

**plugins: \[**

    \*\*tailwindcss(),\*\*



**],**

**})**

```

4.Import Tailwind CSS in index.css file
Add an @import to your CSS file that imports Tailwind CSS.

@import "tailwindcss";


5. And That's it, tailwind is ready to use
6.Now to use tailwindcss in any component we need to add tailwindcss. But JSX is as part of JS, hense we cannot use class keyword in JSX syntax to mimic attribute class. So, in JSX instead of class we write className attribute to html elements components



\\\*\\\*More Details on JSX\\\*\\\*


In a JSX based components, if we have a single JSX to be returned, then that directly done, but for a multiline component, we need to wrap the JSX in a pair of parenthesis the  return it.

\\\*\\\*JSX\\\*\\\*
function Button() {

 return (

<button>

 Click Me 

 < button>

   )

}

export default Button;




In a JSX component , there should be only one parent HTML element returned , i.e we can only return one single element from a JSX component, if we want to return multiple element then we need to wrap those multiple elements in a single parent elements.

The below code will not work as it is returning multiple elements:

```JSX
function Button() {
return (
<button>
Click Me
< button>
<p>Hello Paragrapgh< p> 
 )                          
}
export default Button;
 
But if we wrap the button and p tag in a common parent and then return it , it will work.


```JSX 
function Button() {
return (         
<div>  
<button> 
Click Me
< button>          
<p>Hello Paragrapgh</ p> 
< /div>
)  
}

export default Button;  
 
\\\*\\\*React Fragments\\\*\\\*

Because of the constraint that we can only return a single parent  from JSX, we end up adding more wrapper elements on the UI , which might not be required. For example the div wrapping button and p tag is an extra elements. For very Complex UI, there can be many many components, and if each component returns something irrelevant then we  have a lot of non required elements.

To stop this we can use react fragment,fragments can be used to wrap the elements in a single parent, without adding any extra elements on the html.



How to create a fragment.?       
To create a fragment the simplest way is to write empty opening and closing tags.


```JSX
function Button(){

return (

<>

<button>Hello This is a button< button>

<p>This is a pragaraph tag< p>

< >

)

Another way to add react fragment is to use React.Fragment component.


```JSX    
function Button(){

return (

<React.Fragment>

<button>Hello This is a button< button>

<p>This is a pragaraph tag< p>

<React.Fragment >

)

And with any one of the two used, we will still get no extra wrapper elements on the UI,
---



#### \\\*\\\*JSX curlies\\\*\\\*



In JSX we can write some JS, which will be evaluated on the runtime and the returned value is showed on the UI. To do this we have to wrap our JS expression in a pair of curlybraes called as JSX cirlies



```JSX

function Button(){

return(

<>

{10\\\\\\\*3}

</>

)

```

This is going to show 30 on the UI because thats the return value after evalutaing 10\*3



#### **How to make functional components more alive?**



Currently our components have some static UI, they are not expecting any input .But in real function we have the logic confined and then we pass some input which is processed on the functions and we get an output.



To pass some input to our components which they can consume we use something called as props



```JSX

function InputCom({ type, value, placeholder} ) {

   return (

       <input type={type} value={value} placeholder={placeholder} />

   )

}



export default InputCom;



```



So, here in the button component, we have destructured the props object and fetched text and button type props. we can use these props by wrapping them in JSX curlies as they need to be evaluated during  runtime.



If we don't want to destructured the props, then we can expect a props object directly as parameter and then use properties inside it.



```JSX

function InputCom(props) {

   return (

       <input type={props.Buttontype} value={props.value} placeholder={props.placeholder} />

   )

}
export default InputCom;
```

But how do we pass the values of these props? We can pass the values from the call site of component in the form of 'key=value' format which is very similar to that of HTML attributes but with just JSX



```App.JSX call site

\\\&nbsp;<InputCom type="text" value="" placeholder="Enter Text Here" />

```



So here text prop gets text value and placeholder prop gets a Enter a Text Value



#### **States in React**



**What is a React Hook?**



In your react codebase, you will find a lot of function which are serving a specific purpose.The function can inbuilt i.e provided by react or you can make a custom one as well.These are called as react hooks.



Example:

1)useState

2)useEffect

3)useId

4)and more....



Generally react hooks have some one or more following properties.

1)Adding state to a component

2)Reuseable UI logic is mentioned in these

3)They might control components lifecycle



Most of the react hooks,starts with the prefix `use` but its not mandatory.You can make your own react hook,without use as the prefix.



**What is state?**



States are memory of a component, which is tightly coupled with the component behavior.



To update value of state varaible. we cannot just use plain JS code instead there are special setter function which we need to use to update the state variable. If we don't use seter function to update the state's value then we will not see any impact on the UI layer.



State variable are very special, any change in the state variable will cause changes in the UI. How We will talk it about later.



To make a state in react, we have a special hook called as useState.So , useState is a hook and using this we will be able to get a state variable inside the component. This function takes one argument i.e initial  value of state varaible.



The useState hook return us a 2 length array which has the following:

1)The first element is the state of variable we wanted to create.

2)The second element is the setter function to update the value of the state varaible.



**```JSX**

function CustomComponent() {

    const \[x, setX] = React.useState(10); //useState Hooks

    return (

        <>

            <button onClick={() => {

                        setX(x + 1);

                console.log("Button Clicked");

            }} className="bg-blue-600"> Click Me</button>

            <h1>Counting....{x}</h1>

 

        </>

    )

}

**```**

