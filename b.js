document.addEventListener("DOMContentLoaded", () => {
  const works = [
    {
      index: 1,
      title: "Interactive Music Website",
      meta: {
        type: "音樂沈浸式互動網站（學校專案）",
        role: "UI 設計、互動設計、前端實作",
        tools: "HTML、CSS、JavaScript"
      },
      description: "以「聲音與視覺的關係」為主題，設計並實作互動式音樂網站，透過動畫與版面節奏呈現音樂的情緒變化，強調使用者在瀏覽過程中的沉浸感與互動體驗。",
      highlights: [
        "將抽象的音樂概念轉化為具體的視覺與互動表現",
        "規劃非線性瀏覽體驗，提升探索感與節奏感",
        "整合視覺設計與前端動畫，完成完整互動頁面"
      ],
      link: "https://xujiayuuuuuu.github.io/music/",
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
      meta: {
        type: "電商網站（概念專案）",
        role: "UI 設計、前端實作",
        tools: "HTML、CSS、JavaScript、Bootstrap"
      },
      description: "以日式和菓子品牌為主題，設計並實作完整的電商網站介面，包含商品列表、商品頁、購物車與基本互動流程。",
      highlights: [
        "規劃電商網站的資訊層級與商品瀏覽動線",
        "設計符合品牌調性的視覺風格與互動效果",
        "將 UI 設計實際轉換為可上線的前端頁面"
      ],
      link: "https://xujiayuuuuuu.github.io/mochi.html/",
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
      meta: {
        type: "SaaS 管理平台（概念專案）",
        role: "UI 設計、介面結構規劃",
        tools: "Figma、HTML、CSS、JavaScript"
      },
      description: "以企業後台管理平台為情境，設計 SaaS Dashboard 介面，模擬資料監控、系統狀態與使用者管理等常見功能，強調資訊層級清楚、操作效率與視覺一致性。",
      highlights: [
        "規劃 Dashboard 資訊架構與模組化版面配置",
        "設計符合企業使用情境的深色介面與狀態視覺",
        "模擬實際 SaaS 產品的操作流程與使用邏輯"
      ],
      link: "https://xujiayuuuuuu.github.io/black/",
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
      meta: {
        type: "UI Prototype（概念專案）",
        role: "UI 設計",
        tools: "Figma"
      },
      description: "以簡潔為核心，設計音樂播放器介面原型，專注於播放控制、狀態顯示與操作直覺性，探索極簡介面在功能呈現上的可能性。",
      highlights: [
        "以使用者操作流程為核心進行介面簡化",
        "練習在限制元素下維持資訊清楚度",
        "作為 UI 細節與排版能力的補充展示"
      ],
      thumbs: [
        "images/mu1.png",
        "images/mu2.png"
      ]
    },
    {
      index: 5,
      title: "Graduation Project",
      meta: {
        type: "互動裝置 × 網頁（畢業專題）",
        role: "互動設計、UI 設計、前端實作（團隊合作）",
        tools: "HTML、CSS、JavaScript、互動技術"
      },
      description: "以「評價機制與身分認同」為核心概念，設計互動式網頁裝置，透過即時回饋與視覺呈現，引導使用者反思數位環境中的標準化與標籤化現象。",
      highlights: [
        "結合互動技術與概念導向的介面設計",
        "將抽象議題轉化為可被體驗的互動流程",
        "於實體展示情境中完成穩定運作的網頁作品"
      ],
      link: "https://xujiayuuuuuu.github.io/goodmodel/",
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
    
      // ===== 組合企業可讀的描述文字 =====
      let descText = "";
    
      // Mochi（有 meta / description / highlights）
      if (w.meta) {
        descText += `專案類型｜${w.meta.type}\n`;
        descText += `角色｜${w.meta.role}\n`;
        descText += `使用工具｜${w.meta.tools}\n\n`;
      }
    
      if (w.description) {
        descText += `專案說明｜\n${w.description}\n\n`;
      } else if (w.desc) {
        descText += w.desc + "\n\n";
      }
    
      if (w.highlights && w.highlights.length) {
        descText += `重點能力｜\n`;
        w.highlights.forEach(item => {
          descText += `・${item}\n`;
        });
      }
    
      descEl.textContent = descText.trim();
    
      // link
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
  