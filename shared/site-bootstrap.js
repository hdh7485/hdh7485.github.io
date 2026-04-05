(function () {
    var script = document.currentScript;
    var verification = '';
    var meta;

    if (script && script.dataset && script.dataset.searchConsoleVerification) {
        verification = script.dataset.searchConsoleVerification;
    } else if (
        window.quizCollectionSiteVerification
        && window.quizCollectionSiteVerification.google
    ) {
        verification = window.quizCollectionSiteVerification.google;
    }

    if (!verification) {
        return;
    }

    meta = document.querySelector('meta[name="google-site-verification"]');

    if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'google-site-verification';
        document.head.appendChild(meta);
    }

    meta.content = verification;
}());
