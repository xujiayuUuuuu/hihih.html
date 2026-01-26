document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js loaded");
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
  

  const expandedList = document.getElementById("expandedList");
  expandedList.innerHTML = works
  .sort((a, b) => a.index - b.index)
  .map(w => `
    <article class="expanded-row">
      <div class="expanded-num">
        ${String(w.index).padStart(2, "0")}
      </div>

      <div class="expanded-left">
        ${w.thumbs.slice(0,2).map(src => `<img src="${src}">`).join("")}
      </div>

      <div class="expanded-text">
        <h3>${w.title}</h3>
        <p class="desc">${w.desc}</p>

        ${w.link ? `
          <a href="${w.link}" target="_blank" class="work-link">
            Visit →
          </a>
        ` : ``}
      </div>

      <div class="expanded-right">
        ${w.thumbs.slice(2).map(src => `<img src="${src}">`).join("")}
      </div>
    </article>
  `)
  .join("");


  const handoff = document.getElementById("handoff");

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.body.classList.add("fade-out");
  
      // ⏱ 等淡出動畫跑完再進 B
      setTimeout(() => {
        window.location.href = "b.html";
      }, 500); // 這個時間要跟 CSS transition 一樣
    }
  }, { threshold: 1 });
  
  io.observe(handoff);
  
});
