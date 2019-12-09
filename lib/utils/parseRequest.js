module.exports = parseRequest = (rawRequest) => {
  const splitRequest = rawRequest.split(' ');

  return {
    method: splitRequest[0],
    path: splitRequest[1]
  };

};
