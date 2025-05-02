const baseUrl = `/api/get/web?route=`;

async function GO(url, push = true) {
  try {
    const api = await fetch(baseUrl + url);
    const response = await api.json();
    const app = document.getElementById("app");

    app.innerHTML = response.html;

    if (response.css) {
      const style = document.createElement("style");
      style.innerHTML = response.css;
      document.head.appendChild(style);
    }

    if (response.js) {
      const script = document.createElement("script");
      script.innerHTML = response.js;
      document.body.appendChild(script);
    }

    if (push) history.pushState(null, "", "/" + url);

  } catch (error) {
    const app = document.getElementById("app");
    app.innerHTML = error;
  }
}

function start() {
  const path = location.pathname.slice(1) || "Home";
  GO(path, false);
}

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || href.startsWith("http") || href.startsWith("mailto:")) return;

  e.preventDefault();

  const current = location.pathname.replace(/^\/+/, "");
  
  let route = href.startsWith("/") 
    ? href.slice(1)
    : href;
    
  GO(route);
});

window.addEventListener("popstate", () => {
  const path = location.pathname.slice(1) || "Home";
  GO(path, false);
});

start();