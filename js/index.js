// const dm = [
//     {"id": 1, "name": "Danh mục 1", "hinh": "hinh1.jpg", "hienthi": 0},
//     {"id": 2, "name": "Danh mục 2", "hinh": "hinh2.jpg", "hienthi": 0},
//     {"id": 3, "name": "Danh mục 3", "hinh": "hinh3.jpg", "hienthi": 1},
//     {"id": 4, "name": "Danh mục 4", "hinh": "hinh4.jpg", "hienthi": 1},
//     {"id": 5, "name": "Danh mục 5", "hinh": "hinh5.jpg", "hienthi": 0}
// ];
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
       // Typical action to be performed when the document is ready:
    //    document.getElementById("demo").innerHTML = xhttp.responseText;
    var ketquadocfile = JSON.parse(xhttp.responseText);
    var kq="";
    kq=ketquadocfile.map(item => {
        return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a class="text-decoration-none" href="">
                <div class="cat-item d-flex align-items-center mb-4">
                    <div class="overflow-hidden" style="width: 100px; height: 100px;">
                        <img class="img-fluid" src="img/${item.hinh}" alt="">
                    </div>
                    <div class="flex-fill pl-3">
                        <h6>Category Name</h6>
                        <small class="text-body">100 Products</small>
                    </div>
                </div>
            </a>
        </div>`;
    });
    document.querySelector("#loaddm2").innerHTML = kq.join("");
    }

};
xhttp.open("GET", "json/danhmuc.json", true);
xhttp.send();



//Xuất = for 
// for (let i = 0; i < dm.length; i++) {
//     kq += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
//     <a class="text-decoration-none" href="">
//         <div class="cat-item d-flex align-items-center mb-4">
//             <div class="overflow-hidden" style="width: 100px; height: 100px;">
//                 <img class="img-fluid" src="img/${dm[i].hinh}" alt="">
//             </div>
//             <div class="flex-fill pl-3">
//                 <h6>Category Name</h6>
//                 <small class="text-body">100 Products</small>
//             </div>
//         </div>
//     </a>
// </div>`;
// }
// 
