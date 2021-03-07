# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable in Ruby is like a copy of another variable. It is one instance of many possible instances that can, for example, be created from a class.  

  Researched answer: The instance variable begins with @ symbol, and is used to give objects their own private space to store data. 

https://www.rubyguides.com/2019/07/ruby-instance-variables/


2. What is a block in Ruby?

  Your answer: A block in Ruby is an expression used to determine a certain outcome. It is like an anonymous function that is written to figure out a specific outcome, like with a conditional or for loop. 

  Researched answer: Chunks of code either between curly braces or do/end. Thay can have multiple arguments.

  http://ruby-for-beginners.rubymonstas.org/blocks.html



3. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return means that the return key word is not crucial in the writing of a program, the indentations Ruby uses, creates the implicit return, the last line is the implicit return.

  Researched answer: When there is no return keyword in a program, Ruby returns the last line of code in the program automatically. 


  https://medium.com/rubycademy/the-return-keyword-in-ruby-df0a7f578fcb#:~:text=passed%20as%20argument.-,Implicit%20return,the%20method%20logically%20returns%2042%20.


4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming is a type of programming that allows for the creation, reusing, storing, and morphing of data. It has such an environment that allows for the alteration of code in one area of a program that does not carry an effect in another area of a program.

  Researched answer: OOP is a programming paradigm based on the concept of objects. They can contain anything from data to procedures or both. The great thing about OOP is how mutable, reusable, and simple it can transform code to be as opposed to procedural or structual programmming. OOP is better organized and because of that, objects can be accessed and modified without other objects being affected by any certain changes. 
  4 main concepts:
  1. Encapsulation - objects can keep their properties and methods private within classes. No other objects can access the properties in a class unless specifically specified. The properties and methods can be accessed and called whenever the class wants, and nothing else would be affected by this since it would be a private change (encapsulated). 
  2. Abstraction - the magic behind what is happening. Under the hood the code is doing what we tell it to do but we dont know exactly how it is happening, we just know that it is doing its job. It holds so much information we would want to access at some point, and allows us to do so whenever we'd like. 
  3. Inheritance - creating new code or objects using the same principles used in another object. Helps us reuse code and avoid redundencies. Classes are best examples of this, we can inherit certain traits from a class we already have, and make another one to build off of, without having to rewrite the same exact code, we would just reference the already written code. 
  4. Polymorphism - technique that allows you to get rid of long if/else or switch/case statements. You can call a parent method on multiple child classes, and have that parent method work specifically for each class that was called, this is not a universal functionality, but a tailored one for the specific classes. 

https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/



5. What is the difference between a class and an object?

  Your answer: A class is a blueprint for creating an object. An object can be anything that carries value in programming. An object can be used, reused, morphed, and stored. 

  Researched answer: class is a template for an object. An object is an instance (or member) of a class. A class can store both data and methods as a single unit which aids in avoiding repetition. 

  https://www.w3schools.in/java-questions-answers/difference-between-classes-objects/#:~:text=A%20class%20is%20a%20blueprint,a%20variable%20of%20the%20class.



6. STRETCH: What is `attr_accessor`?

  Your answer: The attr_accessor in Ruby is used to access the attributes of an object without having to feed them into the initialization of the object.

  Researched answer: The attr_accessor allows for variables within a class to be accessed outside of the class. The private variables are seen as public and are avaialble to be used. 

  https://stackoverflow.com/questions/4370960/what-is-attr-accessor-in-ruby



## Looking Ahead: Terms for Next Week
- MVC - stands for model view controller and is a pattern of separating an application into three main components. Each   of these components are built to handle specific development aspects of an application. 

  - Model : (data) corresponds to all data-related logic that the user works with. 

  - View : (user interface) used for all the user intferface logic of the application

  - Controller : (processes that handle input) acts as an interface between the Model and View components. It  processes all the model information, so it processes all the data-related logic, manipulates the data depending on the model updates, and interacts with the view information to render a final output. 

  https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm

- PostgreSQL - open source rational database management system emphasizing extensibility and SQL compliance. Successor to the Ingres database deveoped at UCSB. Used for scaling and storing the most complicated data workloads.

  https://www.guru99.com/introduction-postgresql.html

- API - application programming interface. A computing interface that defines interactions between multiple software or mixed hardware-software intermediaries. It allows two applications to talk to each other. It is what allows the user perform certain online actions. It is the messenger that delivers the users request to the provider that the user is requesting it from and then delivers the response back to the user. 

  https://blogs.mulesoft.com/learn-apis/api-led-connectivity/what-are-apis-how-do-apis-work/

- CRUD - create, read, update, delete. These are the four basic operations of persistent storage. 

  https://en.wikipedia.org/wiki/Create,_read,_update_and_delete

- Ruby on Rails - server-side web application framework written in Ruby under the MIT License. It is a model-view-controller framework that provides default structures for database, a web service, and web pages. Great tool for app development, mainly because of its efficient code-writing and the shortened time used in app development. 

  https://codeinstitute.net/blog/ruby-rails-becoming-popular/

- ORM - stands for object-relational-mapper. It is a technique used for converting data between incompatible type systems using object-oriented-programming languages. This allows people to access objects rather than entire database tables. 

  https://medium.com/@hidace/an-overview-of-object-relational-mapping-3255fa26d51f

- Active Record - considered an architectural pattern for storing in-memory object data in relational databases. The interface of an object conforming to this pattern would include functions such as Insert, Update, and Delete, polus properties that correspond more or less directly to the columns in the underlying database table. It is the M in the MVC, which is the layer of the system responsible for representing business data and logic. 

  https://guides.rubyonrails.org/active_record_basics.html
