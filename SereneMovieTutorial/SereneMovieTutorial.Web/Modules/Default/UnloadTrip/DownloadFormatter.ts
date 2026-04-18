namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerFormatter()
    export class DownloadFormatter implements Slick.Formatter {

        format(ctx: Slick.FormatterContext) {

            return "<a class='download-voucher'>" +
                "<i class='fa fa-print text-green'></i>" +
                "</a>";
        }
    }
}