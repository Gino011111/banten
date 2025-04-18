let sprite1, sprite2, sprite3; // 儲存圖片精靈
let currentSprite = null; // 當前顯示的精靈
let frameIndex = 0; // 當前動畫的幀索引
let frameCountPerSprite = 5; // 每個精靈的幀數

function preload() {
  // 載入圖片精靈
  sprite1 = loadImage('1_all.png'); // 5 張照片，高 61，寬 38
  sprite2 = loadImage('2_all.png'); // 5 張照片，高 77，寬 68
  sprite3 = loadImage('3_all.png'); // 6 張照片，高 94，寬 111
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5); // 設定動畫速度為每秒 5 幀

  // 第一個按鈕
  let button1 = createButton('介紹');
  button1.position(150, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => {
    currentSprite = sprite1;
    frameIndex = 0; // 重置動畫幀
    frameCountPerSprite = 5; // 設定幀數
  });
  button1.mousePressed(() => {
    // 移除舊的 iframe（如果存在）
    let existingIframe = select('iframe');
    if (existingIframe) existingIframe.remove();

    // 嵌入介紹的 iframe
    let iframe = createElement('iframe');
    iframe.attribute('src', 'https://www.tku.edu.tw/');
    iframe.attribute('width', windowWidth);
    iframe.attribute('height', windowHeight - 50); // 調整高度以避免覆蓋按鈕
    iframe.style('position', 'absolute');
    iframe.style('top', '50px'); // 放在按鈕下方
    iframe.style('left', '0');
    iframe.style('border', 'none');
    document.body.appendChild(iframe.elt);
  });

  // 第二個按鈕
  let button2 = createButton('筆記說明');
  button2.position(450, 50); // 設定在「作品簡介」左邊
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => {
    currentSprite = sprite3;
    frameIndex = 0; // 重置動畫幀
    frameCountPerSprite = 6; // 設定幀數
  });
  button2.mousePressed(() => {
    // 移除舊的 iframe（如果存在）
    let existingIframe = select('iframe');
    if (existingIframe) existingIframe.remove();

    // 嵌入筆記說明的 iframe
    let iframe = createElement('iframe');
    iframe.attribute('src', 'https://hackmd.io/@b1PFcnBVQTCzUYY4i91OJA/HJBElNJ1lg');
    iframe.attribute('width', windowWidth);
    iframe.attribute('height', windowHeight - 50); // 調整高度以避免覆蓋按鈕
    iframe.style('position', 'absolute');
    iframe.style('top', '50px'); // 放在按鈕下方
    iframe.style('left', '0');
    iframe.style('border', 'none');
    document.body.appendChild(iframe.elt);
  });

  // 第三個按鈕
  let button3 = createButton('作品簡介');
  button3.position(300, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(() => {
    currentSprite = sprite2;
    frameIndex = 0; // 重置動畫幀
    frameCountPerSprite = 5; // 設定幀數
  });
  button3.mousePressed(() => {
    // 移除舊的 iframe 和選單（如果存在）
    let existingIframe = select('iframe');
    if (existingIframe) existingIframe.remove();

    let existingDropdown = select('#dropdown');
    if (existingDropdown) existingDropdown.remove();

    // 建立下拉式選單
    let dropdown = createSelect();
    dropdown.id('dropdown');
    dropdown.position(300, 120); // 下拉式選單的位置
    dropdown.option('選擇作品');
    dropdown.option('作品一');
    dropdown.option('作品二');

    dropdown.changed(() => {
      let selectedOption = dropdown.value();

      // 移除舊的 iframe（如果存在）
      let existingIframe = select('iframe');
      if (existingIframe) existingIframe.remove();

      if (selectedOption === '作品一') {
        // 嵌入作品一的 iframe
        let iframe = createElement('iframe');
        iframe.attribute('src', 'https://gino011111.github.io/shake/');
        iframe.attribute('width', windowWidth);
        iframe.attribute('height', windowHeight - 150); // 調整高度以避免覆蓋選單
        iframe.style('position', 'absolute');
        iframe.style('top', '150px'); // 放在選單下方
        iframe.style('left', '0');
        iframe.style('border', 'none');
        document.body.appendChild(iframe.elt);
      } else if (selectedOption === '作品二') {
        // 嵌入作品二的 iframe
        let iframe = createElement('iframe');
        iframe.attribute('src', 'https://gino011111.github.io/swing/');
        iframe.attribute('width', windowWidth);
        iframe.attribute('height', windowHeight - 150); // 調整高度以避免覆蓋選單
        iframe.style('position', 'absolute');
        iframe.style('top', '150px'); // 放在選單下方
        iframe.style('left', '0');
        iframe.style('border', 'none');
        document.body.appendChild(iframe.elt);
      }
    });
  });
}

function draw() {
  background(220);

  // 如果有當前精靈，顯示動畫
  if (currentSprite) {
    let spriteWidth, spriteHeight;

    // 根據當前精靈設定單幀的寬度和高度
    if (currentSprite === sprite1) {
      spriteWidth = 38; // 單幀寬度
      spriteHeight = 61; // 單幀高度
    } else if (currentSprite === sprite2) {
      spriteWidth = 68; // 單幀寬度
      spriteHeight = 77; // 單幀高度
    } else if (currentSprite === sprite3) {
      spriteWidth = 111; // 單幀寬度
      spriteHeight = 94; // 單幀高度
    }

    let sx = frameIndex * spriteWidth; // 計算當前幀的 x 起點

    // 繪製當前幀，位置改為 (50, 50)
    image(
      currentSprite,
      50, // 固定 x 位置為 50
      50, // 固定 y 位置為 50
      spriteWidth,
      spriteHeight,
      sx,
      0,
      spriteWidth,
      spriteHeight
    );

    // 更新幀索引
    frameIndex = (frameIndex + 1) % frameCountPerSprite;
  }
}



