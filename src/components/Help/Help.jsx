import React from 'react';

class Help extends React.Component{
    render() {
        return (
            <>
             <h2>You need help</h2>
             <ul>
                 <li>On home page you can enter a URL or and API endpoint and select the request method you want. IF there is any information that have to go 
                 in the body add it in the body. Then click on go to see the results in the result area</li>
                 <li>
                     Your previous requests will be saved and rendered each time you visit the website. You can click on any of them
                     so you can fill the form automatically
                 </li>
                 <li>
                     You can go to the history page where you can click on one of your previous requests and see the results shown in the 
                     result section without hitting the api.
                 </li>
                 <li>
                     You can click on re-run which will redirect you to the main page where you can re-run your previous requests again
                 </li>
             </ul>
             </>
        );
    }
}

export default Help;