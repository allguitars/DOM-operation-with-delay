const ulNode = document.querySelector('#list');
const liNodes = [];
let i = 0;

document.querySelector('#start').addEventListener('click', () => {
  shuffleArray(liNodes);
});

// 自動生成 10 個 <li> node  並依附到 <ul> 下面
while (i < 10) {
  const liNode = document.createElement('li');
  const textNode = document.createTextNode(i);
  liNode.appendChild(textNode);
  ulNode.appendChild(liNode);
  // 所有 <li> node 放到 array 中  以方便對其內容做操作
  liNodes.push(liNode);
  i++;
}

// Do the shuffle
function shuffleArray(nodes) {
  let currentIndex = nodes.length;
  shuffleLoop(nodes, currentIndex);
  console.log('end of the function'); // 會比亂數排列先印出
}
// Swap nodes
function swapNodes(n1, n2) {
  let tmp = n1.textContent;
  n1.textContent = n2.textContent;
  n2.textContent = tmp;
}
// Logging the list
function logging(nodes, currentIndex, randomIndex) {
  console.log(`currentIndex: ${currentIndex}, randomIndex: ${randomIndex}`);
  let str = '';
  for (let node of nodes) {
    str = str.concat(node.textContent, ' ');
  }
  console.log(str);
}
// 打散 array 演算法
function shuffleLoop(nodes, currentIndex) {
  setTimeout(() => {
    if (currentIndex > 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      swapNodes(nodes[currentIndex], nodes[randomIndex]);
      logging(nodes, currentIndex, randomIndex); // Logging for observation
      shuffleLoop(nodes, currentIndex);
    }
  }, 1000);
}
