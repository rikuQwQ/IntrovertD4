addNewTip = function () {

    const tipsParent = $('.tips__inner.custom-scroll.js-tip-items');
    const value = $('.text-input.control--suggest--input.js-control--suggest--input.control--suggest--input-inline.linked-form__cf.js-linked-pei').val();
    let tip = $('<div>', {
        class: 'tips-item js-tips-item js-cf-actions-item',
        'data-type': 'text',
        'data-id': '',
        id: 'phoneNumberSearch'
    });

    let tipIconContainer = $('<span>', { class: 'tips-icon-container' });
    let tipIcon = $('<span>').text('\u{1F50D}');
    let text = $('<span>').text('Нагуглить');
    tipIcon.appendTo(tipIconContainer);
    tipIconContainer.appendTo(tip);
    text.appendTo(tip);
    tip.appendTo(tipsParent);

    tipsParent.on('mousedown', '#phoneNumberSearch', function () {
        window.open('http://letmegooglethat.com/' + value, '_blank');
        const yandexUrl = 'https://yandex.ru/search/?text=' + encodeURIComponent(value);
        window.open(yandexUrl, '_blank');
    });
};


widgetNameIntr = function () {
    var widget = this;
    this.code = null;

    this.yourVar = {};
    this.yourFunc = function () { };

    this.bind_actions = function () {
    };

    this.render = function () {
        addNewTip();
    };

    this.init = function () {
    };

    this.bootstrap = function (code) {
        widget.code = code;
        var status = 1;

        if (status) {
            widget.init();
            widget.render();
            widget.bind_actions();
            $(document).on('widgets:load', function () {
                widget.render();
            });
        }
    }
};

yadroWidget.widgets['widget-name'] = new widgetNameIntr();
yadroWidget.widgets['widget-name'].bootstrap('widget-name');
