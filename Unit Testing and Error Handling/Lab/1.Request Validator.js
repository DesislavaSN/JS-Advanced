function requestValidator(obj) {
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const uriRegExp = /^[\w.]+$/gm;
  const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const messageRegExp = /^[^<>\\&\'\"]+$/gm;

  //   console.log(methods.includes(obj.method));
  
  if (!(obj.method !== undefined && methods.includes(obj.method))) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!(obj.uri !== undefined && (obj.uri == "*" || uriRegExp.test(obj.uri)))) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!(obj.version !== undefined && versions.includes(obj.version))) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (
    !(
      obj.message !== undefined &&
      (obj.message == "" || messageRegExp.test(obj.message))
    )
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return obj;
}

console.log(
  requestValidator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
); // all is valid and return the same object

console.log(requestValidator({
  method: "OPTIONS",
  uri: "git.master",
  version: "HTTP/1.1",
  message: "-recursive",
})); // Invalid request header: Invalid Method

console.log(
  requestValidator({
    method: "POST",
    uri: "home.bash",
    message: "rm -rf /*",
  })
); // Invalid request header: Invalid Version
