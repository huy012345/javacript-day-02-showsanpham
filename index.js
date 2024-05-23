const lisItem = [
    {
        name: "Cây Bình An",
        price: 100000,
        price2: 50000,
        description: "Thêm vào giỏ hàng",
        image: "img/cay-binh-an-255x255.jpg",
        details: "Cây Bình An có xuất xứ từ...",
    },
    {
        name: "Cây Monstera Albo",
        price: 200000,
        description: "Thêm vào giỏ hàng",
        image: "img/cay-monstera-albo-de-ban-255x255.jpg",
        details: "Cây Monstera Albo là một loại cây...",
    },
    {
        name: "Cây Sen Đá Giva",
        price: 50000,
        description: "Thêm vào giỏ hàng",
        image: "img/cay-sen-da-giva-255x255.jpg",
        details: "Cây Sen Đá Giva có đặc điểm...",
    },
    {
        name: "Cây Sen Đá Kim Cương",
        price: 80000,
        description: "Thêm vào giỏ hàng",
        image: "img/cay-sen-da-kim-cuong-tim-255x255.jpg",
        details: "Cây Sen Đá Kim Cương là một trong những loài cây hiếm...",
    },
    {
        name: "Cây Bình Dương Nhỏ",
        price: 80000,
        description: "Thêm vào giỏ hàng",
        image: "img/Cây Bình Dương Nhỏ.jpg",
        details: "Cây Sen Đá Kim Cương là một trong những loài cây hinếm...",
    },
    {
        name: "Cây Phú Qúy",
        price: 80000,
        description: "Thêm vào giỏ hàng",
        image: "img/Cây Phú Qúy.jpg",
        details: "Cây Sen Đá Kim Cương là một trong những loài cây hiếm...",
    },
    {
        name: "Cây Bàng Cẩm Thách lá Tím",
        price: 80000,
        description: "Thêm vào giỏ hàng",
        image: "img/cay-bang-cam-thach-la-tim-255x255.jpg",
        details: "Cây Sen Đá Kim Cương là một trong những loài cây hiếm...",
    },
    {
        name: "Cây Lưỡi hổ Thủy Sinh",
        price: 80000,
        description: "Thêm vào giỏ hàng",
        image: "img/cay-luoi-ho-thuy-sinh-255x255.jpg",
        details: "Cây Sen Đá Kim Cương là một trong những loài cây hiếm...",
    },
    {
        name: "Cây Ngọc Ngân Thủy Sinh",
        price: 80000,
        description: "Thêm vào giỏ hàng",
        image: "img/cay-ngoc-ngan-thuy-sinh-dep-255x255.jpg",
        details: "Cây Sen Đá Kim Cương là một trong những loài cây hiếm...",
    },
    {
        name: "Cây Phát Tài Búp Sen",
        price: 80000,
        description: "Thêm vào giỏ hàng",
        image: "img/cay-phat-tai-bup-sen-3-255x255.jpg",
        details: "Cây Sen Đá Kim Cương là một trong những loài cây hiếm...",
    },
    {
        name: "Cây Sen đá cá heo",
        price: 80000,
        description: "Thêm vào giỏ hàng",
        image: "img/sen-da-ca-heo-255x255.jpg",
        details: "Cây Sen Đá Kim Cương là một trong những loài cây hiếm...",
    },
    {
        name: "Cây Sen đá Cánh Bướm Bạc",
        price: 80000,
        description: "Thêm vào giỏ hàng",
        image: "img/sen-da-canh-buom-bac-255x255.jpg",
        details: "Cây Sen Đá Kim Cương là một trong những loài cây hiếm...",
    },
];

const listItemEl = document.getElementById("list-item");
listItemEl.style.display = "flex";
listItemEl.style.backgroundColor = "#228B22";
listItemEl.style.flexWrap = "wrap";

lisItem.forEach((el, index) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.style.flex = "0 0 calc(33.33% - 30px)";
    item.style.border = "1px solid #ccc";
    item.style.padding = "10px";
    item.style.margin = "15px";
    item.style.maxWidth = "200px";
    item.style.height = "400px";
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.backgroundColor = "white";
    item.style.borderRadius = "10px";
    item.style.transition = "transform 0.3s ease";
    item.style.marginBottom = "20px";

    item.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });

    const avatar = document.createElement('img');
    avatar.src = el.image;
    avatar.style.maxWidth = "200px";
    avatar.style.maxHeight = "200px";
    avatar.style.display = "block";
    avatar.style.margin = "0 auto 10px auto"; // Căn giữa hình ảnh

    const hr = document.createElement('hr');
    hr.style.width = "100%";

    const h3 = document.createElement('h3');
    h3.textContent = el.name;
    h3.style.textAlign = "center";
    h3.style.height = "30px";

    const priceWrapper = document.createElement('div');
    priceWrapper.style.display = "flex";
    priceWrapper.style.justifyContent = "center"; // Căn giữa giá tiền
    priceWrapper.style.alignItems = "center";
    const priceText = document.createElement('span');
    priceText.textContent = `${el.price.toLocaleString()}đ`;
    priceText.style.fontSize = "20px";
    priceText.style.color = "red";
    priceText.style.fontWeight = "bold";
    priceWrapper.appendChild(priceText);

    const d = document.createElement('button');
    d.textContent = el.description;
    d.style.width = "100%";
    d.style.textAlign = "center";
    d.style.padding = "10px";
    d.style.border = "none";
    d.style.borderRadius = "5px";
    d.style.marginTop = "auto";
    d.style.backgroundColor = "#ff6c6b";
    d.style.color = "white";
    d.style.cursor = "pointer";
    d.style.transition = "transform 0.3s ease"; // Thêm hiệu ứng chuyển động
    d.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
    });
    d.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });

    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Chi tiết sản phẩm';
    detailsButton.style.width = "100%";
    detailsButton.style.textAlign = "center";
    detailsButton.style.padding = "10px";
    detailsButton.style.border = "none";
    detailsButton.style.borderRadius = "5px";
    detailsButton.style.marginTop = "10px";
    detailsButton.style.backgroundColor = "#4285F4";
    detailsButton.style.color = "white";
    detailsButton.style.cursor = "pointer";
    detailsButton.style.transition = "transform 0.3s ease"; // Thêm hiệu ứng chuyển động
    detailsButton.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
    });
    detailsButton.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });
    detailsButton.addEventListener('click', function() {
        alert(el.details); // Thay alert bằng logic của bạn để hiển thị chi tiết sản phẩm
    });

    item.appendChild(avatar);
    item.appendChild(hr);
    item.appendChild(h3);
    item.appendChild(priceWrapper);
    item.appendChild(d);
    item.appendChild(detailsButton);
    listItemEl.appendChild(item);
});
