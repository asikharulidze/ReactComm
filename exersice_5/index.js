addInput = () => {
    const container = document.getElementById("input-container");
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control", "mt-2");
    container.appendChild(input);
  }

  convertToJson = () => {
      const inputs = document.querySelectorAll('#input-container input');
      let values = [];
      inputs.forEach(function(input, index) {
          values.push(input.value);
      });
      let jsonString = JSON.stringify(values);

      document.getElementById("output-container").append(jsonString);
      console.log(jsonString); 

  }