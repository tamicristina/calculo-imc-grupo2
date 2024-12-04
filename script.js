document.getElementById("imc-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = JSON.stringify({
      height: parseFloat(document.getElementById("altura").value),
      weight: parseFloat(document.getElementById("peso").value)
    });
  
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/imc/calculate", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => xhr.status === 200 
      ? document.getElementById("resultado").textContent = `IMC: ${JSON.parse(xhr.responseText).imc.toFixed(2)} - ${JSON.parse(xhr.responseText).imcDescription}` 
      : document.getElementById("resultado").textContent = "Erro na requisição.";
    xhr.send(data);
  });
  