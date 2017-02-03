
var i = 0;
var inject = document.createElement("div");
var inject_identifyExtension = document.createElement("div");
inject_identifyExtension.setAttribute("id","inject_identifyExtension");
//inject_identifyExtension.innerHTML = "OMNiKiliCK APP";
document.body.appendChild(inject_identifyExtension, document.body.firstChild);


var srcs = [];
var img_width = [];
var img_height = [];
var Img_url;
var domainwqName = '';
var domain = 'https://www.omniklick.com/images/';
$(document).ready(function () {

    if ($("#omniclickAddonImg").length == 0) {
        var htmlcontent = '<div id="dvomniclickAddon" style="float:right; font-family:Arial, Helvetica, sans-serif; font-size:12px; width:100%;top:20px;right:20px; border-radius:5px; padding:20px; max-width:500px; box-sizing:border-box; border:1px solid #cccccc;z-index:22222222222; box-shadow:0 2px 5px #000; position:fixed; background:#fff;">' +
        '<div style="margin-bottom:13px;width:160px;"><a style=float:left;" href="https://www.omniklick.com/Extention_Login.aspx"><img src="' + domain + 'addon-popup-logo.png"  alt="logo" style="border:none;" /></a>' +
        '<div style="height:auto;font-size: 16px; font-weight: bold; color: #999;"><a style="font-weight:bold; color:#111; font-size:14px;" href="https://www.omniklick.com/Extention_Login.aspx">Back to My Home Page</a></div></div>' +
        '<div style="float:left; width:30%; box-sizing:border-box; text-align:center;">' +
        '<div style="float:left; overflow:hidden; width:100%; box-sizing:border-box; text-align:center; border:1px solid #dddddd;height:130px"><img src="" alt="img" id="omniclickAddonImg" style="max-height:130px; max-width:135px; border:none;" /></div>' +
        '<div id="dv_slideNos" style="margin-top:20px; float:left; width:100%;">' +
        '<span style="float:left;"><a href="javascript:;" id="prev"><img src="' + domain + 'addon-prev-arrow.png" alt="prev-arrow" style="border:none;" /></a></span><span id="num"></span>' +
        '<span style="float:right;"><a href="javascript:;" id="next"><img src="' + domain + 'addon-next-arrow.png" alt="prev-arrow" style="border:none;" /></a></span>' +
        '</div>  </div>  <div id="dv_input" style="float:left; width:70%; padding-left:20px; box-sizing:border-box;">' +
        '<input type="text" id="txt_title" name="" value="" disabled maxlength="1000" style="border:1px solid #dddddd; width:100%; float:left; padding:5px; box-sizing:border-box;" />' +
        '<div style="margin:8px 0; float:left; width:100%;">' +
        '<input type="text" name="" id="txt_price" value="0"  style="border:1px solid #dddddd; width:35%; float:left; padding:5px; box-sizing:border-box;" />' +
        '<div style=" float:left; width:65%; box-sizing:border-box; padding-left:5px;"><span style="padding-right:5px;">Brand Name</span>' +
        '<input type="text" id="txt_BrndName" name="" disabled value="" style="text-transform:capitalize;border:1px solid #dddddd; padding:5px; width:60%; box-sizing:border-box;" />' +
        '</div> </div> <textarea id="txt_Description"  maxlength="1000" placeholder="Comments" style="border:1px solid #dddddd; min-height:60px; padding:5px; width:100%; box-sizing:border-box;"></textarea><div style="margin-top:8px; position:relative; float:left; width:100%">' +
        '<div id="dv_btn_save" style="position:relative; width:170px;"><input type="button" id="btn_addwishlist" name="" value="Save To My Home Page" style="background: #f3f3f3; border:1px solid #b3b3b3; box-sizing:border-box; height:29px; cursor:pointer; min-width:170px; -webkit-border-radius: 3px 3px 3px 3px; border-radius: 3px 3px 3px 3px;' +
        'background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YzZjNmMyIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjQwJSIgc3RvcC1jb2xvcj0iI2U4ZThlOCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNkZWRlZGUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);' +
        'background: -moz-linear-gradient(top, #f3f3f3 0%, #e8e8e8 40%, #dedede 100%);' +
        'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f3f3f3), color-stop(40%,#e8e8e8), color-stop(100%,#dedede));' +
        'background: -webkit-linear-gradient(top, #f3f3f3 0%,#e8e8e8 40%,#dedede 100%);' +
        'background: -o-linear-gradient(top, #f3f3f3 0%,#e8e8e8 40%,#dedede 100%);' +
        'background: -ms-linear-gradient(top, #f3f3f3 0%,#e8e8e8 40%,#dedede 100%);' +
        'background: linear-gradient(to bottom, #f3f3f3 0%,#e8e8e8 40%,#dedede 100%);' +
        'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#f3f3f3\', endColorstr=\'#dedede\',GradientType=0 );" />' +
        '<img src="' + domain + 'addon-loader.gif" style="display:none; height:28px; padding-left:5px; width:30px; float: left; position: absolute;" id="img_loader" / >' +
        //        '<span id="ddl_downarow" style="border-left: 1px solid rgb(166, 166, 166); position: absolute; right: 0px; height: 28px; width: 25px;"><img  alt="down arrow" src="' + domain + 'addon-btn-arrow.png" alt="down arrow" style="position:absolute; right:10px; top:13px;"></span></div>' +
        //        '<div id="dd_fav" style="position:absolute;cursor:pointer;display:none; float:right;font-size:12px;background-color:#fff;border:1px solid #999;width:190px;margin-right:110px;margin-top:1px;height:auto; padding:8px 5px; box-sizing:border-box;border-radius:2px;"><a style="color:#111;text-decoration:none;" href="https://www.omniklick.com/Extention_Login.aspx">My Favourites</a></div>' +
        '</div> </div>' +
        ' <div id="ErrorMsg" style="float:left; width:100%;  background:#fec8be; border:1px solid #ca978d; border-radius:4px; color:#272727; font-size:12px; padding:5px 10px; box-sizing:border-box; margin-top:15px; "></div>' +
        '</div> <img id="imgomniclickAddonclose" style="position:absolute; cursor:pointer; right:5px; top:5px;" src="' + domain + 'addon-close-btn.png" alt="close-button" />' +
        '</div>';
        inject.innerHTML = htmlcontent;
       
        
        var imageArr = $("img").not("#dvomniclickAddon img");

        if (imageArr.length) {
            imageArr.sort(function (img1, img2) { return (img2.naturalWidth * img2.naturalHeight) - (img1.naturalWidth * img1.naturalHeight) });
        }


        document.body.appendChild(inject, document.body.firstChild);
        $("#ErrorMsg").hide();
        var temp;
        imageArr.filter(function (index) {
            temp = imageArr[index].src;
            if (temp.indexOf("data:") == -1) {
                img_width = $(this).prop('naturalWidth');
                img_height = $(this).prop('naturalHeight');
                if (img_width > 50 && img_height > 50) {
                    if ($.inArray(temp, srcs) < 0) {
                        srcs.push(temp);
                        return false;
                    }
                }
            }
            return true;
        });

        $(inject).find("#omniclickAddonImg").attr("src", srcs[i]);
        $(inject).find("#num").html((i + 1) + " To " + srcs.length);
        ;
        if (srcs.length == 0) {
            $("#omniclickAddonImg").attr('src', '' + domain + 'addon-No-Image.jpg');
            $(inject).find("#num").html((i) + " To " + srcs.length);
            $("#dv_slideNos").empty();

        }
    }
    else {
        $("#dvomniclickAddon").parent().remove();
    }
 	
    // =================== Get Price From Amazon & Ebay =============

    //Get the domain nane of current url
    var domainwq = window.location.host;
    domainwqName = domainwq;
    domainwqName = domainwqName.replace("www.", "");
    domainwqName = domainwqName.substr(0, domainwqName.indexOf('.'));
    Img_url = $("#omniclickAddonImg").attr("src");

    if (domainwq.toLowerCase() == "www.amazon.co.uk") {
        var get_price = $('#priceblock_ourprice').text().trim();

    }
    if (domainwq.toLowerCase() == "www.ebay.co.uk") {
        var get_price = $('#prcIsum').text().trim();

    }


    $(inject).find("#next").unbind().click(function () {
        i++;
        if (i == srcs.length) {
            i = 0;
        }

        $(inject).find("#omniclickAddonImg").attr("src", srcs[i]);
        $(inject).find("#num").html((i + 1) + " To " + srcs.length);

    });
    $(inject).find("#prev").unbind().click(function () {
        i--;
        if (i < 0) {
            i = srcs.length - 1;
        }
        $(inject).find("#omniclickAddonImg").attr("src", srcs[i]);
        $(inject).find("#num").html((i + 1) + " To " + srcs.length);
    });

    $("#imgomniclickAddonclose").click(function () {
        $("#dvomniclickAddon").parent().remove();
    });

    var description = $("meta[name='description']");
    $("#txt_title").val(document.title);
    var title = document.title;
    $("#txt_Description").val(description.attr("content"));
    var desc = description.attr("content");

    //============== ddl Effect ====================

    $("#ddl_downarow").click(function () {
        if ($("#dd_fav").is(":visible") == true) {
            $("#dd_fav").hide();
        }
        else {
            $("#dd_fav").show();
        }

    });

    $("#dd_fav").mouseover(function () {

        $("#dd_fav").css("background-color", "#f8f8f8");
    });

    $("#dd_fav").mouseout(function () {

        $("#dd_fav").css("background-color", "#fff");
    });

    //====================== ajax parsing ============================
	
	if(typeof(get_price)!="undefined")
	{
		$('#txt_price').val(get_price);
	}
	else
	{
		$('#txt_price').val('0');
	}
    $('#txt_price').val($('#txt_price').val().replace('$', ''));
    $('#txt_BrndName').val(domainwqName);
    $("#btn_addwishlist").click(function () {

        var Price_val = $('#txt_price').val().replace('£', '');
        Price_val = Price_val.replace(/,/g, '').trim();
        desc = $("#txt_Description").val();
        desc = desc.replace(/(<([^>]+)>)/ig, "");
        var brndname_val = $('#txt_BrndName').val();
        var Testimonial_val = "";
        var page_url = $(location).attr('href');
        var v = validateForm();
        if (v == true) {

            Img_url = $("#omniclickAddonImg").attr("src");



            if (Img_url.toLowerCase().indexOf('//') == 0) {
                Img_url = "http:" + Img_url.trim();
            }
            else if (Img_url.toLowerCase().indexOf('https:') == -1 && Img_url.toLowerCase().indexOf('http:') == -1) {
                Img_url = domainwq.replace(/^\/|\/$/g, '') + "/" + Img_url.replace(/^\/|\/$/g, '');
            }
            if (Img_url.toLowerCase().indexOf('https:') == -1 && Img_url.toLowerCase().indexOf('http:') == -1) {
                Img_url = "http://" + Img_url;
            }



            $("#btn_addwishlist").prop("disabled", true);
            $("#img_loader").show();

            var urlAjax = "https://www.omniklick.com/AjaxPages/GetURL.aspx?action=getdata";
            $.ajax({
                type: "POST",
                url: urlAjax,
                data: { img_url: Img_url, title: title, price: Price_val, Brand: brndname_val, des: desc, pageurl: page_url, testimonial: Testimonial_val, DomainName: domainwq },
                success: function (data) {
                    $("#img_loader").hide();
                    var d = $.parseJSON(data);
                    // alert(d.Issuccess);
                    if (d.Issuccess == "true") {
                        if (d.url == "") {
                            //   alert("Success");
                            $("#dv_input").empty();
                            $("#dv_slideNos").empty();
                            $(inject).find("#dv_input").html(title + " added to" + ' <a href="javascript:;" Style="font-weight:bold;text-decoration:underline;" id="lnk_AdWishlist"> Your Home Page </> ');
                            $("#lnk_AdWishlist").click(function () {
                                location.href = 'https://www.omniklick.com/MyFavourites.htm';
                            });
                        }
                        else {
                            location.href = d.url;
                        }
                    }
                    else {
                        $('#ErrorMsg').show();
                        $('#ErrorMsg').text(d.Errormsg);
                        // alert(d.Errormsg);
                    }
                },
                error: function () {

                    alert("Oops.....Its Error!");
                }

            });
        }
    });

    $("#btn_addwishlist").prop("disabled", false);
    //==================================== Validation ======================================

    function validateForm() {
        var remove_sign = $('#txt_price').val().replace('£', '');
        remove_sign = remove_sign.replace(/,/g, '').trim();
        //  var QntyReg = /^[0-9]{1,3}$/;
        var numberReg = /^\s*(?:\d+|\d*\.\d+)?\s*$/;
        var title_valid = $('#txt_title').val();
        var price_valid = remove_sign.trim();
        var brndname_valid = $('#txt_BrndName').val();
        $("#ErrorMsg").show();

        if (title_valid == "") {
            $('#ErrorMsg').html('<img style="display:block; float:left;" src="' + domain + 'addon-error.png" alt="close-button" /><span style=" float:left; margin-top:2px; margin-left:10px;"> Please Enter Title</span>');
            return false;
        }

        if (price_valid == "") {
            $('#ErrorMsg').html('<img style="display:block; float:left;" src="' + domain + 'addon-error.png" alt="close-button" /><span style=" float:left; margin-top:2px; margin-left:10px;"> Please Enter Price</span>');
            return false;
        }

        if (!numberReg.test(price_valid)) {
            $('#ErrorMsg').html('<img style="display:block; float:left;" src="' + domain + 'addon-error.png" alt="close-button" /><span style=" float:left; margin-top:2px; margin-left:10px;"> Please Enter a valid Price</span>');
            return false;
        }

        if (brndname_valid == "") {
            $('#ErrorMsg').html('<img style="display:block; float:left;" src="' + domain + 'addon-error.png" alt="close-button" /><span style="float:left; margin-top:2px; margin-left:10px;"> Please Enter Brand Name</span>');
            return false;
        }

        $("#ErrorMsg").hide();
        return true;
    }


});

