angular.module('templates-custom_cache_service_js', ['../test/fixtures/one.tpl.html']);

angular.module("../test/fixtures/one.tpl.html", []).run(["customCache", function(customCache) {
  customCache.put("../test/fixtures/one.tpl.html",
    "1 2 3");
}]);
