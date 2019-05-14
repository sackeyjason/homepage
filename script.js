var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['work-modal'],
});
// modal.setFooterContent(content)('modal');

document.querySelectorAll('.work').forEach(element => {
    // Wrap links
    var wrapper = document.createElement('a');
    var index = element.dataset.index;
    var template = document.querySelector('template[data-index="' + index + '"]').innerHTML;
    var titleTemplate = element.children[0].innerHTML;

    var modalTemplate = titleTemplate + '<div class="work-modal-content">' + template + '</div>';

    wrapper.setAttribute('href', '#!');
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);

    wrapper.addEventListener('click', () => {

        modal.setContent(titleTemplate + template);
        modal.open.call(modal);

    });
});
