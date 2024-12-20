// @ts-check

(function () {
  const originalOpen = XMLHttpRequest.prototype.open;

  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    // Modify the URL (example: prepend a proxy URL or change the domain)
    url = url.replace("https://api.dlaser247.com", "");

    // Call the original open method with the modified URL
    originalOpen.call(this, method, url, ...rest);
  };
})();
