// 최신 글 데이터
const latestPosts = [
  { title: "2024년 UX/UI 디자인 트렌드", url: "post1.html" },
  { title: "두 번째 포스트", url: "post2.html" },
  { title: "세 번째 포스트", url: "post3.html" }
];

// 최신 글 목록을 메인 페이지에 렌더링하고 클릭 이벤트 추가
function renderLatestPosts() {
  const postList = document.getElementById("post-list");
  latestPosts.forEach(post => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = post.title;
    link.href = post.url;
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const postUrl = event.target.href;
      loadPostContent(postUrl);
    });
    listItem.appendChild(link);
    postList.appendChild(listItem);
  });
}

// 클릭한 게시물의 내용을 표시하는 함수
function loadPostContent(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById("post-content").innerHTML = html;
    })
    .catch(error => console.error("게시물을 불러오는 중 오류가 발생했습니다.", error));
}

// 페이지 로드 시 최신 글 목록 렌더링
window.onload = function() {
  renderLatestPosts();
};
