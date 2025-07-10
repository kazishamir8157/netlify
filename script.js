fetch("index.php")
  .then(res => res.text())
  .then(data => {
    document.getElementById("output").value = data;
  });