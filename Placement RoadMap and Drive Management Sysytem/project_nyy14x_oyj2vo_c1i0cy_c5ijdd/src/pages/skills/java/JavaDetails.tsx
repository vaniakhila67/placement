// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const JavaDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="col-span-2">
//           <div className="mb-8">
//             <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//               <ArrowLeft className="h-4 w-4 mr-1" />
//               Back to Technical Skills
//             </Link>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">Java Programming</h1>
          
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//             <p className="text-gray-700 mb-6">
//               Java is a versatile, object-oriented programming language known for its platform independence and robustness.
//               It's widely used for enterprise applications, Android development, and more.
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Java from Scratch</h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//               <li><strong>Start with the Basics:</strong> Understand fundamental concepts like variables, data types, operators, and control structures.</li>
//               <li><strong>Learn Object-Oriented Programming (OOP):</strong> Grasp the principles of classes, objects, inheritance, and polymorphism.</li>
//               <li><strong>Explore Collections Framework:</strong> Familiarize yourself with lists, sets, maps, and other data structures.</li>
//               <li><strong>Understand Multithreading:</strong> Learn how to create and manage threads for concurrent programming.</li>
//               <li><strong>Explore Spring Boot:</strong> Learn to use Spring Boot for building web applications and microservices.</li>
//               <li><strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.</li>
//               <li><strong>Build Projects:</strong> Apply your knowledge by creating small projects to solidify your understanding.</li>
//             </ul>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
//             <p className="text-gray-700 mb-6">
//               <a href="https://example.com/handwritten-notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here to access Handwritten Notes</a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
//             <p className="text-gray-700 mb-6">
//               <a href="https://example.com/print-notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here to access Print Notes</a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://leetcode.com/problems/hello-world/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Write a program to print "Hello, World!"</a></li>
//                   <li><a href="https://leetcode.com/problems/factorial/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Calculate the factorial of a number</a></li>
//                   <li><a href="https://leetcode.com/problems/even-or-odd/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Check if a number is even or odd</a></li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://www.geeksforgeeks.org/queue-using-array/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a queue using an array</a></li>
//                   <li><a href="https://leetcode.com/problems/reverse-string/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Reverse a string using recursion</a></li>
//                   <li><a href="https://www.codechef.com/problems/BUBBLESORT" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a bubble sort algorithm</a></li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://www.geeksforgeeks.org/binary-search-tree-set-1-insertion/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a binary search tree</a></li>
//                   <li><a href="https://www.geeksforgeeks.org/tower-of-hanoi/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Solve the Tower of Hanoi problem</a></li>
//                   <li><a href="https://www.hackerrank.com/domains/tutorials/10-days-of-concurrency" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a concurrent program using threads</a></li>
//                 </ul>
//               </div>
//             </div>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Beginner Java</h3>
//                 <p className="text-gray-700">
//                   <a href="https://www.youtube.com/playlist?list=PLQQyQWv0Xy_x1VgC7SKqYqOED8U8uUjeC" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Beginner Java Playlist</a>
//                 </p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Java</h3>
//                 <p className="text-gray-700">
//                   <a href="https://www.youtube.com/playlist?list=PLQQyQWv0Xy_xUMvI1Tr3huq1t-LN7aw68" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Advanced Java Playlist</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn</h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-700">
//             <li>
//               <strong>Variables and Data Types</strong>
//               <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                 <li>Primitive Data Types (int, char, etc.)</li>
//                 <li>Non-Primitive Data Types (String, Array)</li>
//                 <li>Type Conversion</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Control Flow Statements</strong>
//               <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                 <li>If-Else Statements</li>
//                 <li>Switch Case</li>
//                 <li>Loops (For, While, Do-While)</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Object-Oriented Programming (OOP)</strong>
//               <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                 <li>Classes and Objects</li>
//                 <li>Inheritance</li>
//                 <li>Polymorphism</li>
//                 <li>Encapsulation</li>
//                 <li>Abstraction</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Collections Framework</strong>
//               <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                 <li>List, Set, Map</li>
//                 <li>Queue and Stack</li>
//                 <li>Iterator Interface</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Multithreading</strong>
//               <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                 <li>Thread Class</li>
//                 <li>Runnable Interface</li>
//                 <li>Synchronization</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Java I/O</strong>
//               <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                 <li>File Handling</li>
//                 <li>Streams</li>
//                 <li>Serialization</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Exception Handling</strong>
//               <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                 <li>Try, Catch, Finally</li>
//                 <li>Throw, Throws</li>
//                 <li>Custom Exceptions</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Java 8 Features</strong>
//               <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                 <li>Lambda Expressions</li>
//                 <li>Streams API</li>
//                 <li>Default Methods in Interfaces</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Spring Boot Framework</strong>
//               <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                 <li>Setting Up Spring Boot</li>
//                 <li>RESTful Services</li>
//                 <li>Database Connectivity</li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JavaDetails;

// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const JavaDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Java Programming</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Java is a versatile, object-oriented programming language known for its platform independence and robustness.
            It's widely used for enterprise applications, Android development, and more.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Java from Scratch</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Start with the Basics:</strong> Understand fundamental concepts like variables, data types, operators, and control structures.
            </li>
            <li>
              <strong>Learn Object-Oriented Programming (OOP):</strong> Grasp the principles of classes, objects, inheritance, and polymorphism.
            </li>
            <li>
              <strong>Explore Collections Framework:</strong> Familiarize yourself with lists, sets, maps, and other data structures.
            </li>
             <li>
              <strong>Understand Multithreading:</strong> Learn how to create and manage threads for concurrent programming.
            </li>
            <li>
              <strong>Explore Spring Boot:</strong> Learn to use Spring Boot for building web applications and microservices.
            </li>
            <li>
              <strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.
            </li>
            <li>
              <strong>Build Projects:</strong> Apply your knowledge by creating small projects to solidify your understanding.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
          <p className="text-gray-700 mb-6">
            (Placeholder for handwritten notes - you can add links to images or PDFs here)
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
          <p className="text-gray-700 mb-6">
            (Placeholder for print notes - you can add links to PDFs or documents here)
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Write a program to print "Hello, World!"</li>
                <li>Calculate the factorial of a number</li>
                 <li>Check if a number is even or odd</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement a queue using an array</li>
                <li>Reverse a string using recursion</li>
                <li>Implement a bubble sort algorithm</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                 <li>Implement a binary search tree</li>
                <li>Solve the Tower of Hanoi problem</li>
                <li>Implement a concurrent program using threads</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Beginner Java</h3>
              <p className="text-gray-700">
                (Placeholder for beginner Java playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Java</h3>
               <p className="text-gray-700">
                (Placeholder for advanced Java playlist link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaDetails;