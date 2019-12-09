const parseRequest = (rawRequest) => {
  const getBodyRegex = /({.*})/g;
  const splitRequest = rawRequest.split(' ');

  if(rawRequest.match(getBodyRegex)) {
    return {
      method: splitRequest[0],
      path: splitRequest[1],
      body: rawRequest.match(getBodyRegex)[0]
    };
  } else {
    return {
      method: splitRequest[0],
      path: splitRequest[1]
    };
  }
};

module.exports = parseRequest;
