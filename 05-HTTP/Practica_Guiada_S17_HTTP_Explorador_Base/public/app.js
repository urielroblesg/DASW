const method = document.querySelector("#method");
const path = document.querySelector("#path");
const body = document.querySelector("#body");
const output = document.querySelector("#output");
const send = document.querySelector("#send");

const ejecutarSolicitud = async () => {
  output.textContent = "Enviando...";

  // TODO PG7: crea options con method y headers Accept y Content-Type.
  const options = {
    method: method.value,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Authorization' : 'Bearer aula-http'
    },
  };

  // TODO PG8: agrega body sólo para POST, PUT o PATCH.
  const metodosConBody = ["POST", "PUT", "PATCH"];
  if (metodosConBody.includes(method.value)) {
    options.body = body.value;
  }
  try {
    const response = await fetch(path.value.trim(), options);
    const contentType = response.headers.get("content-type") ?? "";
    const data =
      response.status === 204
        ? "(sin cuerpo)"
        : contentType.includes("application/json")
          ? await response.json()
          : await response.text();

    output.textContent = JSON.stringify(
      {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        contentType,
        data,
      },
      null,
      2,
    );
  } catch (error) {
    output.textContent = `Error de red: ${error.message}`;
  }
};

send.addEventListener("click", ejecutarSolicitud);
