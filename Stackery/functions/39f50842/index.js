module.exports = async request => {

  let responseBody = `
    <html>
      <body>
        <p>Hello world!</p>
      </body>
    </html>
  `;

  // Build an HTTP response.
  let response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: responseBody
  };
  
  //returning a response to the GET endpoint will return a response to the user
  return response; 
};