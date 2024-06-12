let busyCount = 0; // Số lần nút "Bận gòi" được nhấn

function busy() {
    busyCount++; // Tăng số lần "Bận gòi" được nhấn
    if (busyCount == 3) {
        document.getElementById('busyBtn').style.display = 'none'; // Ẩn nút "Bận gòi" khi được nhấn lần thứ ba
    }
    document.getElementById('agreeBtn').style.fontSize = (31 + 20 * busyCount) + 'px'; // Tăng kích thước của nút "Đồng ý"
}

function showForm() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('formContainer').style.display = 'block'; // Hiển thị form khi nút "Đồng ý" được nhấn
}

function xacNhan() {
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('box').style.display ='block';
}