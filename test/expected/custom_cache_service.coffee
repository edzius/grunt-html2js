angular.module('templates-custom_cache_service_coffee', ['../test/fixtures/one.tpl.html'])

angular.module("../test/fixtures/one.tpl.html", []).run(["customCache", (customCache) ->
  customCache.put("../test/fixtures/one.tpl.html",
    "1 2 3")
])
