// Generated by CoffeeScript 1.12.7
(function() {
  var HOTPOOR_CDN_PREFIX, HOTPOOR_CDN_PREFIX_AUDIO, HOTPOOR_CDN_PREFIX_VIDEO, bangfer_app, bangfer_init, bangfer_ws, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  bangfer_ws = null;

  bangfer_app = ["fix", "clothes", "shoes", "package", "express", "helper", "shop"];

  HOTPOOR_CDN_PREFIX = "http://image.hotpoor.org";

  HOTPOOR_CDN_PREFIX_AUDIO = "http://audio.hotpoor.org";

  HOTPOOR_CDN_PREFIX_VIDEO = "http://video.hotpoor.org";

  root.bangfer_script = function(js_code) {
    var js_code_action;
    js_code_action = (new Date()).getTime() + "_" + parseInt(Math.random() * 100);
    return $("body").append("<div class=\"js_code\" data-value=\"" + js_code_action + "\">\n    <script>\n        " + js_code + "\n        $(\".js_code[data-value=" + js_code_action + "]\").remove();\n    </script>\n</div>");
  };

  bangfer_init = function(bangfer_app) {
    var app, html, html_clothes, html_express, html_fix, html_helper, html_package, html_shoes, html_shop, i, len;
    $("body").append("<div id=\"bangfer_app\"></div>");
    html = null;
    html_fix = null;
    html_clothes = null;
    html_shoes = null;
    html_package = null;
    html_express = null;
    html_helper = null;
    html_shop = null;
    for (i = 0, len = bangfer_app.length; i < len; i++) {
      app = bangfer_app[i];
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
    html = html_fix + "\n" + html_clothes + "\n" + html_shoes + "\n" + html_package + "\n" + html_express + "\n" + html_helper + "\n" + html_shop;
    return $("#bangfer_app").append(html);
  };

  $(function() {
    bangfer_ws = 1;
    return bangfer_init(bangfer_app);
  });

}).call(this);
