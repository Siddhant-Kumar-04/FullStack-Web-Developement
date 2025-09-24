#### **Welcome to JS**



JavaScript is a programming language. JS has got decision making capabilities. JS is high level programming language. It means that we can interact with JS with a very human readable and understandable code



Previously JS was said to be Eqma Script.



#### **Keywords in JS**



Keywords are reserved words that JS aur any programming language uses for its own purpose. These Keywords serve a special Purpose in the Programming language and should not be used for anything else



**Example:**

let,var,const,for,while, return , if ect, are keywords in javascript.



#### **Variable in JS**



Whenever we write some code, we might need to store some values inside the memory (RAM).

To store these values we can create buckets in the memory that holds these values. These buckets are called as Variable. Variable can be created in the Memory to store some data value.



**How can we create Variable in JS , we have 3 dedicated**



**keywords: let, var \& const. Using these 3 Keywords we can create a variable.**







**let movieName = "Deadpool vs wolvorine";**

**var movieDiscription = "The new Wolvorien saga";**

**const moviePrice = 300;**



Here we can see we have created 3 variable. The syntax works as follows:

* We first put the let var or const keyword and put a space after it. this indicates JS that we probably want to create a variable.
* After the space we give the variable name.
* Then we put an equal symbol denoting that we want to assign a value on the RHS of equal to the variable
* Then on the RHS of equal, we write the value we expect to get stored in the variable.
* Here 300 is a numbers and Deadpool's vs Wolverine is a text. To create a text value, we just write the text and wrap it in a pair of double quotes



#### **What is variable name?**



Every variable bucket created in the memory is allocated a unique name using which we can refer the bucket and store some value, update some value or fetch some value from the bucket This label is called as variable name



#### **Note:**

If we put a dedicated value inside a variable using the equals symbols, then that value is assigned to the variable. But if we just give the variable name and don't assign a value to it, then JS will automatically assign it a value **Undefined.**



The first case is referred as variable definition because we define the value stored in the variable also and the second one is called as variable variable declaration because we just declared the variable but didn't assign it we can update its value by just reassigning something using equal symbol.



**let x=10;**

**x=11;**



Here the value of x was 10 initially now it has been later updated to 11.



**Updating Values in a Variable:**



**const:**

We cannot update a variable initialised by const. const doesn't allow any/ reassignment or updates. If we try to do it and run the code, it will lead to an error.



**let:**

if we have created a variable using **let** or **var we can** update its value by just reassigning something using equals symbols



**let x=10;**

**x=11;**



#### **Rules to put variable names:**

* variable names must start with a letter or a underscore or the dollar sign ($)

	**let $moviename="Deadpool"**

	**let \_moviePrice=600**

	**let movieDate="24 Aug"**

* Variable names cannot start with a number 
* 
**&nbsp;	let 4data=10;**

* The above code is invalid

1. Variable names are case sensitive so that means if we have a variable with name movieName or moviename or MOVIENAME ext all these variable will be considered different.
2. Varibale names should not have any special character apart from underscore or any number aur dollar.That means we cannot use space, tap,hyphen etc in the variable name.



	**let x$y=10  //This is Valid Variable**

	**let x-y=99 //This is invalid variable**



**3.** Variable names cannot be a keyword. For Example: We cannot make a variable with name **if ,else, for** etc as these are keywords.



**4.** Two different variable should not have same name.





#### **Recommendation for putting a variable name:**



Generally in JS, we create a variable name is camelCase i.e. If the variable name has two individual words or more combines , then the first word is all small characters and then subsequent words have first character capital.



	**let movieName="Deadpool"**



Here the movieName variable has two individual words; movie and name. So movie is all Small and name has N Capital.



	**let price=100;**



Here price is also considered as a camel case it's just that it has only one word.



#### **Comments in JavaScript**



Comments are extra piece of notes that we can write along with out code so that, if anyone is reading that code, they can understand what is going on in the code. Interesting these notes will be completely avoiding when JS will execute the code.



They are not going to serve any other purpose except providing annotations for the code.



**How can we create a comment ?**



In Js we can create comments by the following two ways:

* **Single Line Comment:**We can write **//** and then in that line we can write any random text and this text will be considered as comment. With **//** we can only write comment in a single line. If we have to move to a new line while writing comments either in the new line we again put  // or we use multiline comment



&nbsp;	Example:

&nbsp;	let movieName:"Deadpool vs Wol" //This is the movie 	name

&nbsp;	

&nbsp;	var movieDesc="The new wolverine saga";

* **Multiline Comment:** If we desire to write comments that go in multiple line then instead of // we can use /\*\*/. with this new symbol even if we go to a new line then we don't have manually put this as a comment and this new line will be automatically part of the comment





Example:

 	/\* let movieName:"Deadpool vs Wol" This is the 	movie 	name

 

 	var movieDesc="The new wolverine saga"; \*/



So, Here/\* starts the multiline comment and \*/ ends it.

















