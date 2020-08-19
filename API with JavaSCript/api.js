function getData() {
  let URL = "http://192.168.10.116:8000/product/api/";
  $.ajax({
    type: 'GET',
    url: URL,
    success: function (response) {
      let data = response.rows;
      console.log(data);
      let temp = ""
      for (let i = 0; i < data.length; i++) {
         temp += "<tr>" + "<td>" + data[i].product_id + "</td><td>" + data[i].product_name +"</td><td>" + data[i].code +"</td></tr>";
      }
      $("#table").html(temp);
    },
    error: function (response, status, error) {
      console.log(status);
    },
    complete: function () {
      console.log("complete");
    }
  });

}

function postData(){
    $("#submit").click(function(event){
        event.preventDefault();
      let Url = "http://192.168.10.116:8000/product/add/";
      let info = {
        'Product.name' : $("#name").val(),
        'Product.code' : $("#code").val(),
        'Product.sub_category_id' : parseInt($("#sub_category_id").val()),
        'Product.step_size' : parseFloat($("#step_size").val()),
        'Product.purchase_price' : parseFloat($("#purchase_price").val()),
        'Product.finished' : 1
    };
    console.log(info);
      $.ajax({
            type: 'POST',
            url : Url,
            data: info,
            success: function(response){
                getData();
                console.log(response);
            },
            error: function(response, status, error){
                console.log(status);
                console.log(response);
            },
            complete: function(){

                console.log("complete");

            }

      });
  });
}
$(document).ready(function(){
    getData();
    postData();

});

