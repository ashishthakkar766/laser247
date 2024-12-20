// @ts-check

(function () {
  const originalSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.send = function (body) {
    console.log("Original Request Body:", body);

    // Check if the body is JSON
    if (body && typeof body === "string" && body.startsWith("{")) {
      try {
        const parsedBody = JSON.parse(body);

        const mobileInputs = document.querySelectorAll(
          "#login-point___BV_modal_body_ input"
        );

        const desktopInputs = document.querySelectorAll(".login-box input");

        if (mobileInputs.length > 1 || desktopInputs.length > 1) {
          parsedBody.username =
            mobileInputs.length > 0
              ? mobileInputs[0].value
              : desktopInputs[0].value;
          parsedBody.password =
            mobileInputs.length > 0
              ? mobileInputs[1].value
              : desktopInputs[1].value;
        }

        // Convert the modified body back to a string
        body = JSON.stringify(parsedBody);
      } catch (e) {
        console.error("Error parsing JSON body:", e);
      }
    }

    // Call the original send method with the modified body
    originalSend.call(this, body);
  };
})();
