const createResponse = (obj) => {
  return ` HTTP/1.1 ${obj.status}\nAccept-Ranges: bytes\nContent-Length: ${obj.body.length}\nContent-Type: ${obj.contentType}\n\n${obj.body} `.trim();
};

module.exports = createResponse;
