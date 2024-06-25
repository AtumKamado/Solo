document
        .getElementById("opcoes")
        .addEventListener("change", function () {
          var camposPredio = document.getElementById("numero");
          if (this.value === "predio") {
            camposPredio.classList.remove("invisivel");
            camposPredio.classList.add("visivel");
          } else {
            camposPredio.classList.remove("visivel");
            camposPredio.classList.add("invisivel");
          }
        });