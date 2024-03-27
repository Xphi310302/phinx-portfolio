document.addEventListener('DOMContentLoaded', function () {
    var infoLists = document.querySelectorAll('.hidden');

    // Ẩn thông tin khi trang được tải lần đầu tiên
    infoLists.forEach(function (infoList) {
        infoList.classList.add('hidden');
    });
});

function toggleInfo(id) {
    var infoList = document.getElementById(id);
    infoList.classList.toggle('hidden');
}
