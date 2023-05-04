let promise = new Promise((resolve, reject) => {
    const person = {
      name: "USER1",
      number: 235413637,
      age: 23,
      status: "online",
      sallary: "3000$",
      plaseOfBirth: "Kyrgyzstan",
    };
    setTimeout(() => {
      console.log("Json Data is ready...");
      const jsonData = JSON.stringify(person);
      console.log(person, jsonData);
      resolve(jsonData);
      reject(() => {
        console.log("error");
      });
    }, 2000);
  });
  
  promise
    .then((jsonData) => {
      setTimeout(() => {
        console.log("Parsed data is ready...");
        const JsonParsed = JSON.parse(jsonData);
        console.log(JsonParsed);
        console.log("loading end");
      }, 3000);
    })
    .catch(() => {
      console.log("error");
    });