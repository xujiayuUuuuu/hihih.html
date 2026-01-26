document.addEventListener("DOMContentLoaded", () => {
  const works = [
    {
      index: 1,
      title: "Interactive Music Website",
      desc: "An interactive web project exploring the relationship between music and visual motion.",
      link: "https://xujiayuuuu.github.io/music/",
      thumbs: [
        "images/music1.png",
        "images/music2.png",
        "images/music3.png",
        "images/music4.png",
        "images/music5.png"
      ]
    },
    {
      index: 2,
      title: "Mochi Landing Page",
      desc: "Commercial landing page focusing on product presentation.",
      link: "https://xujiayuuuu.github.io/mochi.html/",
      thumbs: [
        "images/mochi1.png",
        "images/mochi2.png",
        "images/mochi3.png",
        "images/mochi4.png",
        "images/mochi5.png"
      ]
    },
    {
      index: 3,
      title: "NEXA — SaaS Dashboard Platform",
      desc: "A SaaS dashboard platform designed to help growing teams monitor data, system performance, and operational insights in one centralized interface.",
      link: "https://xujiayuuuu.github.io/black/",
      thumbs: [
        "images/foodie1.png",
        "images/foodie2.png",
        "images/foodie3.png",
        "images/foodie4.png",
        "images/foodie5.png"
      ]
    },
    {
      index: 4,
      title: "Minimal Music Player",
      desc: "Minimal UI prototype for music playback.",
      thumbs: [
        "images/mu1.png",
        "images/mu2.png"
      ]
    },
    {
      index: 5,
      title: "Graduation Project",
      desc: "Interactive web installation exploring evaluation and identity.",
      link: "https://xujiayuuuu.github.io/goodmodel/",
      thumbs: [
        "images/good1.png",
        "images/good2.png",
        "images/good3.png",
        "images/good4.png",
        "images/good5.png"
      ]
    }
  ];
  
  
    const indexEl   = document.getElementById("stageIndex");
    const titleEl   = document.getElementById("stageTitle");
    const descEl    = document.getElementById("stageDesc");
    const linkEl    = document.getElementById("stageLink");
    const thumbsEl  = document.getElementById("stageThumbs");
    const thumbsIn  = document.getElementById("stageThumbsInner");
    const previewEl = document.getElementById("stagePreview");
  
    /* ===== 建立所有小圖（一整條） ===== */
    const thumbMeta = [];
  
    works.forEach((w, wi) => {
      w.thumbs.forEach((src, ti) => {
        const img = document.createElement("img");
        img.src = src;
        img.dataset.work = wi;
        thumbsIn.appendChild(img);
        thumbMeta.push(img);
      });
    });let currentIndex = works[0].index;

    function updateIndex(nextIndex) {
      if (currentIndex === nextIndex) return;
    
      const wrap = document.querySelector(".stage-index-wrap");
      const oldMain = document.getElementById("stageIndex");
    
      // 舊的數字 → 往下走
      const oldEl = oldMain.cloneNode(true);
      oldEl.classList.add("out");
      wrap.appendChild(oldEl);
    
      // 新的數字 → 從上來
      const newEl = document.createElement("div");
      newEl.className = "stage-index in";
      newEl.textContent = String(nextIndex).padStart(2, "0");
      wrap.appendChild(newEl);
    
      // 動畫結束後：只留下新的
      newEl.addEventListener("animationend", () => {
        oldMain.textContent = newEl.textContent;
        newEl.remove();
        oldEl.remove();
      });
    
      currentIndex = nextIndex;
    }
    
    
    function renderByWork(w) {
        if (currentIndex !== w.index) {
          updateIndex(w.index);
          currentIndex = w.index;
        }
      
        titleEl.textContent = w.title;
        descEl.textContent  = w.desc;
      
        if (w.link) {
          linkEl.href = w.link;
          linkEl.style.display = "inline";
        } else {
          linkEl.style.display = "none";
        }
      }
      
    function renderPreview(src) {
      previewEl.innerHTML = `<img src="${src}">`;
    }
  
    /* ===== scroll 控制 ===== */
    function onScroll() {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const ratio = window.scrollY / maxScroll;
  
      // 左邊小圖「假滾動」
      const thumbsViewport = thumbsEl.offsetHeight;
      const thumbsContent  = thumbsIn.offsetHeight;
      const maxMove = Math.max(0, thumbsContent - thumbsViewport);
      thumbsIn.style.transform = `translateY(-${maxMove * ratio}px)`;
  
      // 找目前對應的小圖
      const idx = Math.min(
        thumbMeta.length - 1,
        Math.floor(ratio * thumbMeta.length)
      );
  
      const activeThumb = thumbMeta[idx];
      if (!activeThumb) return;
  
      const work = works[activeThumb.dataset.work];
      renderByWork(work);
      renderPreview(activeThumb.src);
    }
  
    window.addEventListener("scroll", onScroll);
  
    // init
   // init：只設定內容，不做動畫
indexEl.textContent = String(works[0].index).padStart(2, "0");
titleEl.textContent = works[0].title;
descEl.textContent  = works[0].desc;

if (works[0].link) {
  linkEl.href = works[0].link;
  linkEl.style.display = "inline";
} else {
  linkEl.style.display = "none";
}

renderPreview(thumbMeta[0].src);

    renderPreview(thumbMeta[0].src);
    onScroll();
  });
  