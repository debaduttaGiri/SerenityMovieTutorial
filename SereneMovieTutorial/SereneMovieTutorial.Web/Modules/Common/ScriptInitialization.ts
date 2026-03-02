/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace SereneMovieTutorial.ScriptInitialization {
    Q.Culture.dateFormat = "dd-MM-yyyy";
    Q.Culture.dateTimeFormat = "dd-MM-yyyy HH:mm";
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('SereneMovieTutorial');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;
}   