Package.describe({
    summary: "jQuery grid plugin"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    
    api.add_files([
        "css/ui.jqgrid.css",
        "js/i18n/grid.locale-en.js",
        "js/jquery.jqGrid.min.js",
    ], "client");
});
