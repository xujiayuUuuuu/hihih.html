// =====================
// 資料
// =====================
const worksData = {
    music: {
      title: "Interactive Music Website",
      role: "Role: UI Design Interaction Design · Front-end Implementation",
      desc: "An interactive web project exploring the relationship between music and visual motion.",
      link: "https://xujiayuuuuuu.github.io/music/",
      leftImages: [
        "images/music1.png",
        "images/music2.png"
      ],
      rightImages: [
        "images/music3.png",
        "images/music4.png",
        "images/music5.png"
      ]
    },
  
    mochi: {
      title: "Mochi Landing Page",
  role: "Role: UI Design · Visual Design · Front-end Implementation",
      desc: "A commercial landing page design focusing on product presentation and clean layout.",
      link: "https://xujiayuuuuuu.github.io/mochi.html/",
      leftImages: [
        "images/mochi1.png",
        "images/mochi2.png"
      ],
      rightImages: [
        "images/mochi3.png",
        "images/mochi4.png",
        "images/mochi5.png",
      ]
    },
  
    graduation: {
      title: "Graduation Project — Interactive Web Installation",
      role: "Role: Visual Design · Interaction Design · Front-end (Team Project)",
      desc: "An experimental interactive web installation exploring evaluation and identity.",
      link: "https://xujiayuuuuuu.github.io/goodmodel/",
      leftImages: [
        "images/good1.png",
        "images/good2.png"
      ],
      rightImages: [
        "images/good3.png",
        "images/good4.png",
        "images/good5.png"
      ]
    }
  };
  
  // =====================
  // DOM
  // =====================
  const listItems = document.querySelectorAll(".works-list li");
  const titleEl = document.getElementById("work-title");
  const descEl = document.getElementById("work-desc");
  const linkEl = document.getElementById("work-link");
  const leftBox = document.getElementById("images-left");
  const rightBox = document.getElementById("images-right");
const roleEl = document.getElementById("work-role");
  // =====================
  // Scroll Reveal Observer
  // =====================
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.3
    }
  );
  
  // =====================
  // Render function
  // =====================
  function renderWork(key) {
    const work = worksData[key];
  
    titleEl.textContent = work.title;
    roleEl.textContent = work.role;
    descEl.textContent = work.desc;
    linkEl.href = work.link;
    linkEl.textContent = "View Project →";
  
    leftBox.innerHTML = "";
    rightBox.innerHTML = "";
  // 左邊圖片（全部都是圖片）
work.leftImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("reveal");
  
    leftBox.appendChild(img);
    observer.observe(img);
  });
  
  
    // 右邊圖片
    work.rightImages.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("reveal");
      rightBox.appendChild(img);
      observer.observe(img);
    });
  }
  
  // =====================
  // 預設載入
  // =====================
  renderWork("music");
  
  // =====================
  // 點擊切換作品
  // =====================
  listItems.forEach(item => {
    item.addEventListener("click", () => {
      renderWork(item.dataset.key);
    });
  });
  