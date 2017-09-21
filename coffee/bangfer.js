// Generated by CoffeeScript 1.12.7
(function() {
  var HOTPOOR_CDN_PREFIX, HOTPOOR_CDN_PREFIX_AUDIO, HOTPOOR_CDN_PREFIX_VIDEO, aim_ad_id, aim_ad_members, aim_ad_open, bangfer_app, bangfer_init, bangfer_log, bangfer_print, bangfer_ws, formatDate, getQueryVariable, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  bangfer_ws = null;

  bangfer_app = [];

  HOTPOOR_CDN_PREFIX = "http://image.hotpoor.org";

  HOTPOOR_CDN_PREFIX_AUDIO = "http://audio.hotpoor.org";

  HOTPOOR_CDN_PREFIX_VIDEO = "http://video.hotpoor.org";

  bangfer_log = function(string) {
    return console.log(string);
  };

  bangfer_print = function(title, string, auto, alertColor, colorType0, colorType1, bgColorType) {
    var bangfer_print_action, bangfer_print_action_i;
    if (auto == null) {
      auto = true;
    }
    if (alertColor == null) {
      alertColor = "black";
    }
    if (colorType0 == null) {
      colorType0 = "#161616";
    }
    if (colorType1 == null) {
      colorType1 = "#999999";
    }
    if (bgColorType == null) {
      bgColorType = "white";
    }
    bangfer_print_action = (new Date()).getTime() + "_" + parseInt(Math.random() * 100);
    if (string.length >= 50) {
      string = string.substring(0, 50) + "...";
    }
    $("body").append("<div class=\"js_print\" data-value=\"" + bangfer_print_action + "\" style=\"background:" + bgColorType + ";border-left:2px solid " + alertColor + "\">\n    <div style=\"color:" + colorType1 + ";font-size:16px;\">" + title + "</div>\n    <div style=\"color:" + colorType1 + ";font-size:12px;\">" + string + "</div>\n    <div style=\"color:" + colorType1 + "\" class=\"remove_js_print\">x</div>\n</div>");
    $(".js_print[data-value=" + bangfer_print_action + "]").fadeIn();
    if (auto) {
      bangfer_print_action_i = setTimeout(function() {
        return $(".js_print[data-value=" + bangfer_print_action + "]").fadeOut(300, function() {
          return $(".js_print[data-value=" + bangfer_print_action + "]").remove();
        });
      }, 2000);
    }
    return $(".remove_js_print").on("click", function(evt) {
      return $(this).parent().fadeOut(300, function() {
        return $(".js_code[data-value=" + bangfer_print_action + "]").remove();
      });
    });
  };

  root.bangfer_normal_print = function(string) {
    return bangfer_print("通知", string, true);
  };

  root.bangfer_success_print = function(string) {
    return bangfer_print("成功", string, true, "#4caf50");
  };

  root.bangfer_danger_print = function(string) {
    return bangfer_print("警告", string, true, "#ff5722");
  };

  root.bangfer_free_print = function(title, string, auto, alertColor) {
    if (auto == null) {
      auto = true;
    }
    if (alertColor == null) {
      alertColor = "black";
    }
    return bangfer_print(title, string, auto, alertColor);
  };

  root.bangfer_script = function(js_code, del) {
    var js_code_action;
    if (del == null) {
      del = true;
    }
    js_code_action = (new Date()).getTime() + "_" + parseInt(Math.random() * 100);
    $("body").append("<div class=\"js_code\" style=\"display:none;\" data-value=\"" + js_code_action + "\">\n    <script>\n        " + js_code + "\n        if (" + del + "){\n            $(\".js_code[data-value=" + js_code_action + "]\").remove();\n        }\n    </script>\n</div>");
    return bangfer_log(js_code_action + ",del:" + del);
  };

  root.bangfer_script_edit = function(action) {
    if (action == null) {
      action = "close";
    }
    $("#js_code_edit").remove();
    if (action === "open") {
      $("body").append("<div id=\"js_code_edit\">\n    <textarea id=\"js_code_edit_area\"></textarea>\n    <div id=\"js_code_edit_send_btns\" align=\"center\"><button id=\"js_code_edit_send_local\" class=\"js_code_edit_send_btn\">本地执行</button><button id=\"js_code_edit_send_all\" class=\"js_code_edit_send_btn\">发送全局</button></div>\n</div>");
      $("#js_code_edit_send_local").on("click", function(evt) {
        root.bangfer_script($("#js_code_edit_area").val());
        return console.log("已发送");
      });
      return $("#js_code_edit_send_all").on("click", function(evt) {
        return console.log("未开启");
      });
    }
  };

  getQueryVariable = function(variable) {
    var i, j, len, pair, query, vars;
    query = window.location.search.substring(1);
    vars = query.split("&");
    for (j = 0, len = vars.length; j < len; j++) {
      i = vars[j];
      pair = i.split("=");
      if (pair[0] === variable) {
        return pair[1];
      }
    }
    return false;
  };

  aim_ad_id = null;

  aim_ad_open = 0;

  aim_ad_members = {};

  bangfer_init = function(bangfer_app) {
    var app, html, html1, html_clothes, html_express, html_fix, html_helper, html_package, html_shoes, html_shop, j, len;
    $("body").append("<div id=\"bangfer_app\"></div>");
    html = null;
    html_fix = null;
    html_clothes = null;
    html_shoes = null;
    html_package = null;
    html_express = null;
    html_helper = null;
    html_shop = null;
    for (j = 0, len = bangfer_app.length; j < len; j++) {
      app = bangfer_app[j];
      if (app === "fix") {
        html_fix = "<div class=\"bangfer_app_item\">维修</div>";
      } else if (app === "clothes") {
        html_clothes = "<div class=\"bangfer_app_item\">洗衣</div>";
      } else if (app === "shoes") {
        html_shoes = "<div class=\"bangfer_app_item\">洗鞋</div>";
      } else if (app === "package") {
        html_package = "<div class=\"bangfer_app_item\">代取快递</div>";
      } else if (app === "express") {
        html_express = "<div class=\"bangfer_app_item\">发快递</div>";
      } else if (app === "helper") {
        html_helper = "<div class=\"bangfer_app_item\">互助</div>";
      } else if (app === "shop") {
        html_shop = "<div class=\"bangfer_app_item\">商店</div>";
      }
    }
    html1 = html_fix + "\n" + html_clothes + "\n" + html_shoes + "\n" + html_package + "\n" + html_express + "\n" + html_helper + "\n" + html_shop;
    html = "    ";
    aim_ad_id = getQueryVariable("aim_ad_id");
    if (!aim_ad_id) {
      aim_ad_id = USER_ID;
    }
    return $.ajax({
      "type": "GET",
      "url": "/api/ad/list",
      "dataType": "json",
      "data": {
        "aim_id": aim_ad_id
      },
      "success": function(data) {
        var h_fee_all, h_m, k, len1, ref, u, u_content, u_fee, u_headimgurl, u_name, u_price, u_time;
        console.log(data);
        aim_ad_members = Object.assign(aim_ad_members, data.members);
        console.log(aim_ad_members);
        root.wx_ready(aim_ad_members[USER_ID]["headimgurl"]);
        aim_ad_open = data.ad_open;
        if (aim_ad_open === 1) {
          h_m = "";
          h_fee_all = 0;
          ref = data.list_plus;
          for (k = 0, len1 = ref.length; k < len1; k++) {
            u = ref[k];
            u_name = aim_ad_members[u[0]]["name"];
            u_headimgurl = aim_ad_members[u[0]]["headimgurl"];
            u_content = u[2];
            u_fee = u[1];
            h_fee_all = h_fee_all + u_fee;
            u_price = "￥" + (u_fee / 100.0).toFixed(2) + "元";
            u_time = formatDate(u[3] * 1000);
            h_m = h_m + ("<div class=\"iphone_list_line\"><img src=\"" + u_headimgurl + "\"><span>" + u_name + "</span><span>" + u_time + "</span><p>u_content</p><span>" + u_price + "</span></div>");
          }
          html = "<div id=\"iphone_list_lines\">\n" + h_m + "\n</div>";
        } else {
          html = "<div id=\"iphone_list\">\n    <div class=\"iphone_select\"><button class=\"select_btn\">iPhone 8</button>\n    <div class=\"iphone_select\"><button class=\"select_btn\">iPhone 8Plus</button>\n    <div class=\"iphone_select\"><button class=\"select_btn\">iPhone X</button>\n</div>\n<button class=\"iphone_pay_50\">￥50 支付定金</button>";
        }
        return $("#bangfer_app").append(html);
      },
      "error": function(data) {
        return console.log(data);
      }
    });
  };

  formatDate = function(now) {
    var audio_list_time_now, date, hour, minute, month, now_date, year;
    now_date = new Date(now);
    audio_list_time_now = new Date();
    year = now_date.getFullYear();
    month = now_date.getMonth() + 1;
    date = now_date.getDate();
    hour = now_date.getHours();
    minute = now_date.getMinutes();
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (audio_list_time_now.getFullYear() === year && audio_list_time_now.getMonth() + 1 === month && audio_list_time_now.getDate() === date) {
      return hour + ":" + minute;
    }
    if (audio_list_time_now.getFullYear() === year) {
      return month + "月" + date + "日 " + hour + ":" + minute;
    }
    return year + "年" + month + "月" + date + "日 " + hour + ":" + minute;
  };

  root.wx_ready = function(img, text) {
    if (text == null) {
      text = "iPhone";
    }
    return wx.ready(function() {
      wx.showAllNonBaseMenuItem();
      wx.onMenuShareAppMessage({
        title: "我在帮范儿预定" + text + "，帮帮砍价！",
        desc: '最高￥50~￥5000抵扣，赶快召集小伙伴们来砍价！',
        link: 'http://www.hotpoor.org/home/mmplus?user_id=f0d75199ce334fdaa2091df00a9e087b&aim_ad_id=' + USER_ID,
        imgUrl: img,
        type: '',
        dataUrl: '',
        success: function() {
          return console.log("分享给好友成功");
        },
        cancel: function() {
          return console.log("取消分享给好友");
        }
      });
      return wx.onMenuShareTimeline({
        title: "我在帮范儿预定" + text + "，帮帮砍价！",
        link: 'http://www.hotpoor.org/home/mmplus?user_id=f0d75199ce334fdaa2091df00a9e087b&aim_ad_id=' + USER_ID,
        imgUrl: img,
        success: function() {
          return console.log("分享朋友圈成功");
        },
        cancel: function() {
          return console.log("取消分享朋友圈");
        }
      });
    });
  };

  $(function() {
    bangfer_ws = 1;
    return bangfer_init(bangfer_app);
  });

  $("body").on("click", ".select_btn", function(evt) {
    $(".select_btn").removeClass("select_btn_now");
    $(this).addClass("select_btn_now");
    return root.wx_ready(USER_HEADIMGURL, $(this).text());
  });

}).call(this);
