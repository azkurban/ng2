const templates = [
	require('./head-cell-text.tpl.html'),

	require('./body-cell-text.tpl.html'),
	require('./body-cell-array.tpl.html'),
	require('./body-cell-bool.tpl.html'),
	require('./body-cell-email.tpl.html'),
	require('./body-cell-image.tpl.html'),
	require('./body-cell-select.tpl.html'),
	require('./body-cell-group.tpl.html'),
	require('./body-cell-currency.tpl.html'),

	require('./edit-cell-date.tpl.html'),
	require('./edit-cell-array.tpl.html'),
	require('./edit-cell-text.tpl.html'),
	require('./edit-cell-dropdown.tpl.html'),
	require('./edit-cell-email.tpl.html'),
	require('./edit-cell-number.tpl.html'),
	require('./edit-cell-currency.tpl.html'),
	require('./edit-cell-bool.tpl.html'),
	require('./edit-cell-password.tpl.html'),
	require('./edit-cell-textarea.tpl.html'),

	require('./foot-cell-text.tpl.html'),
	require('./foot-cell-currency.tpl.html'),

	require('./toolbar-top.tpl.html'),
	require('./toolbar-bottom.tpl.html'),
	require('./toolbar-left.tpl.html'),
	require('./toolbar-right.tpl.html'),

	require('./plugin-pager.tpl.html'),
	require('./plugin-progress.tpl.html'),
	require('./plugin-export.tpl.html'),
	require('./plugin-popup.column-chooser.tpl.html')
];

export const template = templates.join('\n\n');
